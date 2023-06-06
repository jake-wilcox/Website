import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function mello() {
    return (
        <div>
            <Navbar />

            <div className="md:flex">
                <div className="md:flex-none md:w-2/12 md:m-5">
                    <ProjectsSidebar />
                </div>

                <div className="flex-auto bg-dankBlue-800 md:mt-24 md:mx-5 p-2 md:p-10 rounded-lg text-white">
                    <div className="">

                        <h1 className="text-4xl mb-3">Mello</h1>
                        <div className="md:float-right flex justify-center md:m-5">
                            <StackCanvas
                                stack={[
                                    languages.react,
                                    languages.expressjs,
                                    languages.javaScript,
                                    languages.nodeJs,
                                    languages.mysql,
                                    languages.tailwind,]}
                            />
                        </div>
                        <div className="">
                            Mello is a platform for Mentors and Mentees to meet and organize their goals and tasks together. This was my scrum
                            team&apos;s final project in our capstone class, and it was our most advanced and polished web app.
                            <h2 className="mt-7 text-xl">About the Stack</h2>
                            The big improvements I made to my stack during this project were express.js, tailwind, and mySQL. Although this
                            wasn&apos;t my first time using these technologies, I feel like I made vast improvements and was able to get a deep understanding of them.

                            <h2 className="mt-7 text-xl">Teamwork</h2>
                            Our team used scrum methodology during this project to organize our tasks, ideas, and projects. It was nice having
                            a rigid system like scrum because it fostered communication and hard work throughout the team.
                            <h2 className="mt-7 text-xl">Backend</h2>
                            For the back end of this project I needed to implement an authentication and account system that would
                            allow for a mentor and mentee to share their own workspace. I accomplished this mostly through some
                            mySQL magic with accounts and tasks having a workspace as their secondary key (I would just show my
                            relational diagrams but I lost them) . This allows both mentor and mentee to see the same things in their
                            workspace. This was a fun part of the project and it allowed me to dive back into relational databases.


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default mello;
