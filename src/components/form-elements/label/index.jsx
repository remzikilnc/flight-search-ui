const FormElementLabel = ({Icon, children, htmlFor, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`text-xs sm:text-sm font-semibold text-white truncate ${className}`}>
            <div className="flex flex-col items-center">
                {Icon && Icon}
                <span>{children}</span>
            </div>
        </label>
    );
};

export default FormElementLabel;