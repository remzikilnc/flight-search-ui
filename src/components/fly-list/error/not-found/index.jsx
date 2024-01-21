import React from 'react';
import {FcHighPriority} from "react-icons/fc";

const FlyListErrorNotFound = ({text}) => {
    return (
        <div className="flex items-center justify-center text-sm font-semibold py-8 bg-black/30 backdrop-blur-sm text-gray-100 rounded relative flex-col gap-y-3">
            <span className="bg-black/10 p-1 rounded-xl"><FcHighPriority className="h-7 w-7" /></span>
            <span className="text-xs font-thin">{text}</span>
        </div>
    );
};

export default FlyListErrorNotFound;