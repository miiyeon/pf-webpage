import "./Cats.css";
import { useState, useEffect } from "react";

const pics = [
    "/muipics/mui01.JPG",
    "/muipics/mui02.JPG",
    "/muipics/mui03.JPG",
    "/muipics/mui04.JPG",
    "/muipics/mui05.JPG",
];

function Mui() {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        setPictures(pics);
    }, []);

    return (
        <div className="mui-cmp">
            <h2>About Queen Mui Mui</h2>
            <section>
                Name: Dana von Blicharskis Tieroase (Mui Mui)
                <br />
                Date of Birth: 11-03-2022
                <br />
                Color: Light Amber Silver Classic Torbie White
            </section>
            <h2>Pictures</h2>
            <div className="grid-gallery">
                {pictures &&
                    pictures.map((pic) => {
                        return (
                            <div className="gallery" key={pic.id}>
                                <img src={pic} alt="mui pic" />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Mui;
