import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="flex justify-center sticky top-0">
      <div className="flex w-8/12 text-sky-100">
        <Link
          href="/Landing"
          className="flex-2 text-center bg-dankBlue-700 p-2 px-16 rounded-l-full border-2  border-white shadow-r-3xl"
        >
          <FontAwesomeIcon icon={faHouseChimney} />
        </Link>
        <Link
          href={"/"}
          className="flex-1 text-center bg-dankBlue-700 p-2 border-y-2 border-r-2  border-white shadow-r-3xl"
        >
          about me
        </Link>
        <Link
          href={"/projects"}
          className="flex-1 text-center bg-dankBlue-700 p-2 border-y-2  border-white shadow-r-3xl"
        >
          Projects
        </Link>
        <Link
          href="/Test"
          className="flex-1 text-center bg-dankBlue-700 p-2 rounded-r-full border-2  border-white shadow-r-3xl"
        >
          Visitors Page
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
