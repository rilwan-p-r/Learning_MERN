import React from "react";

const ChildComponent = React.memo(({ onClick }) => {
    console.log('child rendered...');
  return <button onClick={onClick}>Click me</button>;
});
ChildComponent.displayName='ChildComponent'
export default ChildComponent;
