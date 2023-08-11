import React from "react"
import { motion } from "framer-motion"

type Props = {
    proficentcy: number
}


const ProgressBar = ({ proficentcy }: Props) => {

    const proficentcyPx = (proficentcy / 10) * 300

    return (

        <div className="bg-slate-200 w-[300px] h-5 rounded-full flex items-center">
            <motion.div initial={{ width: 0 }} animate={{ width: proficentcyPx }} transition={{ duration: 2 }}
                className="bg-dankRed h-4 w-1/2 rounded-full flex m-1">


            </motion.div>
        </div>


    )
}

export default ProgressBar
