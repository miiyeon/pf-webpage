import "./Cats.css";
import { useEffect } from "react";

function King() {
    useEffect(() => {
        console.log("king page");
        fetch("/king").then((res) => res.json());
    }, []);

    return <div className="catKing">King</div>;
}

export default King;
