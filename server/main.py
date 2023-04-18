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
from database import(
    exchange_code,    
    get_name,
    get_photo,
)

@app.get("/")
def read_root():
    return{'hello': 'world'}

@app.get("/api/addSignature/")
async def add_sig(code: str):
    print(code)
    token = await exchange_code(code)
    print('token from addsig function')
    print(token['access_token'])
    print(type(token))
    user_name = await get_name(token['access_token'])
    user_photo = await get_photo(token['access_token'])
    
    #print(user_name)
    print(user_photo)
    return 1
