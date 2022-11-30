import React from "react"
import Navbar from "../components/Navbar"

function Landing(){
    return (
            <div className="flex justify-center mt-80">
                <div className="w-8/12 bg-white  text-center">
                    <p>Wilcox.com</p>
                    <Navbar/>
                </div>
            </div>
        )
}

export default Landing