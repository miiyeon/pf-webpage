import "./Cats.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaBackward } from "react-icons/fa";

const pics = [
    "/muipics/mui01.JPG",
    "/muipics/mui02.JPG",
    "/muipics/mui03.JPG",
    "/muipics/mui04.JPG",
    "/muipics/mui05.JPG",
];

function Mui() {
    const [pictures, setPictures] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setPictures(pics);
    }, []);

    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className="cat-cmp">
            <h2>About Queen Mui Mui</h2>
            <section>
                Name: Dana von Blicharskis Tieroase (Mui Mui)
                <br />
                Date of Birth: 11-03-2022
                <br />
                Color: Light Amber Silver Classic Torbie White
            </section>
            <h2 className="pictitle">Pictures</h2>
            <div className="grid-gallery">
                {pictures &&
                    pictures.map((pic) => {
                        console.log(pic);
                        return (
                            <div className="gallery" key={pic}>
                                <img src={pic} alt="" />
                            </div>
                        );
                    })}
            </div>
            <div className="backButton">
                <button className="goBack" onClick={goBack}>
                    <FaBackward /> Back
                </button>
            </div>
        </div>
    );
}

export default Mui;
