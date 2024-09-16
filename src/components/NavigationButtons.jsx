import Button from "./Button";
import "../styles/NavigationButtons.css";

const NavigationButtons = ({ backBtn, forwardBtn }) => {
    return (
        <div className="nav-btn-wrapper">
            <span>
                <Button {...backBtn} />
            </span>
            <span>
                <Button {...forwardBtn} />
            </span>
        </div>
    )
}

export default NavigationButtons;