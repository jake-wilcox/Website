
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function gameOfLife() {
    return (
        <div>
            <Navbar />

            <div className="md:flex">
                <div className="md:flex-none md:w-2/12 md:m-5">
                    <ProjectsSidebar />
                </div>

                <div className="flex-auto bg-dankBlue-800 md:mt-24 md:mx-5 p-2 md:p-10 rounded-lg text-white">
                    <div className="">

                        <h1 className="text-4xl mb-3">Game Of Life</h1>
                        <div className="md:float-right flex justify-center md:m-5">
                            <StackCanvas
                                stack={[
                                    languages.react,
                                    languages.typescript,
                                    languages.python,
                                    languages.mysql,
                                    languages.tailwind,

                                ]}
                            />
                        </div>
                        <div className="">
                            <h2 className="mt-7 text-xl">Introduction</h2>
                            <h3 className="mt-5 text-l">Vision</h3>
                            <h3 className="mt-5 text-l">Goals</h3>
                            <h2 className="mt-7 text-xl">10/28/23</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default gameOfLife;
