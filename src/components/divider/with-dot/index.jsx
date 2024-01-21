import React from 'react';

const DividerWithDot = () => {
    return (
        <div className="absolute w-1/2 sm:w-3/6 md:w-2/3 translate-x-1/2 right-1/2 -translate-y-1/2">
            <div><span className="left-0 absolute -bottom-[1px] bg-black w-1 rounded-full h-1"></span></div>
            <div className="h-1 border-b border-dashed border-black/30"></div>
            <div><span className="right-0 absolute -bottom-[1px] bg-black w-1 rounded-full h-1"></span></div>
        </div>
    );
};

export default DividerWithDot;