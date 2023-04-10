import React, { useState, usseEffect } from 'react';
import Navbar from '../components/Navbar';
import useAxios from 'axios-hooks';

const VisitorsModal = ( {isVisable, token} ) => {
if (!isVisable) return null;

  return (
  <div className ="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
    <div className="w-6/12 h-6/12 bg-white flex rounded-lg p-10">
        <p>{token}</p>
    </div>
   </div>
  );
}
export default VisitorsModal
