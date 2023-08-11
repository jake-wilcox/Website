import Image from "next/image"
import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Logo from "../components/Logo"
import { motion, AnimatePresence } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import parse from 'html-react-parser'

import { kaya, fam, jobs, simMeeting, cousins, flex, grad, homoners, moo } from '../public/photos'

function Landing() {

    const defaultImage = kaya
    const defaultText = ['About Me', '<p>Hello World! My name is Jake Wilcox. I am 23 Years old and an aspiaring full stack developer.</p> <br><p>To learn more about my personal life, click the button on the right. If you want to get down to buisness, hit the professional button on the left.</p>']

    const personalPhotos = [fam, homoners, cousins, kaya]
    const personalText = [['Growing Up', "I was born and raised in Centennial, Colorado, where I loved enjoying nature and the outdoors. Some of my hobbies (other than programming) include playing tennis, snowboarding, going on bike rides, and spending time with friends and family. I loved growing up in Colorado, and I was surrounded by wonderful people all the way."], ['Friends and Family', "Whenever someone asks me about my hobbies, the first thing I always say is that I like spending time with friends and family. We don't have to be doing anything in particular, I just enjoy being around the best people in the world."], ["Travel", "My Grandparents on both sides worked in the travel industry so traveling has been a big part of my family's life. I have been fortunate enough to visit a few countries in Europe and hope that one day, I can see as much of the world as my grandparents have seen."], ["Kaya", "Roses are red, violets are blue, here's a poem about Kaya, and a picture of her too."]]
    const [personalIndx, setPersonalIndx] = useState(0)

    const professionalPhotos = [grad, flex, jobs, simMeeting]
    const professionalText = [['ASU Alumni', 'In December of 2022, I graduated from Arizona State University with a Bachelor of Science degree in Computer Information Systems. While attending ASU, I developed a passion for programing and made friendships that will last a lifetime. I truly valued my time at Arizona State and will always be a proud sun devil. Forks Up!'], ["Continued Growth", "Since graduation I have continued to build my software development skills by taking additional courses, working on projects, and refining my skills as a developer. I recently completed a course on Data Structures and Algorithms through Udemy. I am also working on a few projects that you can find on my projects page, and working on Leetcode Daily."], ["Work Experience", "Throughout the years I have worked at several great companies in a wide range of positions. Although these roles may not be related to the positions I am  looking for now, they still taught me many valuable skills that will be applicable to any job and life in general."], ["SIMS Arizona", "While attending ASU, my mobile development class professor gave me the great opportunity to speak at the quarterly Society for Information Management meeting. I was able to introduce myself and some of the projects I had been working on and met IT executives from the Phoneix are. It was an awesome opportunity."]]
    const [professionalIndx, setProfesonalIndx] = useState(0)

    const [currentImage, setImage] = useState(defaultImage)
    const [currentAbout, setAbout] = useState(defaultText)


    const nextPersonal = () => {
        if (personalIndx < personalPhotos.length && personalIndx < personalText.length) {
            setAbout(personalText[personalIndx])
            setImage(personalPhotos[personalIndx])
            setPersonalIndx(personalIndx + 1)
        }
        // else we can grey out the button
    }
    const nextProfesonal = () => {
        if (professionalIndx < professionalPhotos.length && professionalIndx < professionalText.length) {
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
                <div className="w-8/12 p-5 pb-40 md:flex top-2/4 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 fixed">
                    <div className="flex-1 flex justify-center ">
                        <Logo />
                    </div>
                    <div className="flex-1 text-l text-white  flex justify-center items-center">
                        <p>Welcome to my personal website! Have a look around and when you&apos;re done, consider signing the visitors page! Enjoy. 😃</p>
                    </div>
                </div>
            </div>


            <div className=" bg-dankBlue-900 relative z-10 text-white mt-36 2xl:mt-72 mb-20" >
                <Navbar />
                <div id="aboutMe" className=" mt-96 mx-2 md:mx-32 lg:mx-40 p-5 bg-dankBlue-800 rounded-lg">
                    <div className="my-3 py-1">
                        <a href="https://github.com/jake-wilcox" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="bg-dankBlue-700 h-7 text-dankRed p-2 m-1 rounded-lg" icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/jakewilcox/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="bg-dankBlue-700 h-7 text-dankRed p-2 m-1 rounded-lg" icon={faLinkedin} />
                        </a>
                        <a href="mailto: jakewilcox242@mail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="bg-dankBlue-700 h-7 text-dankRed p-2 m-1 rounded-lg" icon={faEnvelope} />
                        </a>
                    </div>

                    <div className="md:flex">

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: .1 }}
                            transition={{ duration: 2 }}
                            className=" flex-1">

                            <AnimatePresence initial={false} mode='wait'>
                                <motion.div
                                    key={currentImage.src}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .3 }}
                                    className="p-5"
                                >


                                    <h2 className="text-6xl">{currentAbout[0]}</h2>
                                    <br />
                                    {parse(currentAbout[1])}

                                </motion.div>
                            </AnimatePresence>


                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: .1 }}
                            transition={{ duration: 2 }}
                            className="flex-2 ">




                            <AnimatePresence initial={false} mode='wait'>
                                <motion.div
                                    key={currentImage.src}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .3 }}

                                >
                                    <Image className="rounded-lg" src={currentImage} alt='/' width={426} />
                                </motion.div>
                            </AnimatePresence>





                        </motion.div>



                    </div>
                    <div className="flex justify-between mt-4">

                        <button className=" p-2 w-32 bg-stone-600 rounded-xl border-sky-600 shadow-r-2xl" onClick={nextProfesonal}>Professional</button>
                        <button className=" p-2 w-32 bg-stone-600 rounded-xl border-sky-600 shadow-r-2xl" onClick={resetAboutMe}><FontAwesomeIcon icon={faRotateLeft} /></button>
                        <button className=" p-2 w-32 bg-stone-600 rounded-xl border-sky-600 shadow-r-2xl" onClick={nextPersonal}>Personal</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Landing
