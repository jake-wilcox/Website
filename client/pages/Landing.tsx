import Image from "next/image"
import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Logo from "../components/Logo"
import { motion, AnimatePresence } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'

import parse from 'html-react-parser'

import { kaya, homoners, fam, jobs, simMeeting } from '../public'

function Landing(){

    const defaultImage = fam
    const defaultText = ['About Me', '<p>Hello World! My name is Jake Wilcox. I am 23 Years old and an aspiaring full stack developer.</p> <br><p>To learn more about my personbal life, click the button on the right. If you want to get down to buisness, hit the professional button on the left.</p>']

    const personalPhotos = [kaya, homoners]
    const personalText = [['testing1', "testing 1"], ['testin2', 'rest']]
    const [personalIndx, setPersonalIndx] = useState(0)

    const professionalPhotos = [jobs, simMeeting]
    const professionalText = [['ASU Alumni', 'I graduated from asu!']]
    const [professionalIndx, setProfesonalIndx] = useState(0)

    const [currentImage, setImage] = useState(defaultImage)
    const [currentAbout, setAbout] = useState(defaultText)


    const nextPersonal = () => {
        if(personalIndx < personalPhotos.length && personalIndx < personalText.length){
            setAbout(personalText[personalIndx])
            setImage(personalPhotos[personalIndx])
            setPersonalIndx(personalIndx + 1)
        }
        // else we can grey out the button
    }
    const nextProfesonal = () => {
        if(professionalIndx < professionalPhotos.length && professionalIndx < professionalText.length){
            setAbout(professionalText[professionalIndx])
            setImage(professionalPhotos[professionalIndx])
            setProfesonalIndx(professionalIndx + 1)
        }
        // else we can grey out the button
    }

    const resetAboutMe = () => {
        setAbout(defaultText)
        setImage(defaultImage)
        setPersonalIndx(0)
        setProfesonalIndx(0)
    }






    return (
        <div>
            <div className="grid place-items-center  mt-80 p-5">
                <div className="w-8/12 p-5 pb-40 flex top-2/4 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 fixed">
                    <div className="flex-1 flex justify-center ">
                        <Logo/>
                    </div>
                    <div className="flex-1 text-l text-white  flex justify-center items-center">
                        <p>Welcome to my personal website! Have a look around and when you're done, consider signing the visitors page! Enjoy. 😃</p>
                    </div>
                </div>
            </div>
        

            <div className=" bg-dankBlue-900 relative z-10 text-white mt-36" >


                <Navbar/>

                <div className=" mt-96 mx-40 p-10 bg-dankBlue-800 rounded-lg">

                <div className="flex">

                    <motion.div
                    initial={{x:-50, opacity: 0}}
                    whileInView={{x:0, opacity: 1}}
                    viewport={{once:false, amount:.1}}
                    transition={{duration: 2}}
                    className=" flex-1">

                        <AnimatePresence initial={false} mode='wait'>
                            <motion.div
                            key={currentImage.src}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: .3}}
                            className="p-5"
                            >


                        <h2 className="text-6xl">{currentAbout[0]}</h2>
                        <br/>
                        {parse(currentAbout[1])}

                        </motion.div>
                        </AnimatePresence>


                    </motion.div>

                    <motion.div
                    initial={{x:50, opacity: 0}}
                    whileInView={{x:0, opacity: 1}}
                    viewport={{once:false, amount:.1}}
                    transition={{duration: 2}}
                    className="flex-2 ">




                        <AnimatePresence initial={false} mode='wait'>
                            <motion.div
                            key={currentImage.src}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: .3}}
                            
                            >
                                <Image className="rounded-lg" src={currentImage} alt='/'width={426}/>
                            </motion.div>
                        </AnimatePresence>
                        
                        

                      
                    
                    </motion.div>
                    
                    
                  
                </div>
                <div className="flex justify-between mt-4">

                <button className=" p-2 w-32 bg-stone-600 rounded-xl border-sky-600 shadow-r-2xl" onClick={nextProfesonal}>Professonal</button>
                <button className=" p-2 w-32 bg-stone-600 rounded-xl border-sky-600 shadow-r-2xl" onClick={resetAboutMe}><FontAwesomeIcon icon={faRotateLeft} /></button>
                <button className=" p-2 w-32 bg-stone-600 rounded-xl border-sky-600 shadow-r-2xl" onClick={nextPersonal}>Personal</button>
                </div>

                </div>



             
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
              
    
            </div>
    </div>
        )
}

export default Landing