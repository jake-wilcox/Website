import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VisitorsModal from '../components/VisitorModal';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';



const visitorsPage = () => {

const [isVisable, setIsVisable] = useState(false)
const[token, setToken] = useState('')

    
  const { linkedInLogin } = useLinkedIn({
    clientId: '8616f1wje7jmk6',
    redirectUri: `${typeof window === 'object' && window.location.origin}/linkedin`,
    scope: 'r_liteprofile r_emailaddress',
    onSuccess: (code) => {
      console.log(code);
      setToken(code)
      setIsVisable(true)
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      <Navbar/>
      <img
      onClick={linkedInLogin}
      src={linkedin.src}
      alt="Sign in with Linked In"
      style={{ maxWidth: '180px', cursor: 'pointer' }}
    />
    <VisitorsModal isVisable={isVisable} token={token}/>
    </div>

  );
}
export default visitorsPage
