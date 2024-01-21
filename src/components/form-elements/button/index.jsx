const FormElementsButton = ({children, disabled}) => {
    return (
        <button type="submit" disabled={disabled} className="font-bold disabled:bg-primary/5 border hover:bg-primary/30 transition-all duration-300 border-white/30 w-full bg-primary rounded py-1 text-white relative text-sm sm:text-base">{children}</button>
    );
};

export default FormElementsButton;