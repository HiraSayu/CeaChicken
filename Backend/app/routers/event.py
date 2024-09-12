from fastapi import FastAPI, Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import boto3
from passlib.context import CryptContext
#from schemas import *
from typing import Optional

class User(BaseModel) :
    username: str
    password: str

class show_event(BaseModel):
    event_id: int
    event_name: str
  #  pictures: 
    time: str
    where_to_meet: str
    food_preference: str

class make_event(BaseModel):
    event_name: str
   # pictures:
    time: str
    where_to_meet: str
    food_preference: str
    user_id: str
    type : str

class join_event(BaseModel):
    user_id: int
    type: str

router = APIRouter()

@router.get("/event/{university_id}/{type}")
async def show_event(university_id: int, type: str):
    return {
        "university_id": university_id,
        "type": type
        }

@router.post("/event/entry") 
async def make_event(make_event: make_event):
    return {
        "event_name": make_event.event_name,
        "time": make_event.time,
        "where_to_meet": make_event.where_to_meet,
        "food_preference": make_event.food_preference,
        "user_id": make_event.user_id,
        "type": make_event.type
        }

@router.post("/event/join/{user_id}")
async def join_event(user_id: int, join_event: join_event):
    return {
        "user_id": user_id,
        "type": join_event.type
        }


