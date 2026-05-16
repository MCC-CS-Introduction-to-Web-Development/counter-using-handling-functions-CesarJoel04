import React from 'react'
import './stylesheet.css';

interface ButtonCounterProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }

const ButtonCounter: React.FC<ButtonCounterProps> = ({ count, onIncrement, onDecrement }) => {
    const handleIncrementClick = () => {
        onIncrement();
    };

    const handleDecrementClick = () => {
        onDecrement();
    };

    return (
        <main className='counterApp'>
            <h1 className='title'>
                Class 5 Assignment <br /> Button Counter
            </h1>

            <section className="counter-display">
                <span className="count-value">{count}</span>
            </section>

            <section className="button-group">
                <button className="add-button" onClick={handleIncrementClick}>
                    + Add
                </button>
                <button className="subtract-button" onClick={handleDecrementClick}>
                    - Subtract
                </button>
            </section>

        </main>
    )
}

export default ButtonCounter;