import FormWrapper from '../FormWrapper';
import NavigationButtons from '../NavigationButtons';

const contactFormFields = [
    {'name': 'fullName', 'label': 'Full Name:', 'type': 'text'},
    {'name': 'email', 'label': 'Email:', 'type': 'email'},
    {'name': 'phoneNumber', 'label': 'Phone Number:', 'type': 'tel'},
]

const ContactForm = () => {
    return (
        <>
        <div className='form-page'>
            <h2 className="form-title">CONTACT DETAILS</h2>
            <FormWrapper fields={contactFormFields} canDelete={false} />
        </div>
        <NavigationButtons back={null}/>
        </>
    )
}

export default ContactForm;