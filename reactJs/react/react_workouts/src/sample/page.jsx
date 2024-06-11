import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleText } from './reducer'
const Page = () => {
    const value = useSelector((state)=>state.storage.text)
    console.log(value);
    const dispatch = useDispatch()
    const handleInput =(e)=>{
        dispatch(handleText(e.target.value))
    }
  return (
   <>
   <input value={value} onChange={handleInput}/>
   </>
  )
}

export default Page
