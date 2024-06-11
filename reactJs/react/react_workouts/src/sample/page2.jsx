import React from 'react'
import { useSelector } from 'react-redux'

const Page2 = () => {
  const value= useSelector((state)=>state.storage.text)
  return (
   <>
   <h1>{value}</h1>
   </>
  )
}

export default Page2
