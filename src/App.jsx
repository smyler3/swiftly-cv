import LandingPage from './components/LandingPage'
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
import { useEffect, useState } from 'react'

const steps = [
	{'label': 'Personal', 'icon': personIcon, 'altText': 'Personal icon'},
	{'label': 'Education', 'icon': schoolIcon, 'altText': 'Education icon'},
	{'label': 'Experience', 'icon': workIcon, 'altText': 'Experience icon'},
	{'label': 'Preview', 'icon': previewIcon, 'altText': 'Preview icon'},
]

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  }
  useEffect(() => {
    document.body.className = isLightMode ? "light" : "dark";
  }, [isLightMode]);

  return (
    <>
    <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
    <main>
      <LandingPage />
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