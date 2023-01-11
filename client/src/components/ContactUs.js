import { send } from "emailjs-com";
import { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
    const [toSend, setToSend] = useState({
        from_name: "",
        // to_name: "",
        message: "",
        reply_to: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send("service_d4fbqvd", "template_yconfqe", toSend, "yHEcWRLMB0y9b3lYk")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setToSend({
                    from_name: "",
                    // to_name: "",
                    message: "",
                    reply_to: "",
                });
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="contacts-cmp">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="from_name"
                    placeholder="from name"
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                {/* <input
                    type="text"
                    name="to_name"
                    placeholder="to name"
                    value={toSend.to_name}
                    onChange={handleChange}
                /> */}
                <input
                    type="text"
                    name="message"
                    placeholder="Your message"
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="reply_to"
                    placeholder="Your email"
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
