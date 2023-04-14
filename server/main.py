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
    get_user
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
    user_info = await get_user(token['access_token'])

    print(user_info)
    return 1
