import FormSection from "./FormSection";

const personalFormFields = [
    {'name': 'fullName', 'label': 'Full Name:', 'type': 'text'},
    {'name': 'profession', 'label': 'Profession:', 'type': 'text'},
    {'name': 'email', 'label': 'Email:', 'type': 'email'},
    {'name': 'phoneNumber', 'label': 'Phone Number:', 'type': 'tel'},
    {'name': 'location', 'label': 'Location:', 'type': 'text'},
    {'name': 'websiteLink', 'label': 'Website:', 'type': 'text'},
    {'name': 'professionalSummary', 'label': 'Professional Summary:', 'type': 'textarea'},
]

const PersonalForm = () => {
    return (
        <FormSection 
            title='PERSONAL DETAILS'
            fields={personalFormFields}
            canAddDelForm={false}
            canGoBack={false}
        />
    )
}

export default PersonalForm;