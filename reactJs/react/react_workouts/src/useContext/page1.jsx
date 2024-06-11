import React, { useContext} from 'react'
import {MyContext} from './contextProvider'
const Page1 = () => {
    
    const {value,setValue}=useContext(MyContext)
    const handleInput=(e)=>{
      const newValue = e.target.value
        setValue(newValue)
        console.log(newValue);
    }
  return (
    <>
    
        <input value={value} onChange={handleInput}/> 
    </>
  )
}

export default Page1
