import phoneIcon from "../assets/icons/phoneIcon.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import locationIcon from "../assets/icons/locationIcon.svg";
import websiteIcon from "../assets/icons/websiteIcon.svg";
import "../styles/PreviewPage.css";

// Returns a date picker input date in mm/yyyy format
function convertDate(date) {
    const nums = date.split('-');
    return (nums[1] + '/' + nums[0]);
};

// Checks if a data object has any properties which aren't an empty string
function dataIsEmpty(data) {
    return (
        Object.keys(data)
            .filter(key => key !== 'sectionID') // Ignore sectionID as it will always have a value
            .every(key => data[key] === '')
    );
}

const ExperienceItem = ({ data }) => {
    return !dataIsEmpty(data) ? (
        <div className="experience-item">
            <p className="experience-company">
                {data.companyName && <span className="company-name">{data.companyName.toUpperCase()}</span>}
                {data.companyName && data.workStartDate && <span>, </span>}
                {data.workStartDate && <span className="work-start-date">{convertDate(data.workStartDate)} - </span>}
                {data.workStartDate && <span className="work-end-date">{data.workEndDate ? convertDate(data.workEndDate) : 'PRESENT'}</span>}
            </p>
            {data.positionTitle && <p className="experience-position">{data.positionTitle}</p>}
            {data.roleAchievements && <p className="experience-achievements">{data.roleAchievements}</p>}
        </div>
    ) : null;
};

const EducationItem = ({ data }) => {
    return !dataIsEmpty(data) ? (
        <div className="education-item">
            <p className="education-school">
                {data.schoolName && <span className="school-name">{data.schoolName.toUpperCase()}</span>}
                {data.schoolName && data.studyStartDate && <span>, </span>}
                {data.studyStartDate &&<span className="study-start-date">{convertDate(data.studyStartDate)} - </span>}
                {data.studyStartDate && <span className="study-end-date">{data.studyEndDate ? convertDate(data.studyEndDate) : 'PRESENT'}</span>}
            </p>
            <p className="education-degree">
                {data.studyTitle && <span className="study-title">{data.studyTitle}</span>}
                {data.studyTitle && data.studyScore && <span>: </span>}
                {data.studyScore && <span className="study-score">{data.studyScore}</span>}
            </p>
        </div>
    ) : null;
};

const PreviewPage = ({ data }) => {
    return (
        <>
            <h2 className="form-title">PREVIEW:</h2>
            <div className="preview-page-container">
                <div className="header-section">
                    <h2 className="name">{data.personal[0].fullName.toUpperCase()}</h2>
                    <h5 className="profession">{data.personal[0].profession.toUpperCase()}</h5>
                </div>

                <div className="page-subsection contact-info">
                    <div className="contact-details-list">
                        {data.personal[0].phoneNumber && 
                            <div className="contact-detail-item">
                                <span className="contact-icon"><img src={`${phoneIcon}`} /></span>
                                <p>{data.personal[0].phoneNumber}</p>
                            </div>
                        }
                        {data.personal[0].email && 
                            <div className="contact-detail-item">
                                <span className="contact-icon"><img src={`${emailIcon}`} /></span>
                                <p className="contact-text">{data.personal[0].email}</p>
                            </div>
                        }
                        {data.personal[0].location && 
                            <div className="contact-detail-item">
                                <span className="contact-icon"><img src={`${locationIcon}`} /></span>
                                <p className="contact-text">{data.personal[0].location}</p>
                            </div>
                        }
                        {data.personal[0].websiteLink && 
                            <div className="contact-detail-item">
                                <span className="contact-icon"><img src={`${websiteIcon}`} /></span>
                                <p className="contact-text">{data.personal[0].websiteLink}</p>
                            </div>
                        }
                    </div>
                </div>

                <div className="page-subsection">
                    <h4 className="subsection-title">ABOUT ME</h4>
                    <p className="about-me-text">{data.personal[0].professionalSummary}</p>
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