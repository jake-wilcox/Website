import Image from "next/image"
import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { motion, AnimatePresence } from "framer-motion"
import kaya from '../public/kaya.jpeg'
import homoners from '../public/homoners.jpeg'
import fam from '../public/fam.jpeg'


function Landing(){

    const personalPhotos = [kaya, homoners]
    const personalText = [['About Me', "Hello World! My name is Jake Wilcox. I am 23 Years old and an aspiaring full stack developer. To learn more about my personbal life, click the button on the right. If you want to get down to buisness, hit the profesional button on the left."]]
    var personalIndx = -1

    const profesionalPhotos = []
    const profesionalText = []
    var profesonalIndx = -1

    const [currentImage, setImage] = useState(fam)
    const [currentAbout, setAbout] = useState(['testing', 'testing testing'])

    console.log(currentAbout[0])
    console.log(currentAbout[1])

    const nextPersonal = () => {
        personalIndx += 1
        setAbout(personalText[personalIndx])
        setImage(personalPhotos[personalIndx])
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


                        <h2 className="text-6xl">{currentAbout[0]}</h2>
                        <p className="">{currentAbout[1]}</p>


                    </motion.div>

                    <motion.div
                    initial={{x:50, opacity: 0}}
                    whileInView={{x:0, opacity: 1}}
                    viewport={{once:false, amount:.1}}
                    transition={{duration: 2}}
                    className="flex-2 bg-blue-300">




                        <AnimatePresence initial={false} >
                            <motion.div>
                                <Image src={currentImage} alt='/'width={426}/>
                            </motion.div>
                        </AnimatePresence>
                        
                        

                      
                    
                    </motion.div>
                    
                    
                  
                </div>
                <div className="flex justify-between mt-4">

                <button className="bg-green-400 p-2" onClick={nextPersonal}>Professonal</button>
                <button className="bg-green-400 p-2" onClick={nextPersonal}>Restart</button>
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