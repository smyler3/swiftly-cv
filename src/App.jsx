import ProgressTracker from './components/ProgressTracker'
import FormWrapper from './components/FormWrapper'
import personIcon from './assets/icons/personIcon.svg'
import schoolIcon from './assets/icons/schoolIcon.svg'
import workIcon from './assets/icons/workIcon.svg'
import previewIcon from './assets/icons/previewIcon.svg'
import './App.css'

const steps = [
	{'label': 'Contact', 'icon': personIcon},
	{'label': 'Education', 'icon': schoolIcon},
	{'label': 'Experience', 'icon': workIcon},
	{'label': 'Preview', 'icon': previewIcon},
]

const contactFormFields = [
  {'name': 'fullName', 'label': 'Full Name:', 'type': 'text', 'placeholder': 'Jane Smith'},
  {'name': 'email', 'label': 'Email:', 'type': 'email', 'placeholder': 'janesmith@example.com'},
  {'name': 'phoneNumber', 'label': 'Phone Number:', 'type': 'tel', 'placeholder': '0491570159'},
]

function App() {
  return (
    <>
    <div className='progress-tracker-wrapper'>
      <ProgressTracker steps={steps} />
    </div>
    <div className='contact-form-wrapper'>
      <FormWrapper title='CONTACT DETAILS' fields={contactFormFields} />
    </div>
    </>
  )
}

export default App