import {Fragment, useState} from 'react';
import FlySearch from "./components/fly-search/index.jsx";
import SkySearchBackground from "../public/images/sky-search-bg.jpg";
import FlyList from "./components/fly-list/list/index.jsx";
import FlyListLoadingSkeleton from "./components/fly-list/loading/skeleton/index.jsx";
import FlyListErrorNotFound from "./components/fly-list/error/not-found/index.jsx";
import {IoChevronDown} from "react-icons/io5";
import SortDropdown from "./components/fly-list/list/sort-dropdown/index.jsx";

function App() {
    const [results, setResults] = useState([]);
    const [roundTripResults, setRoundTripResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [roundTripLoading, setRoundTripLoading] = useState(false);
    const [isRoundTrip, setIsRoundTrip] = useState(true);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [resultsSortBy, setResultsSortBy] = useState(null);
    const [tripResultsSortBy, setTripResultsSortBy] = useState(null);

    return (
        <main className="flex justify-center items-center w-full container mx-auto font-sans">
            <section className="max-w-7xl w-full mt-12 relative h-full">
                <div className="absolute inset-0 -z-10"></div>
                <div className="relative overflow-hidden">
                    <div className="relative p-6 flex flex-col items-center">
                        <div id="sky-search-background" style={{ backgroundImage: `url(${SkySearchBackground})` }} className="rounded"/>
                        <FlySearch
                            setResults={setResults}
                            loading={loading}
                            setLoading={setLoading}
                            setRoundTripResults={setRoundTripResults}
                            roundTripLoading={roundTripLoading}
                            setRoundTripLoading={setRoundTripLoading}
                            isRoundTrip={isRoundTrip}
                            setIsRoundTrip={setIsRoundTrip}
                            setSearchPerformed={setSearchPerformed}
                        />
                    </div>
                    {searchPerformed && (
                        <div className="bg-cyan-600/30 backdrop-blur-sm p-4 rounded gap-y-4 flex flex-col">
                            <div className="flex justify-end text-xs font-semibold text-gray-200 z-10">
                                <SortDropdown sortBy={resultsSortBy} setSortBy={setResultsSortBy}></SortDropdown>
                            </div>
                            <>
                                {results.length > 0 ? (
                                    <FlyList results={results} sortBy={resultsSortBy}/>
                                ) : loading ? (
                                    <FlyListLoadingSkeleton/>
                                ) : !loading && results.length === 0 && searchPerformed ? (
                                    <FlyListErrorNotFound/>
                                ) : null}
                            </>
                            {isRoundTrip && (
                                <Fragment>
                                    <div className="bg-white/20 w-full h-[1px]"></div>
                                    <div className="flex justify-end text-xs font-semibold text-gray-200 z-10">
                                        <SortDropdown sortBy={tripResultsSortBy} setSortBy={setTripResultsSortBy}></SortDropdown>
                                    </div>
                                    <>
                                        {roundTripResults.length > 0 ? (
                                            <FlyList results={roundTripResults} sortBy={tripResultsSortBy}/>
                                        ) : roundTripLoading ? (
                                            <FlyListLoadingSkeleton/>
                                        ) : !roundTripLoading && roundTripResults.length === 0 && searchPerformed ? (
                                            <FlyListErrorNotFound/>
                                        ) : null}
                                    </>
                                </Fragment>
                            )}
                        </div>
                        ) }
                </div>
            </section>
        </main>
    );
}

export default App;
