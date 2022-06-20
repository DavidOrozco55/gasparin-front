

import "./topBar.css"

function TopBar() {
    return (
			<head className="Top-bar-container">
				<div>
                    <img src="../../../img/LaBCD_LOGO.png" alt="logo_BCD" className="BCD-icon"></img>
                </div>
				<div className="Right-content">
					<img src={"../../../assets/campana.png"} className="Bell-icon" alt='campanita'/>
					<span className="User-name">Alfredo's</span>
				</div>
			</head>
		);
}

export default TopBar;