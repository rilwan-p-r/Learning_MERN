import React, { useContext } from 'react';
import { MyContext } from './contextProvider';

const Page2 = () => {
  const { value,setValue } = useContext(MyContext);
  console.log(value);

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default Page2;
