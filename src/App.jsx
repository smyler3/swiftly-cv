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

const stepComponents = [
  <PersonalForm onClickBack={toggleShowLandingPage} onClickForward={increaseCurrentStep} />,
  <EducationForm onClickBack={decreaseCurrentStep} onClickForward={increaseCurrentStep} />,
  <ExperienceForm onClickBack={decreaseCurrentStep} onClickForward={increaseCurrentStep} />,
  <PreviewPage onClickBack={decreaseCurrentStep} onClickForward={toggleShowLandingPage} />,
]

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  }
  useEffect(() => {
    document.body.className = isLightMode ? "light" : "dark";
  }, [isLightMode]);

  const [currentStep, setCurrentStep] = useState(0);
  const increaseCurrentStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  }
  const decreaseCurrentStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  }

  const [showLandingPage, setShowLandingPage] = useState(true);
  const toggleShowLandingPage = () => {
    setShowLandingPage(prev => !prev);
  }

  return (
    <>
    <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
    <main>
      {showLandingPage ?
        <LandingPage toggleShowLandingPage={toggleShowLandingPage} /> :
        <>
          <ProgressTracker steps={steps} currentStep={currentStep} />
          {stepComponents[currentStep]}
        </>
      }
    </main>
    <Footer />
    </>
  )
}

export default App