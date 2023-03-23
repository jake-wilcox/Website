import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import StackCanvas from "../../components/StackCanvas";
import languages from "../../public/LanguageData";

function myBreaks() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <div className="flex-none w-2/12 m-5">
          <ProjectsSidebar />
        </div>

        <div className="flex flex-auto bg-dankBlue-800 mt-24 mx-5 p-10 rounded-lg text-white">
          <div className="flex-1 ">
            <h1 className="text-4xl">myBreaks</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              dicta eos autem placeat nobis officia eligendi odit culpa illum
              incidunt aut, a vel sit, ea odio hic eaque aliquam perferendis!
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <StackCanvas
              stack={[
                languages.reactNative,
                languages.flask,
                languages.javaScript,
                languages.python,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default myBreaks;
