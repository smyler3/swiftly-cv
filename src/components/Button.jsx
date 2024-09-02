import "../styles/Button.css"

const Button = ({ icon=null, text=null, onClick=null, classNames=null }) => {
    return (
        <button className={`${classNames ? classNames : ''} ${text && icon ? 'icon-and-text-btn' : ''}`} onClick={onClick}>
            {icon && <span className="btn-icon-wrapper"><img src={`${icon}`} alt=""/></span>}
            {text && <span className="text">{text}</span>}
        </button>
    )
}

export default Button;