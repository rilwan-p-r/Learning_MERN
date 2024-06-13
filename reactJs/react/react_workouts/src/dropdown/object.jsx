import React from 'react'
import DropDown from './dropDown'
const Object = () => {
    const nestedObject = {
        animals: {
          mammals: ['Dog', 'Cat', 'Elephant'],
          birds: ['Eagle', 'Parrot', 'Sparrow']
        },
        plants: {
          trees: ['Oak', 'Pine', 'Birch'],
          flowers: ['Rose', 'Tulip', 'Daisy']
        }
      };
      
  return (
    <>
    <h1>select category</h1>
    <DropDown data={nestedObject}/>
    </>
  )
}

export default Object
