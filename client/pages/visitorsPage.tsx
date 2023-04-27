import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import VisitorsModal from '../components/VisitorModal';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';



const visitorsPage = () => {

    const [isVisable, setIsVisable] = useState(false)
    const [token, setToken] = useState('')
    const [signatures, setSignatures] = useState([])

    const toggleModal = () => {
        setIsVisable(!isVisable)
    }

    useEffect(() => {

        console.log('inside use effect getting all sigs')
        async function getSigs() {
            const signatures = await axios.get('http://localhost:8000/api/getSignatures')
            console.log(signatures)
            setSignatures(signatures)
        }

        getSigs();
    }, [])



    const { linkedInLogin } = useLinkedIn({
        clientId: '8616f1wje7jmk6',
        redirectUri: `${typeof window === 'object' && window.location.origin}/linkedin`,
        scope: 'r_liteprofile r_emailaddress',
        onSuccess: (code) => {
            console.log(code);
            setToken(code)
            toggleModal()
        },
        onError: (error) => {
            console.log(error);
        },
    });



    const chunkArray = (arr, n) => {
        const array = arr.slice()
        const chunks = []
        while (array.length) chunks.push(array.splice(0, n))
        return chunks
    }






    return (
        <div>
            <Navbar />
            <img
                onClick={linkedInLogin}
                src={linkedin.src}
                alt="Sign in with Linked In"
                style={{ maxWidth: '180px', cursor: 'pointer' }}
            />
            {isVisable && <VisitorsModal toggleVisable={toggleModal} token={token} />}
            <div>




            </div>
        </div>

    );
}
export default visitorsPage
