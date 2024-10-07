import "../styles/Header.css"
import LightModeIcon from "./LightModeIcon";
import DarkModeIcon from "./DarkModeIcon";
import Button from "./Button";
import { memo } from "react";

const Header = memo(({ isLightMode=true, toggleTheme }) => {
    return (
        <header>
            <div className="header-content">
                <span className="logo-container">
                    <img src="" alt="" />
                </span>
                <h1 className="header-title">SWIFTLY CV</h1>
                <Button onClick={toggleTheme} classNames="theme-btn" title="Toggle light and dark mode" ariaLabel="Toggle light and dark mode">
                    <div className="icon-wrapper">
                        {isLightMode ?  <DarkModeIcon /> : <LightModeIcon />} 
                    </div>
                </Button>
            </div>
        </header>
    )
});

export default Header;