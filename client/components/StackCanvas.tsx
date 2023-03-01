import React from "react";
import { motion } from "framer-motion"
import { useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'

type StackProps = {
    language: 
    {name:string
    description:string
    svg:string

    
}

}

function StackCanvas(){

    const stack = ['python', 'typescript', 'nextjs', 'fast api', 'mongodb', 'docker' , 'docker', ]
    const [cords, setCords] = useState([[{}]])
    const [cubeSize, setCubeSize] = useState(Number)

    useEffect(() => {
       makePyramad()
    },[])

    
    
    const makePyramad = async () => {
        let width = 400
        let base = Math.ceil(0.5 * ((8 * stack.length + 1)**0.5 - 1))
        let layers = new Array<number>(base)
        let cubeSize = Math.round((400/base) * .9)
        let spacing = Math.round((400/base) * .1)
        let initialSpace = spacing/2
        // console.log(cubeSize)
        // console.log(spacing)
        for(let i = 0; i < base; i++){
            layers[i] = i+1
        }
        let pointer = 0
        while(layers.reduce((a,b) => a + b, 0) > stack.length){
            layers[pointer] -= 1
            pointer += 1
        }
        layers.reverse()
        const cords: {x: number; y: number}[][] = []
        // console.log(layers)
        for(let i = 0; i < layers.length; i++){
            let yCord = (width - ((1+i) * cubeSize))
            for(let j = 0; j < layers[i]; j++){
                var xCord = initialSpace + (spacing*j) + (cubeSize*j)
                cords.push([{x: xCord, y: -100}, {x: xCord, y: yCord}])
            }
            initialSpace += Math.round(cubeSize/2) 
        }
        console.log(cords)
        setCords(cords)
        setCubeSize(cubeSize)
    }



    return (
    
        <div className='bg-white w-[400px] h-[400px]'>
            {

                cords.map(cords => (

                    <motion.div initial={cords[0]} animate={cords[1]} transition={{duration: 2, type:'spring'}}
                        className='rounded-lg border-2 border-black absolute flex justify-center items-center'
                        style={{width: `${cubeSize}px`, height: `${cubeSize}px`}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>
                        </motion.div>
                ))

            }
        </div>

    )
}

export default StackCanvas