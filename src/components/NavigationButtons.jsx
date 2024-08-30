import Button from "./Button";
import backArrowIcon from "../assets/icons/backArrowIcon.svg";
import "../styles/NavigationButtons.css";

// Default back button paramaters
const defaultBackBtn = {
    'icon': backArrowIcon,
    'text': 'Back',
    'onClick': null,
    'classNames': 'nav-btn back-btn',
}

// Default forward button parameters
const defaultForwardBtn = {
    'icon': null,
    'text': 'Save & Continue',
    'onClick': null,
    'classNames': 'nav-btn fwd-btn',
}

const NavigationButtons = ({ back=defaultBackBtn, forward=defaultForwardBtn }) => {
    return (
        <div className="nav-btn-wrapper">
            <Button icon={back.icon} text={back.text} onClick={back.onClick} classNames={back.classNames}></Button>
            <Button icon={forward.icon} text={forward.text} onClick={forward.onClick} classNames={forward.classNames}></Button>
        </div>
    )
}

export default NavigationButtons;