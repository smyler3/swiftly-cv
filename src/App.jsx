import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { useEffect, useState } from 'react'
import FormContent from './components/FormRefactor'

function App() {
    const [isLightMode, setIsLightMode] = useState(true);
    const [showLandingPage, setShowLandingPage] = useState(true);

    const toggleTheme = () => setIsLightMode(prev => !prev);

    useEffect(() => {
        document.body.className = isLightMode ? "light" : "dark";
    }, [isLightMode]);

    const toggleShowLandingPage = () => {
        setShowLandingPage(prev => !prev);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
        <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
        <main>
            {showLandingPage ? (
                <LandingPage toggleShowLandingPage={toggleShowLandingPage} />
            ) : (
                <FormContent toggleShowForm={toggleShowLandingPage} />
            )
            }
        </main>
        <Footer />
        </>
    )
}

export default App