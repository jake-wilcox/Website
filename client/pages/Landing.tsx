import Image from "next/image"
import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { motion, AnimatePresence } from "framer-motion"
import kaya from '../public/kaya.jpeg'
import homoners from '../public/homoners.jpeg'
import fam from '../public/fam.jpeg'
import jobs from '../public/jobs.jpeg'
import simMeeting from '../public/simMeeting.jpeg'


function Landing(){

    const defaultImage = fam
    const defaultText = ['About Me', 'Hello World! My name is Jake Wilcox. I am 23 Years old and an aspiaring full stack developer. To learn more about my personbal life, click the button on the right. If you want to get down to buisness, hit the profesional button on the left.']

    const personalPhotos = [kaya, homoners]
    const personalText = [['testing1', "testing 1"], ['testin2', 'rest']]
    const [personalIndx, setPersonalIndx] = useState(0)

    const profesionalPhotos = [jobs, simMeeting]
    const profesionalText = [['ASU Alumni', 'I graduated from asu!']]
    const [profesionalIndx, setProfesonalIndx] = useState(0)

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
        if(profesionalIndx < profesionalPhotos.length && profesionalIndx < profesionalText.length){
            setAbout(profesionalText[profesionalIndx])
            setImage(profesionalPhotos[profesionalIndx])
            setProfesonalIndx(profesionalIndx + 1)
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
            <div className="grid place-items-center  mt-80">
                <div className="w-8/12 p-5 pb-40 flex fixed top-2/4 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0">
                    <div className=" text-6xl text-cyan-100 flex-1">
                        <p>JW</p>
                    </div>
                    <div className="text-l text-cyan-100 flex-1">
                        <p>bla bla bal bla bla bal bla bla bal bla bla bal bla bla bal bla bla bal bla bla bal bla bla bal bla bla bal bla bla bal</p>
                    </div>
                </div>
            </div>
        

            <div className=" bg-stone-900 relative z-10 text-cyan-100 mt-36" >


                <Navbar/>

                <div className="bg-green-300 mt-96 mx-40 p-10">

                <div className="flex">

                    <motion.div
                    initial={{x:-50, opacity: 0}}
                    whileInView={{x:0, opacity: 1}}
                    viewport={{once:false, amount:.1}}
                    transition={{duration: 2}}
                    className=" flex-1 bg-red-300">

                        <AnimatePresence initial={false} mode='wait'>
                            <motion.div
                            key={currentImage.src}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: .3}}
                            >


                        <h2 className="text-6xl">{currentAbout[0]}</h2>
                        <p className="">{currentAbout[1]}</p>

                        </motion.div>
                        </AnimatePresence>


                    </motion.div>

                    <motion.div
                    initial={{x:50, opacity: 0}}
                    whileInView={{x:0, opacity: 1}}
                    viewport={{once:false, amount:.1}}
                    transition={{duration: 2}}
                    className="flex-2 bg-blue-300">




                        <AnimatePresence initial={false} mode='wait'>
                            <motion.div
                            key={currentImage.src}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: .3}}
                            >
                                <Image src={currentImage} alt='/'width={426}/>
                            </motion.div>
                        </AnimatePresence>
                        
                        

                      
                    
                    </motion.div>
                    
                    
                  
                </div>
                <div className="flex justify-between mt-4">

                <button className="bg-green-400 p-2" onClick={nextProfesonal}>Professonal</button>
                <button className="bg-green-400 p-2" onClick={resetAboutMe}>Restart</button>
                <button className="bg-green-400 p-2" onClick={nextPersonal}>Personal</button>
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