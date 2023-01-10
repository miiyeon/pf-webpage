import { createRoot } from "react-dom/client";
import App from "./components/App";
// import SignUp from "./components/SignUp";

const root = createRoot(document.querySelector("main"));

fetch("/user/id.json")
    .then((res) => res.json())
    .then(() => {
        // if (data.userID) {
        root.render(<App />);
        // } else {
        // root.render(<SignUp />);
        // }
    });
