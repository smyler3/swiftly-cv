import ProgressTracker from './components/ProgressTracker'
import ContactForm from './components/ContactForm'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import PreviewPage from './components/PreviewPage'
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
    <ProgressTracker steps={steps} currentStep={0} />
    <ContactForm />
    <ProgressTracker steps={steps} currentStep={1}/>
    <EducationForm />
    <ProgressTracker steps={steps} currentStep={2}/>
    <ExperienceForm />
    <ProgressTracker steps={steps} currentStep={3}/>
    <PreviewPage />
    </>
  )
}

export default App