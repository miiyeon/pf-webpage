import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.querySelector("main"));

fetch("/user/id.json")
    .then((res) => res.json())
    .then(() => {
        root.render(<App />);
    });
