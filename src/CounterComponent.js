import React, { useState, useEffect } from 'react';

function CounterComponent() {

// Step 2: Define state using useState
const [count, setCount] = useState(0);

// Step 3: Define an effect using useEffect
useEffect(() => {
  // This function will run after every render
  document.title = `Count: ${count}`;
  // Step 4: Dependency array
  }, [count]); 

  // Step 5: Render the component
return (
   <div>
     <p>Count: {count}</p>
     <button onClick={() => setCount(count + 1)}>Increment</button>
   </div>
);
}

export default CounterComponent;