import React from "react";

const FunctionComponents = (props) => {
  let fName = "peter parker";
  let designation = "spider man";
  let color = "blue, red";

  const CEO_Name = "Tony stark";
  return (
    <div>
      <h1>Function Components</h1>
      <h1>{fName}</h1>
      <p>{designation}</p>
      <p>{color}</p>
      <h1>{CEO_Name}</h1>
      <h2>{props.CEO_Name}</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default FunctionComponents;
