import React from "react";
import { useSelector } from "react-redux";

const ComponentC = () => {
  const textField = useSelector((state) => state.textField);
  return (
    <div style={{ marginTop:20 }}>
      <span style={{ fontWeight: 600, fontSize: 25 }}><u>Output</u></span>
      <br/>
      <p style={{ fontSize: 28,marginTop:-2}} > {textField}</p>
     
    </div>
  );
};

export default ComponentC;
