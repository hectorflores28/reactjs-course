import { useState } from "react";
import "./NameForm.css";

const NameForm = () => {
    const [name, setName] = useState("");

    return (
        <div className="name-form-container">
            <p className="greeting-text">Hello, {name || "Fellow"}</p>
            <input
                type="text"
                className="name-input"
                placeholder="Enter your first name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    );
};

export default NameForm;
