import { Button, IconButton } from "@mui/material";
import "./topBar.css"
import LogOutButton from '@mui/icons-material/Logout'
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
					<IconButton aria-label="LogOut" size="large">
						<LogOutButton></LogOutButton>
					</IconButton>
				</div>
			</head>
		);
}

export default TopBar;