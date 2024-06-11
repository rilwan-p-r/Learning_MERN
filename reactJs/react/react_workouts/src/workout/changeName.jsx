import React, { useEffect, useState } from 'react'
import { changeName } from './reducers'
import { useDispatch, useSelector } from 'react-redux'
const ChangeName = () => {
    const value = useSelector((state)=>state.storage.name)
       

    console.log(value);
    const dispatch=useDispatch()
 
    const [isUser,setUser]=useState(false)
    const handleUserName=()=>{
       if(isUser){
        dispatch(changeName('jhon'))
        setUser(false)
       }else{
        dispatch(changeName('user'))
        setUser(true)
       }
    }
  return (
    <>
    <h1>userName</h1>
    <h2>{value}</h2>
    <button onClick={handleUserName}>chaneg name</button>
    </>
  )
}

export default ChangeName
