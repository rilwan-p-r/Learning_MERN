import React, { useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <MyContext.Provider value={{ value, setValue }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
