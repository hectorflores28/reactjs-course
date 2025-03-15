import { useState } from 'react';
import './Counter.css';
import './ToogleButton.jsx'
import ToogleButton from './ToogleButton.jsx';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
                <ToogleButton></ToogleButton>
            <p className="counter-text">Let's star counting! : {count}</p>
            <div className="counter-buttons">
                <button onClick={() => setCount(count - 1)}>Reduce</button>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </div>
    );
};

export default Counter;
