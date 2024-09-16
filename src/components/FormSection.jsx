import Form from "./Form"
import AddFormButton from "./AddFormButton"
import NavigationButtons from "./NavigationButtons"
import "../styles/FormSection.css"

const FormSection = ({ title, fields, canAddDelForm=true, addFormText}) => {
    return (
        <>
            <h2 className="form-title">{title}</h2>
            <Form fields={fields} canDelete={canAddDelForm} />
            {canAddDelForm && <AddFormButton text={addFormText} />}
        </>
    )
}

export default FormSection;