from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ['https://localhost:3000',
           'http://localhost:3000']
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'], 
    )
from model import Signature

from database import(
    exchange_code,    
    get_name,
    get_photo,
    fetch_all_signatures,
    save_signature,
)

@app.get("/")
def read_root():
    return{'hello': 'world'}

@app.get("/api/getUser/")
async def get_user(code: str):
    token = await exchange_code(code)
    user_name = await get_name(token['access_token'])
    user_photo = await get_photo(token['access_token'])

    user_info = {'first_name': user_name['firstName']['localized']['en_US'],
                 'last_name': user_name['lastName']['localized']['en_US'],
                 'photo': user_photo,
                 }
    
    # print(user_name)
    # print(user_photo)

    print(user_info)
    return user_info


@app.post("/api/addSignature")
async def add_sig(data: Signature):
    print('adding signature')
    print(data)
    res = await save_signature(data) 

    

@app.get("/test")
async def test():
    print('inside test function')
    s = await fetch_all_signatures()
    print(s)



