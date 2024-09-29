import AddFormButton from "./AddFormButton";
import FormSection from "./FormSection";
import '../styles/Form.css';

const Form = ({ formData, handleChange, fields, title, formID, isDynamic, handleDeleteSection=null, handleAddSection=null }) => {
    return (
        <>
            <h2 className="form-title">{title}</h2>
            <form action="">
                {formData.map((section) => (
                    <FormSection 
                        key={section.sectionID}
                        sectionData={section} 
                        fields={fields} 
                        handleChange={handleChange} 
                        isDeleteable={isDynamic} 
                        handleDeleteSection={handleDeleteSection}
                    />
                ))}
            </form>
            {isDynamic && <AddFormButton onClick={() => handleAddSection(formID)} />}
        </>
    )
};

export default Form;