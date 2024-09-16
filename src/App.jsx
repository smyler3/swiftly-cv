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
import NavigationButtons from './components/NavigationButtons'
import BackIcon from './components/BackIcon'

const steps = [
	{'label': 'Personal', 'icon': personIcon, 'altText': 'Personal icon', 'component': <PersonalForm /> },
	{'label': 'Education', 'icon': schoolIcon, 'altText': 'Education icon', 'component': <EducationForm /> },
	{'label': 'Experience', 'icon': workIcon, 'altText': 'Experience icon', 'component': <ExperienceForm /> },
	{'label': 'Preview', 'icon': previewIcon, 'altText': 'Preview icon', 'component': <PreviewPage /> },
]

function App() {
    const [isLightMode, setIsLightMode] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);
    const [showLandingPage, setShowLandingPage] = useState(true);

    const toggleTheme = () => setIsLightMode(prev => !prev);

    useEffect(() => {
        document.body.className = isLightMode ? "light" : "dark";
    }, [isLightMode]);

    const toggleShowLandingPage = () => {
        setShowLandingPage(prev => !prev);
        setCurrentStep(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const increaseCurrentStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
        else {
            toggleShowLandingPage();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const decreaseCurrentStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
        else {
            toggleShowLandingPage();
        }
        window.scrollTo({ top: 0 });
    };

    return (
        <>
        <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
        <main>
            {showLandingPage ? (
                <LandingPage toggleShowLandingPage={toggleShowLandingPage} />
            ) : (
                <>
                <ProgressTracker steps={steps} currentStep={currentStep} />
                <div className="content-page">
                    {steps[currentStep].component}
                    <NavigationButtons
                        backBtn={{ 'icon': <BackIcon />, 'text': currentStep === 0 ? 'EXIT' : 'BACK', 'onClick': decreaseCurrentStep, 'classNames': 'back-btn' }}
                        forwardBtn={{ 'text': currentStep === steps.length - 1 ? 'DONE' : 'SAVE & CONTINUE', 'onClick': increaseCurrentStep, 'classNames': 'btn-default' }}
                    />
                </div>
                </>
            )
            }
        </main>
        <Footer />
        </>
    )
}

export default App