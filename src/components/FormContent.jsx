import { useCallback, useEffect, useState } from "react";
import Form from "./Form";
import ProgressTracker from "./ProgressTracker";
import NavigationButtons from "./NavigationButtons";
import personIcon from "../assets/icons/personIcon.svg";
import schoolIcon from "../assets/icons/schoolIcon.svg";
import workIcon from "../assets/icons/workIcon.svg";
import previewIcon from "../assets/icons/previewIcon.svg";
import "../styles/FormContent.css";

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
    const [educationSectionCounter, setEducationSectionCounter] = useState(1);
    const [experienceSectionCounter, setExperienceSectionCounter] = useState(1);
    const [formData, setFormData] = useState(
        {
            'personal': [
                personalFields.reduce((section, field) => {
                    section[field.name] = '';
                    return section;
                }, { sectionID: 0 })
            ],
            'education': [
                educationFields.reduce((section, field) => {
                    section[field.name] = '';
                    return section;
                }, { sectionID: 0 })
            ],
            'experience': [
                experienceFields.reduce((section, field) => {
                    section[field.name] = '';
                    return section;
                }, { sectionID: 0 })
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
        <Form formData={localFormData} handleChange={handleChange} fields={personalFields} title={'PERSONAL DETAILS:'} formID={'personal'} isDynamic={false} />,
        <Form formData={localFormData} handleChange={handleChange} fields={educationFields} title={'EDUCATION DETAILS:'} formID={'education'} isDynamic={true} handleDeleteSection={handleDeleteSection} handleAddSection={handleAddEducationSection} />,
        <Form formData={localFormData} handleChange={handleChange} fields={experienceFields} title={'EXPERIENCE DETAILS:'} formID={'experience'} isDynamic={true} handleDeleteSection={handleDeleteSection} handleAddSection={handleAddExperienceSection} />,
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

export default FormContent;