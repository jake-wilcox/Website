import React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'




type Props = {
    handleClose: React.MouseEventHandler<HTMLButtonElement>;
    data: {
        name: string;
        svgPath: string;
        svgViewbox: string;
        description: string;
        cords: {}[];
        proficiency: number;
    },
};


const LanguageModal = ({ handleClose, data }: Props) => {

    return (



        <motion.div className="absolute w-[400px] h-[400px] rounded-md bg-black bg-opacity-60 z-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="m-10">

                <div className="flex items-center space-x-4">

                    <svg className='' xmlns="http://www.w3.org/2000/svg" width='20%' height='20%' stroke='#CB9F1F' fill='#CB9F1F' viewBox={data.svgViewbox}><path d={data.svgPath} /></svg>
                    <h1 className='text-3xl'>{data.name}</h1>
                </div>

                <p className="text-lg mt-5">Description</p>
                <p>{data.description}</p>
                <p className="text-lg mt-5">Proficentcy: {data.proficiency}/10</p>
                <ProgressBar proficentcy={data.proficiency} />

            </div>
            <button className=" absolute top-4 right-4" onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>



        </motion.div>
    )
}

export default LanguageModal
