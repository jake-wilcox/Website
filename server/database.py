import requests
from dotenv import load_dotenv
import os
load_dotenv()



async def exchange_code(code):
    print(os.getenv('CLIENT_SECRET'))
    access_token = requests.post(
    'https://www.linkedin.com/oauth/v2/accessToken',
    params = {
        'code': code,
        # This should be same as 'redirect_uri' field value of previous Python script.
        'redirect_uri': 'http://localhost:3000/linkedin',
        # Client ID of your created application
        'client_id': '8616f1wje7jmk6',
        # Client Secret of your created application
        'client_secret': os.getenv('CLIENT_SECRET'),
    },
    ).json()['access_token']
    print(access_token)

