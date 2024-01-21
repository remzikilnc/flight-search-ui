const CustomRadioButtonGroup = ({children}) => {
    return (
        <ul className="flex text-xs rounded bg-primary font-semibold text-white uppercase">
            {children}
        </ul>
    );
};

export default CustomRadioButtonGroup;