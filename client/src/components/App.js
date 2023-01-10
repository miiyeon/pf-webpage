import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Logo from "./Logo";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Kitten from "./Kitten";
import ContactUs from "./ContactUs";

function App() {
    return (
        <BrowserRouter>
            <div className="app-cmp">
                <nav className="navbar-section">
                    {/* One section for Navigation bar */}
                    <Logo />
                    <div className="pages">
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
