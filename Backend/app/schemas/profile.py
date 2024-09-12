from pydantic import BaseModel

class Profile(BaseModel):
    name: str
    type: str
    nationality: str
    university: str
    major: str
    gender: str
