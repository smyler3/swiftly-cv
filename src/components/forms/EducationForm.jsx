import AddFormButton from '../AddFormButton';
import FormWrapper from '../FormWrapper';
import NavigationButtons from '../NavigationButtons';

const educationFormFields = [
    {'name': 'schoolName', 'label': 'School Name:', 'type': 'text'},
    {'name': 'studyTitle', 'label': 'Name of Course/Certificate:', 'type': 'text'},
    {'name': 'studyScore', 'label': 'Score Recieved:', 'type': 'text', 'placeholder': '3.72'},
    {'containerClassName': 'date-field-container', 'name': 'studyStartDate', 'label': 'Start Date:', 'type': 'date'},
    {'containerClassName': 'date-field-container', 'name': 'studyEndDate', 'label': 'End Date:', 'type': 'date'},
]

const EducationForm = () => {
    return (
        <main>
            <div className='content-page'>
                <h2 className="form-title">EDUCATION DETAILS</h2>
                <FormWrapper fields={educationFormFields} />
            </div>
            <AddFormButton text="Education" />
            <NavigationButtons />
        </main>
    )
}

export default EducationForm;