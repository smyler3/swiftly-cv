import AddCircleIcon from "./AddCircleIcon";
import Button from "./Button";
import "../styles/AddFormButton.css";

const AddFormButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} classNames="add-form-section-btn icon-and-text-btn" >
            <span className="icon-wrapper">
                <AddCircleIcon />
            </span>
            <span>
                Create New Section
            </span>
        </Button>
    )
};

export default AddFormButton;