import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        
        
      <a href="https://www.instagram.com/ali_mhanna.10?xtok=MWtnNmE3YzR0NjVwdg==" target="_blank" rel="noreferrer">
        <InstagramIcon />
      </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
    <FacebookIcon />
      </a>

  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
    <TwitterIcon />
  </a>
        
      </div>
      <div className="footer-info">
        <span><EmailIcon fontSize="small" /> info@healthtrack.com</span>
        <span><PhoneIcon fontSize="small" /> +961 81 894 098</span>
        <span><LocationOnIcon fontSize="small" /> Lebanon</span>
      </div>
      <p>FitZone © 2026 - CSCI426 Project</p>
    </footer>
  );
};

export default Footer;