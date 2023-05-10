import React from "react";

const CardSkeleton = () => {
    return (
        <div className="flex">
            <div className="flex-1 m-7 p-3 rounded-md h-60 bg-dankBlue-800 animate-pulse">
            </div>
            <div className="flex-1 m-7 p-3 rounded-md h-60 bg-dankBlue-800 animate-pulse">
            </div>
            <div className="flex-1 m-7 p-3 rounded-md h-60 bg-dankBlue-800 animate-pulse">
            </div>
        </div>
    )
}
export default CardSkeleton
