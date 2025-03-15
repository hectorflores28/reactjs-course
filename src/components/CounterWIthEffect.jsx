import { useState, useEffect } from 'react';
import './Counter.css';

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador cambió a: ${count}`);
    }, [count]);

    return (
        <div className="counter-container">
            <p className="counter-text">{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default CounterWithEffect;
