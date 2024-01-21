const CustomRadioButton = ({active, onClick, children}) => {
    return (
        <li className={`px-3 py-2 ${active ? 'bg-secondary rounded shadow' : ''}`}>
            <button type="button" onClick={onClick}>{children}</button>
        </li>
    );
};

export default CustomRadioButton;