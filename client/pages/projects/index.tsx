import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function Projects() {
    return (
        <div>
            <Navbar />

            <div className="md:flex">
                <div className="md:flex-none md:w-2/12 md:m-5">
                    <ProjectsSidebar />
                </div>

                <div className="flex-auto bg-dankBlue-800 md:mt-24 md:mx-5 p-2 md:p-10 rounded-lg text-white">
                    <div className="">
                        <h1 className="text-4xl mb-3">Overview</h1>



                        <div className="float-right flex justify-center">
                            <StackCanvas
                                stack={[
                                    languages.css,
                                    languages.docker,
                                    languages.fastApi,
                                    languages.flask,
                                    languages.html,
                                    languages.java,
                                    languages.javaScript,
                                    languages.mongo,
                                    languages.mysql,
                                    languages.nextjs,
                                    languages.nodeJs,
                                    languages.python,
                                    languages.react,
                                    languages.reactNative,
                                    languages.tailwind,
                                    languages.typescript,
                                    languages.wordpress,
                                    languages.expressjs
                                ]}
                            />
                        </div>


                        <div className="">
                            Ever since I took my first steps in programming, I have loved the process of building projects. Whether I am creating software to solve a
                            problem in my life or just familiarizing myself with a new technology or language, every project has helped me grow as a developer.
                            <br /><br />
                            To the right is my tech stack. <span className='text-dankRed'>click on a square</span> to see a brief summary of the language as well as my proficiency level.
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Projects;
