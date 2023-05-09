import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
    return (
        <div className="flex">
            <div className="flex-1 m-7 p-3 rounded-md h-60 bg-dankBlue-800">

                <Skeleton />
            </div>
            <div className="flex-1 m-7 p-3 rounded-md h-60 bg-dankBlue-800">
            </div>
            <div className="flex-1 m-7 p-3 rounded-md h-60 bg-dankBlue-800">
            </div>
        </div>
    )
}
export default CardSkeleton
