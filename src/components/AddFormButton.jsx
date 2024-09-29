import AddCircleIcon from "./AddCircleIcon";
import Button from "./Button";
import "../styles/AddFormButton.css";

// TODO: Add styling back and rename btn-default and move btn icon styling to Button.css?
const AddFormButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} classNames="add-form-section-btn" >
            <div>
                <span>
                    <AddCircleIcon />
                </span>
                <span>
                    Create New Section
                </span>
            </div>
        </Button>
    )
};

export default AddFormButton;