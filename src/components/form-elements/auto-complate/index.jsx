import {Fragment, useEffect, useState} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {IoChevronDown} from "react-icons/io5";
import {fetchAirports} from "../../../actions/fetch-airports.jsx";

const AutoCompleteInput = ({data, name, id, setSelected, selected}) => {
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [query, setQuery] = useState('')
    const [airports, setAirports] = useState([])
    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false)
            return
        }

        const timer = setTimeout(() => {
            fetchAirports({query, page: 1, limit: 10}).then(
                (response) => {
                    setAirports(response.data);
                }
            ).catch((e) => {
                    if (e.response && e.response.status === 404) {
                        setAirports([]);
                    }
                }
            )
        }, 1000)
        return () => clearTimeout(timer)
    }, [query]);

    useEffect(() => {
        if (data.length > 0) {
            setAirports(data)
        }
    }, [data])
    return (
        <Fragment>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div
                        className="relative w-full cursor-default overflow-hidden text-left focus:outline-none focus-visible:ring-2 sm:text-sm border-b border-b-primary py-1.5">
                        <Combobox.Input
                            id={id}
                            name={name}
                            className="w-full leading-5 focus:ring-0 font-semibold pr-8 text-primary text-sm sm:text-3xl bg-transparent flex text-center focus:outline-0 border-none"
                            displayValue={(airport) => airport.AirportName}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoChevronDown
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options
                            className="absolute mt-1 max-h-48 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {airports.length === 0 && query !== '' ? (
                                <div
                                    className="relative cursor-default flex justify-center items-center select-none px-4 py-2 text-gray-700">
                                    Havaalanı bulunamadı
                                </div>
                            ) : (
                                airports.map((item) => (
                                    <Combobox.Option key={item.id}
                                                     className={({active}) => `relative cursor-default select-none p-2 ${active ? 'bg-purple-600 text-white text-xs' : 'text-gray-900'}`}
                                                     value={item}>
                                        {({selected, active}) => (
                                            <>
                                                <span className="flex justify-between">
                                                    <span
                                                        className={`block truncate text-xs ${selected ? 'font-medium' : 'font-normal'}`}>{item.AirportName}</span>
                                                    <span
                                                        className={`truncate text-xs hidden sm:flex items-center justify-center ${selected ? 'font-medium' : 'font-normal'}`}>{item.AirportCode}</span>
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                                    </span>
                                                ) : null
                                                }</>
                                        )}
                                    </Combobox.Option>)))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </Fragment>
    );
};

export default AutoCompleteInput;