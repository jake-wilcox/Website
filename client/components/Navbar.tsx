import React from "react"

function Navbar(){
    return (
        <div className="flex w-full pt-10">
            <div className="flex flex-row w-full text-cyan-100">
                <button className="flex-1 bg-cyan-900 p-2 rounded-l-full border-2  border-cyan-600 shadow-r-3xl">
                    home icon
                </button>
                <button className="flex-1 bg-cyan-900 p-2 border-y-2 border-r-2  border-cyan-600 shadow-r-3xl">
                    about me
                </button>
                <button className="flex-1 bg-cyan-900 p-2 border-y-2  border-cyan-600 shadow-r-3xl">
                    Projects
                </button>
                <button className="flex-1 bg-cyan-900 p-2 rounded-r-full border-2  border-cyan-600 shadow-r-3xl" >
                    Visitors Page
                </button>                                
            </div>
        </div>
        )
}

export default Navbar