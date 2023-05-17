import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function netflixSocial() {
    return (
        <div>
            <Navbar />

            <div className="flex">
                <div className="flex-none w-2/12 m-5">
                    <ProjectsSidebar />
                </div>

                <div className="flex-auto bg-dankBlue-800 mt-24 mx-5 p-10 rounded-lg text-white">
                    <div className="">

                        <div className="float-right flex justify-center m-5">
                            <StackCanvas
                                stack={[
                                    languages.python,

                                ]}
                            />
                        </div>
                        <div className="">
                            <h1 className="text-4xl mb-3">Netflix Social</h1>
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
export default netflixSocial;
