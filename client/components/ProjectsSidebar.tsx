import Link from "next/link";
function ProjectsSidebar() {
    subRoutes: [
        {
            path: "",
        },
    ];

    return (
        <div className="md:flex md:h-screen md:justify-center">
            <div className="md:flex text-xs md:text-sm md:flex-col text-sky-100 bg-dankBlue-700 md:fixed md:top-1/2 md:-translate-y-1/2 m-3 md:p-10 rounded-2xl md:rounded-3xl p-3">
                <Link href={"/projects"} className="py-1 px-1 text-start bg-dankBlue-600 rounded-md">
                    Overview
                </Link>
                <Link href={"/projects/gameOfLife"} className="p-1 m-0.5 bg-dankBlue-600 rounded-md">
                    Game Of Life
                </Link>
                <Link href={"/projects/personalWebsite"} className="p-1 m-0.5 bg-dankBlue-600 rounded-md">
                    This Website
                </Link>
                <Link href={"/projects/myBreaks"} className="p-1 m-0.5 bg-dankBlue-600 rounded-md">
                    myBreaks
                </Link>
                <Link href={"/projects/mello"} className="p-1 m-0.5 bg-dankBlue-600 rounded-md">
                    Mello
                </Link>
                <div className="visible md:hidden"><br /></div>
                <Link href={"/projects/coolGamez"} className="p-1 m-0.5 bg-dankBlue-600 rounded-md">
                    Cool Gamez
                </Link>
                <Link href={"/projects/stonkbot"} className="p-1 m-0.5 bg-dankBlue-600 rounded-md">
                    Stonkbot
                </Link>
                <Link href={"/projects/netflixSocial"} className="p-1 m-0.5 bg-dankBlue-600 rounded-md">
                    Netflix Social
                </Link>
            </div>
        </div>
    );
}

export default ProjectsSidebar;
