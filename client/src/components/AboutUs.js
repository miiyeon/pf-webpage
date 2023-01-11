import "./AboutUs.css";
import { useNavigate } from "react-router";

function AboutUs() {
    const navigate = useNavigate();

    const handleMui = () => {
        console.log("handle mui case");
        navigate("/muimui");
    };

    const handleElvy = () => {
        console.log("handle elvy case");
        navigate("/elvy");
    };

    const handleKing = () => {
        console.log("handle king case");
        navigate("/kingcat");
    };

    return (
        <div className="about-cmp">
            <h2>About Me</h2>
            <p className="introduction">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </p>
            <h2>About My Queens</h2>
            {/* picture with onclick event to their page */}
            <div className="queens">
                <img src="/Faruzan.jpeg" alt="cat1" onClick={handleMui} />
                <img src="/Faruzan.jpeg" alt="cat1" onClick={handleElvy} />
            </div>
            <h2>About my Tomcat</h2>
            {/* picture with onclick event to his page */}
            <div className="king">
                <img src="/Faruzan.jpeg" alt="cat1" onClick={handleKing} />
            </div>
            <br />
            <br />
        </div>
    );
}

export default AboutUs;
