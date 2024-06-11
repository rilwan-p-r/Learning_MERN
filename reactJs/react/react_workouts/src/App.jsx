import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from 'react-redux';
// import {store,persistor} from './sample/store'
// import Page from './sample/page';
// import Page2 from './sample/page2';
import Navigate from "./workout/navigate";
// import { PersistGate } from 'redux-persist/integration/react';
import Page1 from "./useContext/page1";
import Page2 from "./useContext/page2";
import ContextProvider from "./useContext/contextProvider";
import ParentComponent from "./useCallback/useCallback";
import Reducer from "./useReducer/reducer";
import UseMemo from "./useMemo/useMemo";
function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //   <Router>
    //   <Navigate/>
    //     <Routes>
    //       <Route path='/' element={<Page/>}/>
    //       <Route path='/page2' element={<Page2/>}/>
    //     </Routes>
    //   </Router>
    //   </PersistGate>
    // </Provider>
  //   <ContextProvider>
  //   <Page1/>
  //   <Page2/>
  // </ContextProvider>
  <>
  <UseMemo/>
  </>
  );
}

export default App;
