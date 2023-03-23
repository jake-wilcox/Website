import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ProjectsSidebar() {
  subRoutes: [
    {
      path: "",
    },
  ];

  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col text-sky-100 bg-dankBlue-700 fixed top-1/2 -translate-y-1/2 p-10 rounded-3xl">
        <Link href={"/projects"} className="my-2 text-start">
          Overview
        </Link>
        <Link href={"/projects/personalWebsite"} className="my-2 text-start">
          This Website
        </Link>
        <Link href={"/projects/myBreaks"} className="my-2 text-start">
          myBreaks
        </Link>
        <Link href={"/projects/mello"} className="my-2 text-start">
          Mello
        </Link>
        <Link href={"/projects/coolGamez"} className="my-2 text-start">
          Cool Gamez
        </Link>
        <Link href={"/projects/stonkbot"} className="my-2 text-start">
          Stonkbot
        </Link>
        <Link href={"/projects/netflixSocial"} className="my-2 text-start">
          Netflix Social
        </Link>
        <Link href={"/"} className="my-2 text-start">
          Resume Builder
        </Link>
        <Link href={"/"} className="my-2 text-start">
          Quiz Helper
        </Link>
      </div>
    </div>
  );
}

export default ProjectsSidebar;
