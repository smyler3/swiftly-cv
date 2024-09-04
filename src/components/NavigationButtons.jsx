import Button from "./Button";
import backArrowIcon from "../assets/icons/backArrowIcon.svg";
import "../styles/NavigationButtons.css";

// Default back button paramaters
const backBtn = {
    'icon': backArrowIcon,
    'text': 'BACK',
    'onClick': null,
    'classNames': 'nav-btn back-btn',
}

// Default forward button parameters
const forwardBtn = {
    'icon': null,
    'text': 'SAVE & CONTINUE',
    'onClick': null,
    'classNames': 'nav-btn fwd-btn',
}

const NavigationButtons = ({ canGoBack=true }) => {
    return (
        <div className="nav-btn-wrapper">
            <span>
                {canGoBack && <Button icon={backBtn.icon} text={backBtn.text} onClick={backBtn.onClick} classNames={backBtn.classNames}></Button>}
            </span>
            <span className="fwd-btn-container">
                <Button icon={forwardBtn.icon} text={forwardBtn.text} onClick={forwardBtn.onClick} classNames={forwardBtn.classNames}></Button>
            </span>
        </div>
    )
}

export default NavigationButtons;