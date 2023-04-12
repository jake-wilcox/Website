import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorsModal = ( {isVisable, token} ) => {
if (!isVisable) return null;

const [data, setData] = useState({})

useEffect(() => {
    
    async function makePost(){
        const response = await axios.get('http://localhost:8000/api/addSignature', {params: {'code': token}});

        setData(response.data)
    }
makePost();
}, []);





  return (
  <div className ="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
    <div className="w-6/12 h-6/12 bg-white flex rounded-lg p-10">
        
        {!!data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </div>
   </div>
  );
}
export default VisitorsModal
