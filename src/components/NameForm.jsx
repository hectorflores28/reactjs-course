import { useState } from "react";
import "./NameForm.css";

const NameForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="name-form-container">
            <p className="greeting-text">Hello, {firstName || "Fellow"} {lastName || ""}</p>
            <input
                type="text"
                className="name-input"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <br></br>
            <br></br>
            <input
                type="text"
                className="name-input"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
        </div>
    );
};

export default NameForm;
