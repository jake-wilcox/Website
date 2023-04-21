import requests
from dotenv import load_dotenv
import os
import base64
load_dotenv()



async def exchange_code(code):

    print('inside exchange code function')
    print(code)
    print(os.getenv('CLIENT_SECRETE'))
    
    # fetching our data
    data = requests.post(
    'https://www.linkedin.com/oauth/v2/accessToken',
    params = {
        'grant_type': 'authorization_code',
        'code': code,
        # This should be same as 'redirect_uri' field value of previous Python script.
        'redirect_uri': 'http://localhost:3000/linkedin',
        # Client ID of your created application
        'client_id': '8616f1wje7jmk6',
        # Client Secret of your created application
        'client_secret': os.getenv('CLIENT_SECRETE'),
    },
    ).json()
    return data


async def get_name(access_token):
    #exchanging our access token for user info
    user_info = requests.get(
    'https://api.linkedin.com/v2/me',
    params = {
        # Any API params go here
    },
    headers = {
        'Authorization': 'Bearer ' + access_token,
        # Any other needed HTTP headers go here
    },
    ).json()
    
    print(user_info)
    return user_info

async def get_photo(access_token):
    photo_info = requests.get(
            'https://api.linkedin.com/v2/me?projection=(profilePicture(displayImage~:playableStreams))&oauth2_access_token=' + access_token
            ).json()
    # changing the first index to 0 = smaller image and 1 = bigger image
    photo_link = photo_info['profilePicture']['displayImage~']['elements'][0]['identifiers'][0]['identifier']

    response = requests.get(photo_link)
    photo = response.content
    
    incoded_photo = base64.b64encode(photo)
    print()
    return incoded_photo.decode('utf-8')
      
    

