from fastapi import FastAPI, Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
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

@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=400,
            detail="Incorrect username or password"
        )
    return {"access_token": user['username'], "token_type": "bearer"}

@router.post("/register")
async def register(user: User):
    hashed_password = get_password_hash(user.password)
    user_table.put_item(Item={'username': user.username, 'password': hashed_password})
    return {"message": "User registered successfully"}
