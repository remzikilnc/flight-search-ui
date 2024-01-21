import {Fragment} from "react";
import {Menu, Transition} from '@headlessui/react'
import {IoChevronDown} from "react-icons/io5";

const SortDropdown = ({sortBy, setSortBy}) => {
    return (
        <Menu as="Fragment">
            <>
            <Menu.Button className="border border-primary/30 px-3 pr-2 py-0.5 rounded-md flex items-center justify-center">
                    <span className="first-letter:uppercase">{getSortText(sortBy)}</span>
                    <IoChevronDown className="h-4 w-4 mt-0.5 mx-0.5"/>
            </Menu.Button>
            </>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-4 mt-2 w-40 origin-top-right rounded-md bg-primary/70 border border-black/20 backdrop-blur-xl shadow-xl ring-1 ring-black/5 focus:outline-none">
                    <div className="px-2 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => setSortBy('price')} className={`${active ? 'bg-cyan-700/70 text-white' : 'text-gray-900'} border-b border-b-black/10 group hover:rounded-md hover:rounded-b-none flex w-full items-center px-2 py-2 text-sm`}>
                                    Fiyat
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => setSortBy('duration')} className={`${active ? 'bg-cyan-700/70 text-white' : 'text-gray-900'} border-b border-b-black/10 group flex w-full items-center px-2 py-2 text-sm`}>
                                    Uçuş Uzunluğu
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => setSortBy('arrivalDateTime')} className={`${active ? 'bg-cyan-700/70 text-white' : 'text-gray-900'} group hover:rounded-md hover:rounded-t-none flex w-full items-center px-2 py-2 text-sm`}>
                                    Kalkış Saati
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default SortDropdown;

const getSortText = (sortBy) => {
    switch (sortBy) {
        case 'price':
            return 'Fiyat';
        case 'duration':
            return 'Uçuş Uzunluğu';
        case 'arrivalDateTime':
            return 'Kalkış Saati';
        default:
            return 'Sırala';
    }
};