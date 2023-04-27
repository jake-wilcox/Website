from fastapi import FastAPI
from pydantic import BaseModel

class Signature(BaseModel):
    fullname: str
    fname: str
    lname: str
    img: str
    comment: str
