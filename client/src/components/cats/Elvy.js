import "./Cats.css";
import { useEffect } from "react";

function Elvy() {
    useEffect(() => {
        console.log("elvy page");
        fetch("/queenElvy").then((res) => res.json());
    }, []);

    return <div className="catElvy">Elvy</div>;
}

export default Elvy;
