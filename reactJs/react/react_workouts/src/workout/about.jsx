import React from 'react'
import { useSelector } from 'react-redux';
import Navigate from './navigate';
const About = () => {
    const search = useSelector((state) => state.storage.search);
    const items = useSelector((state) => state.storage.items);
    const filteredProduct = items.filter((item) => 
      item.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
    <Navigate/>
      <ul>
        {filteredProduct.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default About
