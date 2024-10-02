import { memo } from "react";
import "../styles/Button.css";

const Button = memo(({ onClick, classNames, children, title=null, ariaLabel=null }) => {
    return (
        <button className={`${classNames ? classNames : ''}`} onClick={onClick} title={title} aria-label={ariaLabel}>
            {children}
        </button>
    )
});

export default Button;