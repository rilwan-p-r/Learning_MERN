import React from "react";
import { setSearchItem } from "./valReducer";
import { useDispatch, useSelector } from "react-redux";

const SearchItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.value.items);
  const searchterm = useSelector((state) => state.value.searchTerm);
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchterm.toLowerCase())
);

const handlesearch=(e)=>{
dispatch(setSearchItem(e.target.value))
}
  return (
    <>
      <input
        value={searchterm}
        onChange={handlesearch}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchItems;
