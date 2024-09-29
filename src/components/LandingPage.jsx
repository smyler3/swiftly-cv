import Button from "./Button";
import checkMarkIcon from "../assets/icons/checkMarkIcon.svg"
import "../styles/LandingPage.css"

const features = [
    {'title': 'INFORMATION SENSITIVE', 'description': 'Fill in as many or as few fields as you like and see the results change each time'},
    {'title': 'SEAMLESS INFO EDITING', 'description': 'Add or remove education and experience with a single click of a button'},
    {'title': 'EXTRA CUSTOMIZATION', 'description': 'Experiment with form field inputs to add extra customization'},
    {'title': 'INSTANT PREVIEW', 'description': 'Preview your resume to allow quick and easy editing to suit your desires'},
]

const FeatureCard = ({ title, description }) => {
    return (
        <div className="feature-card">
            <span className="feature-card-icon-container">
                <img src={checkMarkIcon} alt="" />
            </span>
            <span className="feature-card-text">
                <h4 className="feature-title">{title}</h4>
                <p className="feature-description">{description}</p>
            </span>
        </div>
    )
}

const LandingPage = ({ toggleShowLandingPage }) => {
    return (
        <div className="content-page landing-page">
            <h2 className="page-title">Create your own custom resume in seconds</h2>
            <Button onClick={toggleShowLandingPage} classNames={"btn-default"} >
                <p>
                    GET STARTED
                </p>
            </Button>
            <div className="feature-cards-container">
                {features.map((info, index) => {
                    return <FeatureCard key={index} title={info.title} description={info.description} />
                })}
            </div>
            <div className="btn-wrapper">
                <Button onClick={toggleShowLandingPage} classNames={"btn-default"} >
                    <p>
                        CREATE NOW
                    </p>
                </Button>
            </div>
        </div>
    );
};

export default LandingPage;