import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function myBreaks() {
    return (
        <div>
            <Navbar />

            <div className="md:flex">
                <div className="md:flex-none md:w-2/12 md:m-5">
                    <ProjectsSidebar />
                </div>

                <div className="flex-auto bg-dankBlue-800 md:mt-24 md:mx-5 p-2 md:p-10 rounded-lg text-white">
                    <div className="">

                        <h1 className="text-4xl mb-3">myBreaks</h1>
                        <div className="md:float-right flex justify-center md:m-5">
                            <StackCanvas
                                stack={[
                                    languages.reactNative,
                                    languages.flask,
                                    languages.javaScript,
                                    languages.python,

                                ]}
                            />
                        </div>
                        <div className="">
                            My Breaks is a mobile application that I made to help me manage the break schedule at my current job at Target. Target takes employee breaks seriously,
                            and managing the breaks of 10 team members at once while still completing my tasks was a challenge. I saw this challenge as an opportunity to improve my coding
                            skills and dive into mobile development, which is something that I had been wanting to do for a while.
                            <h2 className="mt-7 text-xl">About the Stack</h2>
                            This project was my first true full stack application, and it really got me familiar with key aspects of full stack development. for the frontend,
                            I knew I wanted to get some experience using modern javascript frameworks, but I also liked the idea of it being developed natively for our Zebra
                            devices that we use at work. A good option was using React Native because it was the best of both worlds. For the backend i went with Python
                            Flask because it was lightweight and python is my best language.
                            <h2 className="mt-7 text-xl">The Algorithem</h2>
                            My main focus of this project was  to ensure that all of my team members would get their breaks at optimal times, while still having enough people
                            on the floor to be effective. this required an algorithm that took into account many things such as a team members department, start time, end time,
                            and how much staff we have. All of this information was used calculated the an optimal break schedule.
                            <h2 className="mt-7 text-xl">Improvements</h2>
                            While the algorithm meets my needs, there is plenty of room for improvement. When I built the app, I had not yet learned about time or space complexity.
                            Looking back, there are parts of my code that could be way more efficient. Additionally, I struggled with the user interface. Although I spent time planning
                            it, I am not satisfied with the end result. I am confident that tweaking the CSS would help, but I was so focused on the algorithm that I did not get
                            around to it.Even with the flaws, I am really proud of this project. It had a lot of firsts for me and really demonstrates my ability to identify a
                            business problem and fix it with code.

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default myBreaks;
