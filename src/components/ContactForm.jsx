import FormSection from "./FormSection";

const contactFormFields = [
    {'name': 'fullName', 'label': 'Full Name:', 'type': 'text'},
    {'name': 'email', 'label': 'Email:', 'type': 'email'},
    {'name': 'phoneNumber', 'label': 'Phone Number:', 'type': 'tel'},
]

const ContactForm = () => {
    return (
        <FormSection 
            title='CONTACT DETAILS'
            fields={contactFormFields}
            canAddDelForm={false}
            canGoBack={false}
        />
    )
}

export default ContactForm;