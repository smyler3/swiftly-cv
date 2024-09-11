import "../styles/Header.css"
import lightModeIcon from "../assets/icons/lightModeIcon.svg"

const onToggleTheme = () => {

};

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <span className="logo-container">
                    <img src="" alt="" />
                </span>
                <h1 className="header-title">SWIFTLY CV</h1>
                <button onClick={onToggleTheme} className="theme-btn">
                    <img src={lightModeIcon} alt="" />
                </button>
            </div>
        </header>
    )
};

export default Header;