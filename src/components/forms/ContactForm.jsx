import FormWrapper from '../FormWrapper';
import NavigationButtons from '../NavigationButtons';

const contactFormFields = [
    {'name': 'fullName', 'label': 'Full Name:', 'type': 'text'},
    {'name': 'email', 'label': 'Email:', 'type': 'email'},
    {'name': 'phoneNumber', 'label': 'Phone Number:', 'type': 'tel'},
]

const ContactForm = () => {
    return (
        <main>
            <div className='content-page'>
                <h2 className="form-title">CONTACT DETAILS</h2>
                <FormWrapper fields={contactFormFields} canDelete={false} />
            </div>
            <NavigationButtons back={null}/>
        </main>
    )
}

export default ContactForm;