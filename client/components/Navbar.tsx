import React from "react"
import Link from "next/link"

function Navbar(){
    return (
        <div className="flex justify-center sticky top-0">
            <div className="flex w-8/12 text-sky-100">
                <Link href="/Landing" className="flex-1 bg-sky-900 p-2 rounded-l-full border-2  border-sky-600 shadow-r-3xl">
                    home icon
                </Link>
                <button className="flex-1 bg-sky-900 p-2 border-y-2 border-r-2  border-sky-600 shadow-r-3xl">
                    about me
                </button>
                <button className="flex-1 bg-sky-900 p-2 border-y-2  border-sky-600 shadow-r-3xl">
                    Projects
                </button>
                <Link href="/Test" className="flex-1 bg-sky-900 p-2 rounded-r-full border-2  border-sky-600 shadow-r-3xl" >
                    Visitors Page
                </Link>                                
            </div>
        </div>
        )
}

export default Navbar