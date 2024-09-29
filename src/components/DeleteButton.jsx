import CloseIcon from "./CloseIcon";
import Button from "./Button";
import "../styles/DeleteButton.css";

const DeleteButton = ({ onClick }) => {
    return (
        <div className="delete-form-section-btn-wrapper">
            <Button onClick={onClick} classNames="del-form-section-btn">
                <div className="icon-wrapper">
                    <CloseIcon />
                </div>
            </Button>
        </div> 
    )
};

export default DeleteButton;