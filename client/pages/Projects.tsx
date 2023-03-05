import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectsSidebar from '../components/ProjectsSidebar';
import StackCanvas from '../components/StackCanvas';


function Projects() {
  return (
    <div>

      <Navbar/>

    <div className='flex'>
        <div className='flex-none w-2/12 m-5'>
            <ProjectsSidebar />
        </div>


      <div className='flex flex-auto bg-dankBlue-800 mt-24 mx-5 p-10 rounded-lg text-white'>

        <div className='flex-1 '>

        <h1 className='text-4xl'>Overview</h1>
        </div>
        <div className='flex-1'>
        <StackCanvas/>
        </div>



      </div>

      </div>

    </div>

  );
}
export default Projects