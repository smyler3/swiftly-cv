import Form from "./Form"
import AddFormButton from "./AddFormButton"
import NavigationButtons from "./NavigationButtons"
import "../styles/FormSection.css"

const FormSection = ({ title, fields, canAddDelForm=true, addFormText='', canGoBack=false}) => {
    return (
        <main>
            <div className='content-page'>
                <h2 className="form-title">{title}</h2>
                <Form fields={fields} canDelete={canAddDelForm} />
            </div>
            {canAddDelForm && <AddFormButton text={addFormText} />}
            <NavigationButtons canGoBack={canGoBack} />
        </main>
    )
}

export default FormSection;