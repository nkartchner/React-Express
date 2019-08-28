import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  // set a variable named count and the function to fire call setCount. make those = to useState(starting at 0)
  return (
    <div>
      <p>
        This is a sample of a basic stateful and server-side rendered React
        Application.
      </p>
      <p>I Shall call him..... Counter</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
