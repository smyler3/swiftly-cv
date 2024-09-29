import CloseIcon from "./CloseIcon";
import Button from "./Button";
import "../styles/DeleteButton.css";

// TODO: Add styling back and move btn icon styling to Button.css?
const DeleteButton = ({ onClick }) => {
    return (
        <div className="del-form-section-btn-wrapper">
            <Button onClick={onClick} classNames="del-form-section-btn">
                <div>
                    <CloseIcon />
                </div>
            </Button> 
        </div>
    )
};

export default DeleteButton;