import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount,decrementCount } from './reducers'

const Home = () => {
    const value = useSelector((state)=>state.storage.count)
    const [isAutoIncrement,setIsAutoIncrement]=useState(false)
    const dispatch = useDispatch()
   useEffect(()=>{
    let interval
    let timeout
    if(isAutoIncrement){
      interval=setInterval(()=>{
        dispatch(incrementCount())
      },50)
      timeout=setTimeout(()=>{
       clearInterval(interval)
       setIsAutoIncrement(false)
      },10000)
    }
    return ()=>{
      clearInterval(interval)
      clearInterval(timeout)
    }
   },[isAutoIncrement,dispatch])
  const handleAutoIncremnt=()=>{
    setIsAutoIncrement(true)
  }

  return (
    <>
      <h1>counter</h1>
      <h2>{value}</h2>
      <button onClick={()=>dispatch(incrementCount())}>increment</button>
      <button onClick={()=>dispatch(decrementCount())}>decrement</button>
      <button onClick={handleAutoIncremnt}>Auto Increment</button>
    </>
  )
}

export default Home
