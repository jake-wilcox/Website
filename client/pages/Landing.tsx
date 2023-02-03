import React from "react"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"

function Landing(){
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


                <div className="flex mt-80 mx-40">

                <motion.div
                initial={{x:-100, opacity: .08}}
                whileInView={{x:0, opacity: 1}}
                viewport={{once:false, amount:1}}
                transition={{duration: 2}}
                className=" flex-1 bg-red-300">

                    <h2 className="text-6xl">About Me</h2>
                    <p className="flex-1 ">Hello World! My name is Jake Wilcox. I am 23 Years old and an aspiaring full stack developer</p>
                </motion.div>

                <motion.div
                initial={{x:100, opacity: .08}}
                whileInView={{x:0, opacity: 1}}
                viewport={{once:false, amount:1}}
                transition={{duration: 2}}
                className=" flex-1 bg-blue-300">                        <p>test</p>

                    </motion.div>
                    
                  
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
                <p>fdsafdsadfs</p>
                <p>fdsafdsadfs</p>
            </div>
    </div>
        )
}

export default Landing