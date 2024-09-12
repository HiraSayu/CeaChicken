from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException, APIRouter
from schemas import *
from database.service.profile import insert_data, get_data_by_id
import uuid


router = APIRouter()


@router.get("/profile/{user_id}")
def read_profile(user_id: str):
    data = get_data_by_id(user_id)
    if data:
        return data
    else:
        raise HTTPException(status_code=404, detail="Profile not found")

@router.post("/profile/{user_id}")
def create_profile(user_id: str, profile: Profile):
    profile_data = profile.dict()
    profile_data['user_id'] = user_id
    insert_data(profile_data)
    return {"message": "Profile created successfully"}

@router.post("/profile")
def create_profile(profile: Profile):
    user_id = str(uuid.uuid4())
    profile_data = profile.dict()
    profile_data['user_id'] = user_id
    insert_data(profile_data)
    return {"message": "Profile created successfully", "user_id": user_id}
    