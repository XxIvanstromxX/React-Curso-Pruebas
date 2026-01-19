import { useState } from 'react';

export default function DirectMutationState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // Directly mutating the state variable (not recommended)
    count += 1; // This does not trigger a re-render
    console.log('Count after direct mutation:', count);
  }

  return (
    <div>
      <h2>Direct Mutation of State Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <p>Open the console to see the count after clicking the button.</p>
    </div>
  );
}
