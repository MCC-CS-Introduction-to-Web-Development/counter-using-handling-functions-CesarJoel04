import React, { useEffect, useState } from "react";
import './stylesheet.css';


const Counter = () => {
    const [num, setCount] = useState(0);

    const handleAdd = () => {
        setCount((num) => num + 1);
    };

    const handleSubtract = () => {
        setCount((num) => (num > 0 ? num - 1 : 0));
    };


    return (
        <main className="counterApp">
            <h1 className="title">Class 4 Assignment <br/>Counter App</h1>

            <section className="counter-display">
                <span className="count-value"> {num}</span>
            </section>

            <section className="button-group">
                <button className="subtract-button"
                onClick={handleSubtract}>
                    - Subtract
                </button>

                <button className="add-button"
                onClick={handleAdd}>
                    + Add
                </button>
            </section>
        </main>
    );
};

export default Counter;