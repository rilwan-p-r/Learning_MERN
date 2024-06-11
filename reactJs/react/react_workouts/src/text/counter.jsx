import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./reduceers";
const Counter = () => {
  const value = useSelector((state) => state.storage.value);
  console.log("vaaaaal", value);
  const dispatch = useDispatch();
  const [isAutoIncremment,setIseAutoIncremment]=useState(false)
useEffect(()=>{
let interval;
let timeout;
if(isAutoIncremment){
    interval = setInterval(()=>{
        dispatch(increment())
    },1000)
    timeout=setTimeout(()=>{
        setIseAutoIncremment(false)
        clearInterval(interval)
    },10000)
}
return ()=>{
        clearInterval(interval)
        clearInterval(timeout)
    }
},[isAutoIncremment,dispatch])
const handleAutoIncrement =()=>{
    setIseAutoIncremment(true)
}

  return (
    <>
      <h1>counter</h1>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>increment</button>
      <button onClick={handleAutoIncrement}>auto increment</button>
    </>
  );
};

export default Counter;
