import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "animate.css";

import "./App.css";
import Logo from "./Logo";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Kitten from "./Kitten";
import ContactUs from "./ContactUs";
import SocialNetwork from "./SocialNetwork";
import Mui from "./cats/Mui";
import Elvy from "./cats/Elvy";
import King from "./cats/King";

function App() {
    return (
        <BrowserRouter>
            <div className="app-cmp">
                <nav className="navbar-section">
                    {/* One section for Navigation bar */}
                    <Logo />
                    <div className="pages animate__animated animate__slideInDown">
                        <Link to="/" className="home">
                            Home
                        </Link>
                        <Link to="about" className="aboutus">
                            About Us
                        </Link>
                        <Link to="kitties" className="kitten">
                            Kitten
                        </Link>
                        <Link to="contacts" className="contactus">
                            Contact Us
                        </Link>
                        <h1 className="pagetitle">Cattery of Precious Fate</h1>
                    </div>
                    <br />
                </nav>

                {/* One section for Content */}
                <div className="centerContent">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/kitties" element={<Kitten />} />
                        <Route path="/contacts" element={<ContactUs />} />
                        <Route path="/muimui" element={<Mui />} />
                        <Route path="/elvy" element={<Elvy />} />
                        <Route path="/kingcat" element={<King />} />
                    </Routes>
                </div>
                <SocialNetwork />
            </div>
        </BrowserRouter>
    );
}

export default App;
