import addCircleIcon from "../assets/icons/AddCircleIcon.svg"
import Button from "./Button";
import "../styles/AddFormButton.css"

const AddFormButton = ({ text='' }) => {
    return <Button icon={addCircleIcon} text={text} onClick={null} classNames='add-form-btn' />;
}

export default AddFormButton;