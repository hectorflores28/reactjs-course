import { useState } from 'react';

const ToogleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Active" : "Inactive"}
        </button>
    )
}

export default ToogleButton