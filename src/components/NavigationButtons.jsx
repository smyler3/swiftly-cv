import Button from "./Button";
import backArrowIcon from "../assets/icons/backArrowIcon.svg";
import "../styles/NavigationButtons.css";

// Default back button paramaters
const defaultBackBtn = {
    'icon': backArrowIcon,
    'text': 'BACK',
    'onClick': null,
    'classNames': 'nav-btn back-btn',
}

// Default forward button parameters
const defaultForwardBtn = {
    'icon': null,
    'text': 'SAVE & CONTINUE',
    'onClick': null,
    'classNames': 'nav-btn fwd-btn',
}

const NavigationButtons = ({ back=defaultBackBtn, forward=defaultForwardBtn }) => {
    return (
        <div className="nav-btn-wrapper">
            <span>
                {back && <Button icon={back.icon} text={back.text} onClick={back.onClick} classNames={back.classNames}></Button>}
            </span>
            <span className="fwd-btn-container">
                <Button icon={forward.icon} text={forward.text} onClick={forward.onClick} classNames={forward.classNames}></Button>
            </span>
        </div>
    )
}

export default NavigationButtons;