import FormWrapper from '../FormWrapper';
import NavigationButtons from '../NavigationButtons';

const contactFormFields = [
    {'name': 'fullName', 'label': 'Full Name:', 'type': 'text', 'placeholder': 'Jane Smith'},
    {'name': 'email', 'label': 'Email:', 'type': 'email', 'placeholder': 'janesmith@example.com'},
    {'name': 'phoneNumber', 'label': 'Phone Number:', 'type': 'tel', 'placeholder': '0491570159'},
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