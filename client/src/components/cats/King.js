import "./Cats.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaBackward } from "react-icons/fa";

const pics = [
    "/elvypics/elvy01.jpeg",
    "/elvypics/elvy02.jpeg",
    "/elvypics/elvy03.jpeg",
    "/elvypics/elvy04.jpeg",
    "/elvypics/elvy05.jpeg",
    "/elvypics/elvy06.jpeg",
    "/elvypics/elvy07.jpeg",
    "/elvypics/elvy08.jpeg",
    "/elvypics/elvy09.jpeg",
];

function King() {
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
            <h2>About King Fado</h2>
            <section>
                Name: Fado (Fado)
                <br />
                Date of Birth: 25-07-2022
                <br />
                Color: Amber Classic Tabby Bicolor
            </section>
            <h2 className="pictitle">Pictures</h2>
            <div className="grid-gallery">
                {pictures &&
                    pictures.map((pic) => {
                        // console.log(pic);
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

export default King;
