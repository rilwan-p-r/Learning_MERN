  import { useDispatch, useSelector } from "react-redux";
  import {
    increment,
    decrement,
    incrementFive,
    autoIncrement,
   
  } from "../redux_toolkit/valReducer";
  import { useEffect, useState } from "react";

  const Counter = () => {
    const count = useSelector((state) => state.value.count);
    console.log(count);
    const dispatch = useDispatch();
    const [isAutoIncrement, setIsAutoIncrement] = useState(false);

    useEffect(() => {
      let interval;
      let timeout
      if (isAutoIncrement) {
        interval = setInterval(() => {
          dispatch(autoIncrement(1));
        }, 1000)
        timeout=setTimeout(()=>{
          clearInterval(interval)
          setIsAutoIncrement(false)
        },10000)
      }
      return () => {
        clearInterval(interval);
        clearInterval(timeout);

      }
    }, [isAutoIncrement,dispatch]);
    const handlAutoIncrementStart = () => {
      setIsAutoIncrement(true);
    };
    const handlAutoIncrementStop = () => {
      setIsAutoIncrement(false);
    };
  
    return (
      <>
        <h1>counter</h1>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementFive(5))}>incrementFive</button>
        <button onClick={handlAutoIncrementStart}>AutoIncrementStart</button>
        <button onClick={handlAutoIncrementStop}>AutoIncrementStop</button>
      </>
    );
  };

  export default Counter;
