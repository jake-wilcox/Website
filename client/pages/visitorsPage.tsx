import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import VisitorsModal from '../components/VisitorModal';
import { toast } from 'react-toastify';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';



const visitorsPage = () => {

    const [isVisable, setIsVisable] = useState(false)
    const [token, setToken] = useState('')
    const [signatures, setSignatures] = useState()
    const signInCard = useRef(false)
    const sigsNotify = () => toast("Sorry! Couldn't fetch signatures", { type: 'error' })
    const usersNotify = () => toast("Sorry! Couldn't add your signature", { type: 'error' })

    const toggleModal = () => {
        setIsVisable(!isVisable)
    }

    useEffect(() => {

        console.log('inside use effect getting all sigs')
        async function getSigs() {

            try {
                const signatures = await axios.get('http://localhost:8000/api/getSignatures')
                console.log(signatures)
                setSignatures(signatures.data)
            }
            catch (error) {
                console.log(error)
                sigsNotify()
            }
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
        console.log('chunking')
        const tempSigs = arr
        if (!signInCard.current) {
            tempSigs.unshift({ 'fname': 'sign the page with linkedin' })
            signInCard.current = true
        }

        //console.log(tempSigs.length)
        //console.log(tempSigs.length % n)
        //console.log(n - (tempSigs.length % n))

        if (tempSigs.length % n) {
            const blanks = (n - (tempSigs.length % n))
            for (let i = 0; i < blanks; i++) {
                tempSigs.push({ 'fullname': '', 'fname': '', 'lname': '', 'img': '', 'comment': '' })
            }
        }

        const array = arr.slice()
        const chunks = []

        while (array.length) {
            chunks.push(array.splice(0, n))

        }
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
            {isVisable && <VisitorsModal toggleVisable={toggleModal} token={token} errorNotification={usersNotify} />}
            <div>

                {signatures && chunkArray(signatures, 3).map((row, i) => (
                    <div key={i} className="flex">
                        {row.map((col, i) => (
                            <div key={i} className="flex-1 bg-dankBlue-700 m-7 rounded-md p-3 h-60">
                                <div className='flex justify-between items-center p-3'>
                                    <p className='text-xl'>{col.fname} {col.lname}</p>
                                    {col.img && <img className="rounded-full" src={`data:image/jpeg;base64,${col.img}`} alt="User Profile" />}
                                </div>
                                <div className='p-3'>
                                    {col.comment && <p>{col.comment}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>

    );
}
export default visitorsPage
