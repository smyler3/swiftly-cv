import Button from "./Button";
import BackIcon from "./BackIcon";
import "../styles/NavigationButtons.css";

// Default back button paramaters
const backBtn = {
    'icon': <BackIcon />,
    'text': 'BACK',
    'onClick': null,
    'classNames': 'back-btn',
}

// Default forward button parameters
const forwardBtn = {
    'icon': null,
    'text': 'SAVE & CONTINUE',
    'onClick': null,
    'classNames': 'btn-default',
}

const NavigationButtons = ({ canGoBack=true }) => {
    return (
        <div className="nav-btn-wrapper">
            <span>
                {canGoBack && <Button icon={backBtn.icon} text={backBtn.text} onClick={backBtn.onClick} classNames={backBtn.classNames} ></Button>}
            </span>
            <span>
                <Button icon={forwardBtn.icon} text={forwardBtn.text} onClick={forwardBtn.onClick} classNames={forwardBtn.classNames} ></Button>
            </span>
        </div>
    )
}

export default NavigationButtons;