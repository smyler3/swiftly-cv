import AddFormButton from '../AddFormButton';
import FormWrapper from '../FormWrapper';
import NavigationButtons from '../NavigationButtons';

const experienceFormFields = [
    {'name': 'companyName', 'label': 'Company Name:', 'type': 'text'},
    {'name': 'positionTitle', 'label': 'Position Title:', 'type': 'text'},
    {'name': 'roleAchievements', 'label': 'Role Achievements:', 'type': 'textarea'},
    {'containerClassName': 'date-field-container', 'name': 'workStartDate', 'label': 'Start Date:', 'type': 'date'},
    {'containerClassName': 'date-field-container', 'name': 'workEndDate', 'label': 'End Date:', 'type': 'date'},
]

const ExperienceForm = () => {
    return (
        <>
        <div className='form-page'>
        <h2 className="form-title">EXPERIENCE DETAILS</h2>
            <FormWrapper fields={experienceFormFields} />
        </div>
        <AddFormButton text="Experience" />
        <NavigationButtons />
        </>
    )
}

export default ExperienceForm;