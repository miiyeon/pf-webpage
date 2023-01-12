import "./SocialNetwork.css";
import { ImFacebook2, ImInstagram, ImWhatsapp } from "react-icons/im";
import { Link, BrowserRouter } from "react-router-dom";

function SocialNetwork() {
    return (
        <div className="network-cmp">
            <a href="#" target="_blank" className="facebook-icon">
                <ImFacebook2 size="35px" className="fb-icon" />
            </a>
            <a
                href="https://www.instagram.com/cattery_of_precious_fate/"
                className="instagram-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ImInstagram size="35px" className="insta-icon" />
            </a>
            <a href="#" target="_blank" className="whatsapp-icon">
                <ImWhatsapp size="35px" className="wa-icon" />
            </a>
        </div>
    );
}

export default SocialNetwork;
