import React from 'react';
import {FcHighPriority} from "react-icons/fc";

const FlyListErrorNotFound = () => {
    return (
        <div className="flex items-center justify-center text-sm font-semibold py-8 bg-black/30 backdrop-blur-sm text-gray-100 rounded relative flex-col gap-y-3">
            <span className="bg-black/10 p-1 rounded-xl"><FcHighPriority className="h-7 w-7" /></span>
            <span className="text-xs font-thin">Seçtiğiniz havalimanları arasında şu an bir uçuş bulanamamakta. Lütfen bir süre sonra veya farklı bir gün seçerek tekrar deneyiniz.</span>
        </div>
    );
};

export default FlyListErrorNotFound;