import FormSection from "./FormSection";

const experienceFormFields = [
    {'name': 'companyName', 'label': 'Company Name:', 'type': 'text'},
    {'name': 'positionTitle', 'label': 'Position Title:', 'type': 'text'},
    {'name': 'roleAchievements', 'label': 'Role Achievements:', 'type': 'textarea'},
    {'containerClassName': 'date-field-container', 'name': 'workStartDate', 'label': 'Start Date:', 'type': 'date'},
    {'containerClassName': 'date-field-container', 'name': 'workEndDate', 'label': 'End Date:', 'type': 'date'},
]

const ExperienceForm = () => {
    return (
        <FormSection 
            title='EXPERIENCE DETAILS'
            fields={experienceFormFields}
            addFormText='Experience'
        />
    )
}

export default ExperienceForm;