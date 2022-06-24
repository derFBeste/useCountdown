import { useState } from "react";
import useInterval from "./useInterval";

const oneMin = 60; // One minute in seconds.
const delay = 1000; // One second in milliseconds.

export default function useCountdown(countDownFrom = oneMin) {
  const [count, setCount] = useState(countDownFrom);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, delay);

  return count;
}
