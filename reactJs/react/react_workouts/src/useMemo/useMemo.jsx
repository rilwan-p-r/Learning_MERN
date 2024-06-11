import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [inputext,setInput]=useState('')
    const toUpper=useMemo(()=>{
        console.log('coverting toUpper...');
        return inputext.length
    },[inputext])
  return (
    <>
    <input value={inputext} onChange={(e)=>setInput(e.target.value)}/>
    <h1>{inputext}</h1>
    <h4>{toUpper}</h4>
    </>
  )
}

export default UseMemo
