import {getDate} from "../../../../utils/time/getDate.js";

const FormElementsDateInput = ({name, id, onChange, value, defaultValue = getDate(1), min = getDate(0)}) => {
    return (
        <div className="relative py-0.5">
            <input type="date" onChange={onChange} value={value} name={name} id={id} defaultValue={defaultValue} min={min}
                   className="focus:outline-0 rounded px-2 text-white text-xs sm:text-base [color-scheme:dark] bg-primary backdrop-blur-sm"/>
            <span className="absolute inset-0 bg-black/30 -z-10 blur-xs rounded-md backdrop-blur-xl"/>
        </div>
    );
};

export default FormElementsDateInput;