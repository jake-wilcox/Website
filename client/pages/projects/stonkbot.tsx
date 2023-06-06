import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function stonkbot() {
    return (
        <div>
            <Navbar />

            <div className="md:flex">
                <div className="md:flex-none md:w-2/12 md:m-5">
                    <ProjectsSidebar />
                </div>

                <div className="flex-auto bg-dankBlue-800 md:mt-24 md:mx-5 p-2 md:p-10 rounded-lg text-white">
                    <div className="">

                        <h1 className="text-4xl mb-3">Stonkbot</h1>
                        <div className="md:float-right flex justify-center md:m-5">
                            <StackCanvas
                                stack={[
                                    languages.python,

                                ]}
                            />
                        </div>
                        <div className="">
                            This page is a work in progress! the stack I used is accurate and I will get around to writing the content soon!
                            <h2 className="mt-7 text-xl"></h2>
                            <h2 className="mt-7 text-xl"></h2>
                            <h2 className="mt-7 text-xl"></h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default stonkbot;
