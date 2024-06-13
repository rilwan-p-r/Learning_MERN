import { object } from "prop-types";
import React, { useState } from "react";

const DropDown = ({ data }) => {
  const [selectedCategory, setCategory] = useState("");
  const [selectedSubCategory, setSubCategory] = useState("");
  const handlecategory = (e) => {
    setCategory(e.target.value);
  };
  const handlesubcategory = (e) => {
    setSubCategory(e.target.value);
  };
  console.log(data);
  return (
    <>
      <select value={selectedCategory} onChange={handlecategory}>
        <option>select category</option>
        {Object.keys(data).map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      {selectedCategory && (
        <select value={selectedSubCategory} onChange={handlesubcategory}>
          <option>selectedSubCategory</option>
          {Object.keys(data[selectedCategory]).map((SubCategory) => (
            <option key={SubCategory}>{SubCategory}</option>
          ))}
        </select>
      )}
      {selectedSubCategory&&(
        <li>
            {data[selectedCategory][selectedSubCategory].map((item)=>(
                <ol key={item}>{item}</ol>
            ))}
        </li>
      )}
    </>
  );
};

export default DropDown;
