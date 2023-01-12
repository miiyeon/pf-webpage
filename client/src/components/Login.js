import "./Login.css";
import { useState, useEffect } from "react";

function Login() {
    const [myData, setMyData] = useState(null);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    //fetch my data from database
    useEffect(() => {
        fetch("/boss")
            .then((res) => res.json())
            .then((data) => {
                console.log("boss: ", data);
                setMyData(data);
            })
            .catch((error) =>
                console.log("error at boss fetch login: ", error)
            );
    }, []);

    const handleInputChange = (e) => {
        const text = e.currentTarget.value;
        setInput(text);
    };

    // console.log(input);

    const handleSubmit = () => {
        console.log("Submit the form in login");
        fetch("/login", {
            method: "POST",
            body: JSON.stringify(myData),
            headers: { "Content-Type": "application/json" },
        })
            .then((result) => result.json())
            .then((userData) => {
                console.log("USER DATA HANDLE SUBMIT: ", userData);
                if (userData.success !== true) {
                    setError("Invalid Input!!!");
                } else {
                    location.replace("/");
                }
            })
            .catch(() => {
                setError("Invalid Input!!!");
            });
    };

    return (
        <div className="login-cmp">
            <h3>Please login below</h3>
            <div className="error">{error}</div>
            <div>
                <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                />
            </div>

            <button className="reglogbtn" onClick={handleSubmit}>
                Login now
            </button>
        </div>
    );
}

export default Login;
