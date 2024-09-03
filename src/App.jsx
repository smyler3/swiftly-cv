import ProgressTracker from './components/ProgressTracker'
import ContactForm from './components/forms/ContactForm'
import EducationForm from './components/forms/EducationForm'
import ExperienceForm from './components/forms/ExperienceForm'
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
  // const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
    <div className='progress-tracker-wrapper'>
      <ProgressTracker steps={steps} currentStep={0} />
    </div>
    <ContactForm />
    <div className='progress-tracker-wrapper'>
      <ProgressTracker steps={steps} currentStep={1}/>
    </div>
    <EducationForm />
    <div className='progress-tracker-wrapper'>
      <ProgressTracker steps={steps} currentStep={1}/>
    </div>
    <ExperienceForm />
    </>
  )
}

export default App