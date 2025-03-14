import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <p className="counter-text">Let's star counting! : {count}</p>
            <div className="counter-buttons">
                <button onClick={() => setCount(count - 1)}>Reduce</button>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </div>
    );
};

export default Counter;
