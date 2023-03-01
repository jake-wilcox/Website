import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

function ProjectsSidebar(){

    subRoutes: [
        {
            path: ''
        }
    ]






    return (
        <div className="flex h-screen justify-center">
            <div className="flex flex-col text-sky-100 bg-dankBlue-700 fixed top-1/2 -translate-y-1/2 p-10 rounded-3xl">

                <button className="my-2 text-start">Overview</button>
                <button className="my-2 text-start">This Website</button>
                <button className="my-2 text-start">myBreaks</button>
                <button className="my-2 text-start">Resume Builder</button>
                <button className="my-2 text-start">Mello</button>
                <button className="my-2 text-start">Cool Gamez</button>
                <button className="my-2 text-start">Stonkbot</button>
                <button className="my-2 text-start">Quiz Helper</button>
                <button className="my-2 text-start">Netflix Social</button>
                                    
            </div>
        </div>
        )
}

export default ProjectsSidebar