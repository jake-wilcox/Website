from fastapi import FastAPI
from pydantic import BaseModel

class Signature(BaseModel):
    fname: str
    lname: str
    img: str
    comment: str
