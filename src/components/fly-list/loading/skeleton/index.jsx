import React from 'react';

const FlyListLoadingSkeleton = () => {
    return (
        <div className="flex items-center justify-between text-white/70 text-sm font-semibold py-16 bg-white/30 rounded animate-pulse relative">
            <span className="absolute left-0 -translate-y-1/2 top-1/3 bg-black/5 rounded-r-full h-4 w-4"></span>
            <span className="absolute right-0 -translate-y-1/2 top-1/3 bg-black/5 rounded-l-full h-4 w-4"></span>
        </div>
    );
};

export default FlyListLoadingSkeleton;