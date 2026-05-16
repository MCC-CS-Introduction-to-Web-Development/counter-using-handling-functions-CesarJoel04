import React, { useState } from 'react';

//import Counter from './components/counter'
import Counter from './components/ButtonCounter'


function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
      <Counter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </>
  );
}

export default App;
