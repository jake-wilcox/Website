import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface props {
    toggleVisable: () => void;
    token: string;
    errorNotification: () => void;
}


interface sigData {
    first_name: string
    last_name: string
    full_name: string
    photo: string

}







const VisitorsModal = ({ toggleVisable, token, errorNotification }: props) => {

    const [data, setData] = useState<sigData>({ first_name: '', last_name: '', full_name: '', photo: '' })
    const [comment, setComment] = useState('')
    const isFetched = useRef(false)

    useEffect(() => {

        async function makePost() {
            try {
                console.log('fetching')
                const response = await axios.get('https://api.jake-wilcox.com/api/getUser', { params: { 'code': token } });
                setData(response.data)
            }
            catch (error) {
                console.log(error)
                errorNotification()
                toggleVisable()

            }
        }
        console.log('inside use effect')
        if (isFetched.current) {
            console.log('already fetched')
            return;
        }
        isFetched.current = true
        makePost();
    }, [token, errorNotification]);


    const addSigHandeler = async () => {
        console.log('adding signature')

        try {



            const response = await axios.post('https://api.jake-wilcox.com/api/addSignature',
                {
                    'fullname': data.full_name,
                    'fname': data.first_name,
                    'lname': data.last_name,
                    'img': data.photo,
                    'comment': comment,
                })
            console.log(response)
        }
        catch (error) {
            console.log(error)
            errorNotification()
        }
        toggleVisable()
    }




    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-6/12 h-6/12 bg-dankBlue-700 rounded-lg p-10 text-white">
                <div className="flex justify-between items-center">
                    <p className="flex-1 text-2xl"> {!!data && data.first_name} {!!data && data.last_name} </p>
                    <div className="flex-1 flex w-16 h-18 justify-end">
                        <Image height={100} width={100} className="rounded-full" src={`data:image/jpeg;base64,${data.photo}`} alt="User Profile" />
                    </div>
                </div>
                <input className="w-full mt-5 p-7 bg-dankBlue-600 rounded-lg break-words" type="text" placeholder="add a comment!" maxLength={110} onChange={event => setComment(event.target.value)} />
                <button className="mt-5 p-3 border-dankYellow border-4 rounded-lg" onClick={addSigHandeler}>Submit</button>
            </div>
        </div >
    );
}
export default VisitorsModal
