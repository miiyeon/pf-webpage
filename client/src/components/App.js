import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Logo from "./Logo";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <div className="app-cmp">
                <nav className="navbar-section">
                    {/* One section for Navigation bar */}
                    <Logo />
                    <Link to="/">Home</Link>
                </nav>

                {/* One section for Content */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
