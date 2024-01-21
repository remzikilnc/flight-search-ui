import {Fragment} from 'react';
import {formatTime} from "../../../utils/time/formatTime.js";
import DividerWithDot from "../../divider/with-dot/index.jsx";
import DividerDashed from "../../divider/dashed/index.jsx";
import {getDurationInMinutes} from "../../../utils/time/getDurationInMinutes.js";

const FlyList = ({sortBy,results}) => {
    const sortedResults = [...results].sort((a, b) => {
        if (sortBy === null) return ;
        let aValue = a[sortBy];
        let bValue = b[sortBy];

        if (sortBy === 'duration') {
            return getDurationInMinutes(a[sortBy]) - getDurationInMinutes(b[sortBy]);
        }

        if (new Date(aValue) instanceof Date && !isNaN(new Date(aValue).valueOf())) {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
            return aValue - bValue;
        }

        if (!isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue))) {
            aValue = parseFloat(aValue);
            bValue = parseFloat(bValue);
            return aValue - bValue;
        }

        return aValue.localeCompare(bValue);
    });
    return (
        <Fragment>
            {sortedResults.map((result) => (
                <div key={result.id} className="bg-white rounded my-2 p-7 px-4 sm:px-10 py-4 text-black shadow-black shadow-2xl relative overflow-hidden">
                    <div className="-top-8 absolute translate-x-1/2 right-1/2"></div>
                    <div className="flex justify-between font-semibold text-base sm:text-xl pb-2 gap-x-2">
                        <span className="absolute left-0 -translate-y-1/2 top-1/3 bg-[#11323a] rounded-r-full h-4 w-4"></span>
                        <span className="absolute right-0 -translate-y-1/2 top-1/3 bg-[#11323a] rounded-l-full h-4 w-4"></span>
                        <div className="flex items-center justify-center gap-x-2">
                            <span><img className="h-5 w-5 min-h-5 min-w-5" src={result.airlineLogo} alt="Airline Company Logo"/></span>
                            <span>{result.airlineCompany}</span>
                        </div>
                        <span className="text-black text-base sm:text-xl">{result.price}<span
                            className="text-xs font-thin ml-1">{result.priceCurrency}</span></span>
                    </div>
                    <DividerDashed/>
                    <div className="py-4 font-semibold flex justify-between">
                        <div className="flex flex-col items-center">
                            <span className="text-primary text-base sm:text-xl">{result.departureAirportCode}</span>
                            <span className="text-gray-700 font-thin text-xs">{result.departureCity}</span>
                        </div>
                        <div className="flex justify-between gap-x-8 sm:gap-x-16 md:gap-x-24 flex-row items-center font-normal relative">
                            <span className="text-sm md:text-xl hidden sm:flex font-semibold text-black/80">{formatTime(result.departureDateTime)}</span>
                            <div className="flex flex-col bg-white p-2 items-center z-10 ">
                                <span className="text-gray-700 text-sm lowercase">{result.duration}</span>
                                <span className="text-2xs truncate">Uçuş Süresi</span>
                            </div>
                            <span className="text-sm md:text-xl hidden sm:flex font-semibold text-black/80">{formatTime(result.arrivalDateTime)}</span>
                           <DividerWithDot/>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-primary text-base sm:text-xl">{result.arrivalAirportCode}</span>
                            <span className="text-gray-700 font-thin text-xs">{result.arrivalCity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default FlyList;