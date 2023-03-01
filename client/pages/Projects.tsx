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



      <div className='flex flex-auto bg-yellow-200 pt-24'>

        <div className='flex-1 '>

        <h1 className='text-4xl'>Personal Website</h1>
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