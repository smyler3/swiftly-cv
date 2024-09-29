import CloseIcon from "./CloseIcon";
import Button from "./Button";
import "../styles/DeleteButton.css";

const DeleteButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} classNames="del-form-section-btn">
            <div className="icon-wrapper">
                <CloseIcon />
            </div>
        </Button> 
    )
};

export default DeleteButton;