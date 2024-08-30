const Button = ({ icon=null, text, onClick, classNames=null }) => {
    return (
        <button className={`button ${classNames ? classNames : ''}`} onClick={onClick}>
            {icon && <span className="icon-wrapper"><img src={`${icon}`} alt=""/></span>}
            <span className="text">{text}</span>
        </button>
    )
}

export default Button;