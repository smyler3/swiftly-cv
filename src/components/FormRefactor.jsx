import { useCallback, useState, useEffect } from "react";
import AddCircleIcon from "./AddCircleIcon";
import Button from "./Button";
import ProgressTracker from "./ProgressTracker";
import personIcon from '../assets/icons/personIcon.svg'
import schoolIcon from '../assets/icons/schoolIcon.svg'
import workIcon from '../assets/icons/workIcon.svg'
import previewIcon from '../assets/icons/previewIcon.svg'

const FormField = ({ label, id, name, type, value, onChange }) => (
    <div className={`form-field-container ${type === 'date' ? date-field-container : ''}`} >
        <label htmlFor={id}>{label}</label>
        {type === 'textarea' ? (
            <textarea 
                id={id} 
                name={name} 
                value={value} 
                onChange={onChange}
            />
        ) : (
            <input 
                type={type} 
                id={id} 
                name={name} 
                value={value} 
                onChange={onChange}
            />
        )}
    </div>
);

const FormSection = ({ sectionData, fields, handleChange, isDeleteable, handleDeleteSection }) => (
    <div className={`form-section ${isDeleteable ? 'deleteable-form-section' : ''}`}>
        {isDeleteable && <DeleteButton onClick={() => handleDeleteSection(sectionData.sectionID)} />}
        {fields.map(field => (
            <FormField
                key={field.name + sectionData.sectionID}
                label={field.label}
                id={field.name + sectionData.sectionID}
                name={field.name}
                type={field.type}
                value={sectionData[field.name]}
                onChange={(e) => handleChange(e, sectionData.sectionID)}
            />
        ))}
    </div>
);

const PersonalForm = ({ formData, handleChange, fields }) => {
    console.log('formData:', formData);
    return (
        <>
            <h2 className="form-title">PERSONAL DETAILS:</h2>
            {/* TODO: formID needed here? */}
            <form id="personal" action="">
                {formData.map((section) => (
                    <FormSection 
                        key={section.sectionID}
                        sectionData={section} 
                        fields={fields} 
                        handleChange={handleChange} 
                        isDeleteable={false} 
                    />
                ))}
            </form>
        </>
    )
};

const EducationForm = ({ formData, handleChange, fields, handleDeleteSection, handleAddSection }) => {
    return (
        <>
            <h2 className="form-title">EDUCATION DETAILS:</h2>
            <form id="education" action="">
                {formData.map((section) => {
                    <FormSection 
                        key={section.sectionID}
                        sectionData={section} 
                        fields={fields} 
                        handleChange={handleChange} 
                        isDeleteable={true} 
                        handleDeleteSection={handleDeleteSection}
                    />
                })}
            </form>
            <AddFormButton onClick={() => handleAddSection("education")} />
        </>
    )
}

const ExperienceForm = ({ formData, handleChange, fields, handleDeleteSection, handleAddSection }) => {
    return (
        <>
            <h2 className="form-title">EXPERIENCE DETAILS:</h2>
            <form id="experience" action="">
                {formData.map((section) => {
                    <FormSection 
                        sectionData={section} 
                        fields={fields} 
                        handleChange={handleChange} 
                        isDeleteable={true} 
                        handleDeleteSection={handleDeleteSection}
                    />
                })}
            </form>
            <AddFormButton onClick={() => handleAddSection("experience")} />
        </>
    )
}

const DeleteButton = ({ onClick }) => {
    return (
        <div className="del-form-section-btn-wrapper">
            <Button onClick={onClick} classNames="delete-form-section-btn">
                <div>
                    <span>
                        <CloseIcon />
                    </span>
                </div>
            </Button> 
        </div>
    )
};

const AddFormButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} classNames="add-form-section-btn" >
            <div>
                <span>
                    <AddCircleIcon />
                </span>
                <span>
                    Create New Section
                </span>
            </div>
        </Button>
    )
};

const NavigationButtons = ({ currentStep, steps, handleBackClick, handleContinueClick }) => {
    return (
        <div>
            <span>
                <Button onClick={handleBackClick}>
                    <span>
                        {currentStep === 0 ? 'EXIT' : 'BACK'}
                    </span>
                </Button>
            </span>
            <span>
                <Button onClick={handleContinueClick}>
                    <span>
                        {currentStep === steps.length - 1 ? 'DONE' : 'SAVE & CONTINUE'}
                    </span>
                </Button>
            </span>
        </div>
    )
};

const personalFields = [
    {name: 'fullName', label: 'Full Name:', type: 'text'},
    {name: 'profession', label: 'Profession:', type: 'text'},
    {name: 'email', label: 'Email:', type: 'email'},
    {name: 'phoneNumber', label: 'Phone Number:', type: 'tel'},
    {name: 'location', label: 'Location:', type: 'text'},
    {name: 'websiteLink', label: 'Website:', type: 'text'},
    {name: 'professionalSummary', label: 'Professional Summary:', type: 'textarea'},
];

const educationFields = [
    {name: 'schoolName', label: 'School Name:', type: 'text'},
    {name: 'studyTitle', label: 'Name of Course/Certificate:', type: 'text'},
    {name: 'studyScore', label: 'Score Recieved:', type: 'text'},
    {name: 'studyStartDate', label: 'Start Date:', type: 'date'},
    {name: 'studyEndDate', label: 'End Date:', type: 'date'},
];

const experienceFields = [
    {name: 'companyName', label: 'Company Name:', type: 'text'},
    {name: 'positionTitle', label: 'Position Title:', type: 'text'},
    {name: 'roleAchievements', label: 'Role Achievements:', type: 'textarea'},
    {name: 'workStartDate', label: 'Start Date:', type: 'date'},
    {name: 'workEndDate', label: 'End Date:', type: 'date'},
];

const steps = [
    {label: 'Personal', icon: personIcon, altText: 'Personal icon', formID: 'personal' },
    {label: 'Education', icon: schoolIcon, altText: 'Education icon', formID: 'education' },
    {label: 'Experience', icon: workIcon, altText: 'Experience icon', formID: 'experience' },
    {label: 'Preview', icon: previewIcon, altText: 'Preview icon' },
];

const FormContent = ({ toggleShowForm }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [educationSectionCounter, setEducationSectionCounter] = useState(0);
    const [experienceSectionCounter, setExperienceSectionCounter] = useState(0);
    const [formData, setFormData] = useState(
        {
            'personal': [
                personalFields.reduce((section, field) => {
                    section[field.name] = '';
                    return section;
                }, { sectionID: 0 })
            ],
            'education': [
                // Sections will be added dynamically
            ],
            'experience': [
                // Sections will be added dynamically
            ]
        }
    );
    const [localFormData, setLocalFormData] = useState(formData[steps[currentStep].formID]);

    useEffect(() => {
        setLocalFormData(formData[steps[currentStep].formID]);
    }, [currentStep, formData]);

    const addFormSection = (setCounter, counter, fields) => {
        const newSection = fields.reduce((newSection, field) => {
            newSection[field.name] = '';
            return newSection;
        }, { sectionID: counter });
    
        setLocalFormData(prev => ([
            ...prev,
            newSection
        ]));
        setCounter(prev => prev + 1);
    };

    const handleChange = useCallback((e, sectionID) => {
        const {name, value} = e.target;

        setLocalFormData((prev) => 
            prev.map((section) => 
                section.sectionID === sectionID 
                    ? {...section, [name]: value} 
                    : section
            )
        );
    }, [setLocalFormData]);

    const handleSubmit = () => {
        const formKey = steps[currentStep];
        setFormData((prev) => ({
            ...prev,
            [formKey]: localFormData
        }))
    };

    const handleBackClick = useCallback(() => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
        else {
            setCurrentStep(0);
            toggleShowForm();
        }
        window.scrollTo({ top: 0 });
    }, [setCurrentStep, currentStep, toggleShowForm]);

    const handleAddEducationSection = useCallback(() => {
        addFormSection(
            setEducationSectionCounter, 
            educationSectionCounter, 
            educationFields
        )
    }, [educationSectionCounter]);

    const handleAddExperienceSection = useCallback(() => {
        addFormSection(
            setExperienceSectionCounter, 
            experienceSectionCounter, 
            experienceFields
        )
    }, [experienceSectionCounter]);

    const handleDeleteSection = useCallback((id) => {
        setLocalFormData(prev => prev.filter(section => section.sectionID !== id));
    }, [setLocalFormData]);

    const handleContinueClick = useCallback(() => {
        handleSubmit(); 
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
        else {
            setCurrentStep(0);
            toggleShowForm();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [handleSubmit, setCurrentStep, currentStep, toggleShowForm]);

    const formPages = [
        <PersonalForm formData={localFormData} handleChange={handleChange} fields={personalFields} />,
        <EducationForm formData={localFormData} handleChange={handleChange} fields={educationFields} handleDeleteSection={handleDeleteSection} handleAddSection={handleAddEducationSection} />,
        <ExperienceForm formData={localFormData} handleChange={handleChange} fields={experienceFields} handleDeleteSection={handleDeleteSection} handleAddSection={handleAddExperienceSection} />,
        // <PreviewPage formData={formData} />,
    ];

    return (
        <>
            <ProgressTracker currentStep={currentStep} steps={steps} />
            <div className="content-page">
                {formPages[currentStep]}
            </div>
            <NavigationButtons
                currentStep={currentStep}
                steps={steps}
                handleBackClick={handleBackClick}
                handleContinueClick={handleContinueClick}
            />
        </>
    )
};

export default FormContent