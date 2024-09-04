import FormSection from "./FormSection";

const educationFormFields = [
    {'name': 'schoolName', 'label': 'School Name:', 'type': 'text'},
    {'name': 'studyTitle', 'label': 'Name of Course/Certificate:', 'type': 'text'},
    {'name': 'studyScore', 'label': 'Score Recieved:', 'type': 'text', 'placeholder': '3.72'},
    {'containerClassName': 'date-field-container', 'name': 'studyStartDate', 'label': 'Start Date:', 'type': 'date'},
    {'containerClassName': 'date-field-container', 'name': 'studyEndDate', 'label': 'End Date:', 'type': 'date'},
]

const EducationForm = () => {
    return (
        <FormSection 
            title='EDUCATION DETAILS'
            fields={educationFormFields}
            addFormText='Education'
        />
    )
}

export default EducationForm;