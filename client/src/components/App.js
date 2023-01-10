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
                        <Link to="/">Home</Link>
                        <Link to="about">About Us</Link>
                        <Link to="kitties">Kitten</Link>
                        <Link to="contacts">Contact Us</Link>
                    </div>
                </nav>

                {/* One section for Content */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/kitties" element={<Kitten />} />
                    <Route path="/contacts" element={<ContactUs />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
