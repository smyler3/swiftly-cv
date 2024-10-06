import "../styles/PreviewPage.css";

const ExperienceItem = (data) => {
    return (
        <div className="experience-item">
            <p className="experience-company">{data.companyName}, {data.workStartDate} - {data.workEndDate}</p>
            <p className="experience-position">{data.positionTitle}</p>
            <p className="experience-description">{data.roleAchievements}</p>
        </div>
    )
};

const EducationItem = (data) => {
    return (
        <div className="education-item">
            <p className="education-school">{data.schoolName}, {data.studyStartDate} - {data.workStartDate}</p>
            <p className="education-degree">{data.studyTitle}: {data.studyScore}</p>
        </div>
    )
};

const PreviewPage = (formData) => {
    const data = formData.formData;
    console.log(data);

    return (
        <>
            <h2 className="form-title">PREVIEW:</h2>
            <div className="preview-page-container">
                <div className="header-section">
                    <h2 className="name">{data.personal[0].fullName.toUpperCase()}</h2>
                    <h5 className="profession">{data.personal[0].profession.toUpperCase()}</h5>
                </div>

                <div className="contact-about-section">
                    <span className="page-subsection">
                        <h4 className="subsection-title">CONTACT ME</h4>
                        <div className="contact-details-list">
                            <div className="contact-detail-item">
                                <span className="contact-icon"></span>
                                <p>{data.personal[0].phoneNumber}</p>
                            </div>
                            <div className="contact-detail-item">
                                <span className="contact-icon"></span>
                                <p className="contact-text">{data.personal[0].email}</p>
                            </div>
                            <div className="contact-detail-item">
                                <span className="contact-icon"></span>
                                <p className="contact-text">{data.personal[0].location}</p>
                            </div>
                            <div className="contact-detail-item">
                                <span className="contact-icon"></span>
                                <p className="contact-text">{data.personal[0].websiteLink}</p>
                            </div>
                        </div>
                    </span>
                    <span className="page-subsection">
                        <h4 className="subsection-title">ABOUT ME</h4>
                        <p className="contact-text">{data.personal[0].professionalSummary}</p>
                    </span>
                </div>

                <div className="page-subsection">
                    <h4 className="subsection-title">EXPERIENCE</h4>
                    <div className="experience-list">
                        {data.experience.map(experienceData => <ExperienceItem key={experienceData.sectionID} data={experienceData} />)}
                    </div>
                </div>

                <div className="page-subsection">
                    <h4 className="subsection-title">EDUCATION</h4>
                    <div className="education-list">
                        {data.education.map(educationData => <EducationItem key={educationData.sectionID} data={educationData} />)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default PreviewPage;