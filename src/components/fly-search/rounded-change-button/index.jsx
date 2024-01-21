import {MdFlight} from "react-icons/md";

const RoundedChangeButton = ({onClick}) => {
    return (
        <button onClick={onClick} type="button" className="flex bg-primary rounded-full border-dashed border-white/20 hover:border-white/50 border sm:min-w-12 sm:min-h-12 min-w-8 min-h-8 hover:bg-secondary group items-center justify-center ">
            <div className="text-white/70">
                <MdFlight className="rotate-90 h-3 w-3 sm:h-4 sm:w-4 group-hover:-rotate-90 duration-300 transition-all"/>
                <MdFlight className="-rotate-90 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-90 duration-300 transition-all"/>
            </div>
        </button>
    );
};

export default RoundedChangeButton;