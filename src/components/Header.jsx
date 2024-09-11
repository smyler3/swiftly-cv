import "../styles/Header.css"
import LightModeIcon from "./LightModeIcon";
import DarkModeIcon from "./DarkModeIcon";
import Button from "./Button";

const onToggleTheme = () => {

};

const Header = ({ lightMode=true }) => {
    return (
        <header>
            <div className="header-content">
                <span className="logo-container">
                    <img src="" alt="" />
                </span>
                <h1 className="header-title">SWIFTLY CV</h1>
                <Button icon={lightMode ? <LightModeIcon /> : <DarkModeIcon />} onClick={null} classNames="theme-btn" />
            </div>
        </header>
    )
};

export default Header;