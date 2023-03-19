import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState} from "react";
import ProgressBar from "./ProgressBar";


const LanguageModal = ({handleClose, data}) => {
    return (
        <motion.div className="absolute w-[400px] h-[400px] rounded-md bg-black bg-opacity-60 z-10 backdrop-blur-sm"
        initial={{opacity: 0}}
        animate= {{opacity: 1}}
        exit= {{opacity: 0}}
        >
            <div className="m-10">

            <div className="flex bg-black items-center space-x-4">

            <svg className=''xmlns="http://www.w3.org/2000/svg" width='20%' height='20%' stroke='#CB9F1F' fill='#CB9F1F' viewBox={data.svgViewbox}><path d={data.svgPath}/></svg>
            <h1 className='text-3xl'>{data.name}</h1>
            </div>
            <p>Description</p>
            <p>Projects using {data.name}</p>
            <p>Proficentcy</p>
            <ProgressBar Proficentcy={data.proficiency}/>

            </div>
            <button onClick={handleClose}>close</button>



        </motion.div>
        )
}

export default LanguageModal