import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function personalWebsite() {
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
                                    languages.nextjs,
                                    languages.fastApi,
                                    languages.typescript,
                                    languages.python,
                                    languages.mongo,
                                    languages.tailwind,

                                ]}
                            />
                        </div>
                        <div className="">
                            <h1 className="text-4xl mb-3">Personal Website</h1>
                            I created this website to showcase myself and my abilities as a programmer. My goal was to incorporate everything I had learned so far and expand my
                            range of languages and techniques. Although it might not be the most polished website out there, I put a lot of time and effort into this web app, and
                            I hope that it shows.
                            <h2 className="mt-7 text-xl">About the stack</h2>
                            For this website, I decided to learn some new languages and technologies that are growing in popularity. The biggest learning
                            curve I faced for this project was using TypeScript instead of JavaScript. While Python and JavaScript are my favorite languages,
                            it was a bit of a change to use a statically typed language.Additionally, I decided to implement MongoDB as my database for the visitors page content.
                            The simplicity of a document database worked perfectly for my needs.
                            <h2 className="mt-7 text-xl">UI Design</h2>
                            One thing that sets this project apart from some of my others is the user interface (UI). In other projects, I didn't put much effort into the
                            front-end looks and enjoyed focusing more on the back-end. However, for this project, I made a greater effort to make it look good. I learned a
                            lot about vector graphics and utilized the Framer Motion React library. I also tried to get creative with how the information is portrayed, such as with the stack
                            pyramids to the right. Additionally, I had the opportunity to sharpen my Tailwind.css skills and create something that is presentable to the public.
                            <h2 className="mt-7 text-xl">Challenges</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default personalWebsite;
