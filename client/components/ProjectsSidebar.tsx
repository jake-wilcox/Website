import Link from "next/link";
function ProjectsSidebar() {
    subRoutes: [
        {
            path: "",
        },
    ];

    return (
        <div className="md:flex md:h-screen md:justify-center">
            <div className="flex text-xs md:text-sm md:flex-col text-sky-100 bg-dankBlue-700 md:fixed md:top-1/2 md:-translate-y-1/2 m-5 md:p-10 rounded-2xl md:rounded-3xl justify-center items-center">
                <Link href={"/projects"} className="my-2 mx-2 text-start">
                    Overview
                </Link>
                <Link href={"/projects/personalWebsite"} className=" my-2 mx-2">
                    This Website
                </Link>
                <Link href={"/projects/myBreaks"} className=" my-2 mx-2 text-start">
                    myBreaks
                </Link>
                <Link href={"/projects/mello"} className="my-2 mx-2 text-start">
                    Mello
                </Link>
                <Link href={"/projects/coolGamez"} className="my-2 mx-2 text-start">
                    Cool Gamez
                </Link>
                <Link href={"/projects/stonkbot"} className="my-2 mx-2 text-start">
                    Stonkbot
                </Link>
                <Link href={"/projects/netflixSocial"} className="my-2 mx-2 text-start">
                    Netflix Social
                </Link>
            </div>
        </div>
    );
}

export default ProjectsSidebar;
