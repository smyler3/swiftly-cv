import { memo } from 'react';
import '../styles/ProgressTracker.css';

const StepMarker = ({ label, icon, altText, isActive, isComplete }) => {
    return (
        <div className={`step-marker ${isActive ? 'step-active' : ''} ${isComplete ? 'step-complete' : ''}`}>
            <div className="step-icon">
                {icon && <img src={`${icon}`} alt={altText} />}
            </div>
            <div className="step-label">{label}</div>
        </div>
    );
};

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }} />
        </div>
    );
};

const ProgressTracker = memo(({ steps, currentStep=0 }) => {
    // Render nothing if steps is empty
    if (steps.length === 0) {
        return null;
    };

    return (
        <section className="progress-tracker">
            <div className="step-indicators">
                {steps.map((step, index) => (
                    <StepMarker
                        key={index}
                        label={step.label}
                        icon={step.icon}
                        altText={step.altText}
                        isActive={index === currentStep}
                        isComplete={index < currentStep}
                    />
                ))}
            </div>
            <ProgressBar currentStep={currentStep} totalSteps={steps.length}/>
        </section>
    )
});

export default ProgressTracker;