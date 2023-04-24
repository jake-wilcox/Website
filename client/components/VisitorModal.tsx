import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const VisitorsModal = ({ isVisable, token }) => {
    if (!isVisable) return null;

    const [data, setData] = useState({})
    const isFetched = useRef(false)

    useEffect(() => {

        async function makePost() {
            console.log('fetching')
            const response = await axios.get('http://localhost:8000/api/getUser', { params: { 'code': token } });
            setData(response.data)
        }
        console.log('inside use effect')
        if (isFetched.current) {
            console.log('already fetched')
            return;
        }
        isFetched.current = true
        makePost();
    }, []);




    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-6/12 h-6/12 bg-dankBlue-700 rounded-lg p-10 border-black border-4">
                <div className="flex justify-between items-center">
                    <p className="flex-1 text-2xl"> {!!data && data.first_name} {!!data && data.last_name} </p>
                    <div className="flex-1 flex w-16 h-18 justify-end">
                        <img className="rounded-full" src={`data:image/jpeg;base64,${data.photo}`} alt="User Profile" />
                    </div>
                </div>
                <form action="http://localhost:8000/api/addSignature" method="post">
                    <input className="w-full mt-5 p-7 bg-dankBlue-600 rounded-lg " type="text" id="comment" name="comment" placeholder="add a comment!" />
                    <button className="mt-5 p-3 border-black border-4 rounded-lg" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default VisitorsModal
