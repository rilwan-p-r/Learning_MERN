import React, { useEffect, useState } from "react";

const RouterPage = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(false);
  useEffect(() => {
    let timeout;
    let interval;
    if (time) {
      interval = setInterval(() => {
        setValue(value + 1);
      }, 1000);
      timeout = setTime(() => {
        setTime(false);
        clearInterval(interval)
      }, 10000);
      }
        return()=>{
            clearInterval(timeout)
            clearInterval(interval)
        }
  }, [value, setValue, time]);
  const handleTimer = () => {
    setTime(true);
  };
  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleTimer}>click</button>
    </>
  );
};

export default RouterPage;
