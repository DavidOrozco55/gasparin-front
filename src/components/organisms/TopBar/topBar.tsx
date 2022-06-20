import "./topBar.css"

const BcdLogo = require("../../../img/LaBCD_LOGO.png");
const Bell = require("../../../assets/campana.png")
function TopBar() {
    return (
			<head className="Top-bar-container">
				<div>
                    <img src={BcdLogo} alt="logo_BCD" className="BCD-icon"></img>
                </div>
				<div className="Right-content">
					<img src={Bell} className="Bell-icon" alt='campanita'/>
					<span className="User-name">Alfredo's</span>
				</div>
			</head>
		);
}

export default TopBar;