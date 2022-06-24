import { useState } from "react";

import "./styles.css";
import useInterval from "./useInterval";
import useCountdown from "./useCountdown";

export default function App() {
  const [count, setCount] = useState(10);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, delay);

  return (
    <div className="App">
      <h2>countdown:</h2>
      <h2>{count}</h2>
      <h2>{useCountdown()}</h2>
    </div>
  );
}
