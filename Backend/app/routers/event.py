from fastapi import FastAPI, Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import boto3
from passlib.context import CryptContext
#from schemas import *
from typing import Optional
from database.service.event import register_event, get_events_by_type

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
    user_id: str
    type: str

router = APIRouter()

@router.get("/event/{university_id}/{type}")
async def show_event(university_id: int, type: str):
    events = get_events_by_type(type)
    return events

@router.post("/event/entry") 
async def make_event(make_event: make_event):
    register_event(make_event.model_dump())
    return {"message": "event created successfully"}

@router.post("/event/join/{user_id}")
async def join_event(user_id: int, join_event: join_event):
    return {
        "user_id": user_id,
        "type": join_event.type
        }