import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LanguageModal from "./LanguageModal";


type Language = {
    name: string;
    svgPath: string;
    svgViewbox: string;
    description: string;
    cords: {}[];
    proficiency: number;
};

type Props = {
    stack: Language[];
};

function StackCanvas({ stack }: Props) {

    const makePyramad = () => {
        let width = 400;
        let base = Math.ceil(0.5 * ((8 * stack.length + 1) ** 0.5 - 1));
        let layers = new Array<number>(base);
        let cubeSize = Math.round((width / base) * 0.85);
        let spacing = Math.round((width / base) * 0.15);
        let initialSpace = spacing / 2;
        let pointer = 0;

        // console.log(cubeSize)
        // console.log(spacing)
        for (let i = 0; i < base; i++) {
            layers[i] = i + 1;
        }
        while (layers.reduce((a, b) => a + b, 0) > stack.length) {
            layers[pointer] -= 1;
            pointer += 1;
        }
        layers.reverse();
        // console.log(layers)

        let languageIndx = 0;
        for (let i = 0; i < layers.length; i++) {
            let yCord = (width - (1 + i) * cubeSize - 5 * i) - spacing * .5;
            for (let j = 0; j < layers[i]; j++) {
                var xCord = initialSpace + spacing * j + cubeSize * j;
                stack[languageIndx].cords = [
                    { x: xCord, y: yCord - (width / 2), opacity: 0 },
                    { x: xCord, y: yCord, opacity: 1 },
                ];
                languageIndx++;
            }
            initialSpace += Math.round(cubeSize / 2);
        }
        return cubeSize;
    };

    type handleClose = {
        onClick: (event: React.MouseEvent<HTMLElement>) => void;
    };

    const cubeSize = makePyramad();

    const [size, setSize] = useState(cubeSize);
    const [data, setData] = useState(stack[0]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="bg-dankBlue-700 w-[400px] h-[400px] rounded-md shadow-lg">
                <AnimatePresence>
                    {isOpen && <LanguageModal data={data} handleClose={toggleOpen} />}
                </AnimatePresence>

                {stack.map((stack, i) => (
                    <motion.div
                        initial={stack.cords[0]}
                        key={i}
                        animate={stack.cords[1]}
                        transition={{
                            duration: 2,
                            type: "spring",
                            bounce: 0.2,
                            delay: i * 0.2,
                        }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.8 }}
                        className="rounded-lg border-2 border-black absolute flex justify-center items-center bg-dankBlue-700 "
                        style={{ width: `${cubeSize}px`, height: `${cubeSize}px` }}
                        onClick={() => {
                            toggleOpen();
                            setData(stack);
                            // console.log(stack);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80%"
                            height="80%"
                            stroke="#CB9F1F"
                            fill="#CB9F1F"
                            viewBox={stack.svgViewbox}
                        >
                            <path d={stack.svgPath} />
                        </svg>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
export default StackCanvas;
