import React, { useEffect, useRef, useState } from "react";

const HooksInterval = () => {
  const [stateValue, setStateValue] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStateValue((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <div>From useState: {stateValue}</div>
    </div>
  );
};

export default HooksInterval;
