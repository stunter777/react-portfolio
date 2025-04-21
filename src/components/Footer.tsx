import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  return (
    <footer>
        <div>
            <a href="https://github.com/stunter777" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nikolai-kras" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://t.me/stunter777" target="_blank" rel="noreferrer"><TelegramIcon/></a>
        </div>
        <div style={{color:'white'}}>Contact number: +1 929 342 46 62</div>
    </footer>
  );
}

export default Footer;