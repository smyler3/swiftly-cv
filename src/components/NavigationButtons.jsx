import Button from "./Button";
import BackIcon from "./BackIcon";
import "../styles/NavigationButtons.css";

// TODO: Add styling back and rename btn-default and move btn icon styling to Button.css?
const NavigationButtons = ({ currentStep, steps, handleBackClick, handleContinueClick }) => {
    return (
        <div className="nav-button-wrapper">
            <span>
                <Button onClick={handleBackClick} classNames='back-btn'>
                    <span>
                        <BackIcon />
                    </span>
                    <span>
                        {currentStep === 0 ? 'EXIT' : 'BACK'}
                    </span>
                </Button>
            </span>
            <span>
                <Button onClick={handleContinueClick} classNames='btn-default'>
                    <div>
                        {currentStep === steps.length - 1 ? 'DONE' : 'SAVE & CONTINUE'}
                    </div>
                </Button>
            </span>
        </div>
    )
};

export default NavigationButtons;