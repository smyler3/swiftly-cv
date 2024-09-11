import ProgressTracker from './components/ProgressTracker'
import PersonalForm from './components/PersonalForm'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import PreviewPage from './components/PreviewPage'
import Header from './components/Header'
import Footer from './components/Footer'
import personIcon from './assets/icons/personIcon.svg'
import schoolIcon from './assets/icons/schoolIcon.svg'
import workIcon from './assets/icons/workIcon.svg'
import previewIcon from './assets/icons/previewIcon.svg'
import './App.css'

const steps = [
	{'label': 'Personal', 'icon': personIcon},
	{'label': 'Education', 'icon': schoolIcon},
	{'label': 'Experience', 'icon': workIcon},
	{'label': 'Preview', 'icon': previewIcon},
]

function App() {
  return (
    <>
    <Header />
    <main>
      <ProgressTracker steps={steps} currentStep={0} />
      <PersonalForm />
      <ProgressTracker steps={steps} currentStep={1}/>
      <EducationForm />
      <ProgressTracker steps={steps} currentStep={2}/>
      <ExperienceForm />
      <ProgressTracker steps={steps} currentStep={3}/>
      <PreviewPage />
    </main>
    <Footer />
    </>
  )
}

export default App