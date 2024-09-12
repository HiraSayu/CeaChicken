from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends, HTTPException, APIRouter
import boto3
from passlib.context import CryptContext
from schemas import *


router = APIRouter()


# パスワードのハッシュ化設定
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2の設定
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# DynamoDBの設定
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
user_table = dynamodb.Table('logindb')
profile_table = dynamodb.Table('profile')

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def get_user(username: str):
    response = user_table.get_item(Key={'username': username})
    return response.get('Item')

def authenticate_user(username: str, password: str):
    user = get_user(username)
    if not user:
        return False
    if not verify_password(password, user['password']):
        return False
    return user


@router.get("/profile", response_model=Profile)
async def read_profile(token: str = Depends(oauth2_scheme)):
    user = get_user(token)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid token")
    
    response = profile_table.get_item(Key={'username': token})
    profile = response.get('Item')
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    return profile

@router.put("/profile", response_model=Profile)
async def update_profile(profile: Profile, token: str = Depends(oauth2_scheme)):
    user = get_user(token)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid token")
    
    profile_data = profile.dict()
    profile_data['username'] = user['username']
    
    profile_table.put_item(Item=profile_data)
    return profile_data
