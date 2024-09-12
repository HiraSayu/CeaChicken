from pydantic import BaseModel

class Profile(BaseModel):
    name: str
    type: str
    nationality: str
    university: str
    comment: str
