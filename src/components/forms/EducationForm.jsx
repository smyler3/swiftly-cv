import AddFormButton from '../AddFormButton';
import FormWrapper from '../FormWrapper';
import NavigationButtons from '../NavigationButtons';

const educationFormFields = [
    {'name': 'schoolName', 'label': 'School Name:', 'type': 'text', 'placeholder': 'Harvard University'},
    {'name': 'studyTitle', 'label': 'Name of Course/Certificate:', 'type': 'text', 'placeholder': 'Bachelor of Science'},
    {'name': 'studyScore', 'label': 'Score Recieved:', 'type': 'text', 'placeholder': '3.72'},
    {'containerClassName': 'date-field-container', 'name': 'studyStartDate', 'label': 'Start Date:', 'type': 'date', 'placeholder': 'dd/mm/yyyy'},
    {'containerClassName': 'date-field-container', 'name': 'studyEndDate', 'label': 'End Date:', 'type': 'date', 'placeholder': 'dd/mm/yyyy'},
]

const EducationForm = () => {
    return (
        <>
        <div className='form-page'>
        <h2 className="form-title">EDUCATION DETAILS</h2>
            <FormWrapper fields={educationFormFields} />
        </div>
        <AddFormButton text="Education" />
        <NavigationButtons />
        </>
    )
}

export default EducationForm;