import ProgressTracker from './components/ProgressTracker'
import ContactForm from './components/forms/ContactForm'
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

function App() {
  return (
    <>
    <div className='progress-tracker-wrapper'>
      <ProgressTracker steps={steps} />
    </div>
    <ContactForm />
    </>
  )
}

export default App