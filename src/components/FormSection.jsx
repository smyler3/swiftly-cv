import Form from "./Form"
import AddFormButton from "./AddFormButton"
import NavigationButtons from "./NavigationButtons"
import "../styles/FormSection.css"

const FormSection = ({ onClickBack, onClickForward, title, fields, canAddDelForm=true, addFormText='', canGoBack=true}) => {
    return (
        <div className='content-page'>
            <h2 className="form-title">{title}</h2>
            <Form fields={fields} canDelete={canAddDelForm} />
            {canAddDelForm && <AddFormButton text={addFormText} />}
            <NavigationButtons onClickBack={onClickBack} onClickForward={onClickForward} canGoBack={canGoBack} />
        </div>
    )
}

export default FormSection;