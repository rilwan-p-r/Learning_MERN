import React, { useReducer } from "react";

const Reducer = () => {
  function counter(state, action) {
    switch (action) {
      case "increment":{
          return state + 1;
      }
      case "decrement":{
          return state - 1;
          
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(counter,0);
  return (
    <>
    <h1>{state}</h1>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>deccrement</button>
    </>
  );
};

export default Reducer;
