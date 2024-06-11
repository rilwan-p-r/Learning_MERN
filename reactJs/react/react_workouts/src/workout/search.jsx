import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchItems } from "./reducers";
import Navigate from "./navigate";
const Search = () => {
  const search = useSelector((state) => state.storage.search);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(SearchItems(e.target.value));
  };
  return (
    <>
    <Navigate/>
      <input value={search} onChange={handleSearch} />
   
    </>
  );
};

export default Search;
