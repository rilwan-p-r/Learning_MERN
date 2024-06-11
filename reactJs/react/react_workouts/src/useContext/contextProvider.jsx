

import React, { useState } from 'react'
import PropTypes from 'prop-types'; 
import { createContext } from 'react'
import Page1 from './page1'
import Page2 from './page2'
export const MyContext = createContext()
const ContextProvider = ({children}) => {
   const [value,setValue]=useState('')
  return (
    <>
    <MyContext.Provider value={{value,setValue}}>
        {children}
    </MyContext.Provider>
    </>
  )
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ContextProvider
