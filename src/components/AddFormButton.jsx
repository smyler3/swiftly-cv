import AddCircleIcon from "./AddCircleIcon";
import Button from "./Button";
import "../styles/AddFormButton.css"

const AddFormButton = ({ text='' }) => {
    return <Button icon={<AddCircleIcon />} text={text} onClick={null} classNames='add-form-btn' />;
}

export default AddFormButton;