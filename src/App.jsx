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
  const [theme, setTheme] = useState("light");

  // Toggles between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  // Apply theme class when theme changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
    <Header lightMode={theme === "light"} />
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