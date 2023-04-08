import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';



function visitorsPage() {
    console.log(`${typeof window === 'object' && window.location.origin}/linkedin`)
  const { linkedInLogin } = useLinkedIn({
    clientId: '8616f1wje7jmk6',
    redirectUri: `${typeof window === 'object' && window.location.origin}/linkedin`,
    scope: 'r_liteprofile r_emailaddress',
    onSuccess: (code) => {
      console.log(code);
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
    </div>

  );
}
export default visitorsPage
