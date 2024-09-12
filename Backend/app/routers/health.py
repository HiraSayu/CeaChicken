from fastapi import FastAPI, Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import boto3
from passlib.context import CryptContext
import schemas

router = APIRouter()

@router.get("/health")
async def health():
    return {"status": "ok"}
