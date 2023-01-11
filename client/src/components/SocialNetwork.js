import "./SocialNetwork.css";
import { ImFacebook2, ImInstagram, ImWhatsapp } from "react-icons/im";

function SocialNetwork() {
    return (
        <div className="network-cmp">
            <a href="#" target="_blank" className="facebook-icon">
                <ImFacebook2 size="35px" className="fb-icon" />
            </a>
            <a href="#" target="_blank" className="instagram-icon">
                <ImInstagram size="35px" className="insta-icon" />
            </a>
            <a href="#" target="_blank" className="whatsapp-icon">
                <ImWhatsapp size="35px" className="wa-icon" />
            </a>
        </div>
    );
}

export default SocialNetwork;
