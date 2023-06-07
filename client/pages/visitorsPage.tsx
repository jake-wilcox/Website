import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '../components/Navbar';
import VisitorsModal from '../components/VisitorModal';
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import CardSkeleton from '../components/CardSkeleton';


const VisitorsPage = () => {

    const [isVisable, setIsVisable] = useState(false)
    const [token, setToken] = useState('')
    const [signatures, setSignatures] = useState()
    const [isLoading, setIsLoading] = useState(true)


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
                const signatures = await axios.get('https://api.jake-wilcox.com/api/getSignatures')
                console.log(signatures)
                setSignatures(signatures.data)
                setIsLoading(false)
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



    const chunkArray = (arr: any, n: number) => {
        console.log('chunking')
        const tempSigs = arr
        if (!signInCard.current) {
            tempSigs.unshift({ 'firstCard': true, 'fname': 'sign the page with linkedin!', 'img': '/9j/4AAQSkZJRgABAQEBLAEsAAD/7QAsUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwBAAACAAQA/+EAVkV4aWYAAE1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAAACEwADAAAAAQABAAAAAAAAAAABLAAAAAEAAAEsAAAAAf/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjMyMjAxNzU4LWQ3NzYtNDM4Ni05NDFmLTA4YmYyZTU2MmQ4MzwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmY2NjY3ODQxLTg1N2ItNGU1ZC1iNjMwLTA4MDU0YzljN2Q1MTwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/8AACwgAZABkAQERAP/EABkAAQADAQEAAAAAAAAAAAAAAAAGBwgFCf/EADQQAAEBBwEFBAoDAQAAAAAAAAABAgMEBQYHERMIEhQVISI4lLEJFxgxQVFXYXWBFoXSJP/aAAgBAQAAPwDZYAAAAAAAAAAAAAAAAAAAAAOdU88llN0/HT6cxHDS6Bcq+iHu6rW4wnvXCZVf0Qy3t7LbV7UHIaVqDj5hotPtLhXrHYZxlctMonxQsQAAAAArraa7v1b/AIh95GM/R8d4D+oifNg9EQAAADnVLPZPTcmfzmfTGHl0vcY1Yh+3usMZVETK/dVRCF+vS0H1Dp/xSEG2gLwWwnVlKulUqriSRkdFSx67cOHUQitvGlToiJ8VMq7ElTSClL1c1qSbQkqgeWP3evEt7jG8qsYTPzXCm4/XpaD6h0/4pDo01de3FSTlxJpDWcnmMwf50odxEI023hFVcJ9kRVJoAAAV3tIUdOK9s5OqVkPD8wjNHS13m4x2XrLS5XC46IpjL2Orv/Kn/Hr/AIORWey3c+lKVmVSTXknAy2HaiH+lGq03us+/CbvVSvLUW+n9yqq/jdN8Jx3DtxH/S902N1nGeuF69ULa9jq7/yp/wAev+CxNm/ZruPQV45LVU+ST8vg9bV0ItW2+06aZTCbqZ6qhs0AAAArraa7v1b/AIh95GM/R8d4D+oifNg9EQAAAACF30kkzqSz1UyGTQ/EzGOlzxzDut5Gd9tU6JlcIn7MzbHVk7k0FeDn1VU/wEv5c/c6vFOm+20rOEwy0q/BTZoAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=' })
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
            {isVisable && <VisitorsModal toggleVisable={toggleModal} token={token} errorNotification={usersNotify} />}
            <div>
                {isLoading && <CardSkeleton />}
                {signatures && chunkArray(signatures, 3).map((row, i) => (

                    <div key={i} className="md:flex text-white">
                        {row.map((col: any, i: number) => (
                            < div key={i} className="md:flex-1 bg-dankBlue-800 m-7 rounded-md p-3 h-60" >
                                {col.firstCard &&
                                    <div className='cursor-pointer bg-dankBlue-700 rounded-md h-full flex justify-center items-center flex-col' onClick={linkedInLogin}>
                                        <div>
                                            <p><span className='text-dankRed'>Sign the page</span> with LinkedIn</p>
                                        </div>
                                        <div className="m-5">
                                            <FontAwesomeIcon icon={faUserPlus} size="2xl" />
                                        </div>
                                    </div>}
                                {!col.firstCard &&
                                    <div>
                                        <div className='flex items-start p-3'>
                                            {col.img && <Image className="rounded-full" width={100} height={100} src={`data:image/jpeg;base64,${col.img}`} alt="User Profile" />}
                                            <p className='text-xl p-5'>{col.fname} {col.lname}</p>
                                        </div>
                                        {col.comment && <p className="p-3">{col.comment}</p>}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div >

    );
}
export default VisitorsPage
