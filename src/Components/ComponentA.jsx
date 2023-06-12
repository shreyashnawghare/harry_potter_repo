import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  return (
    <div>
        <div>
          <ComponentB/>
        </div>
        <div>
          <ComponentC/>
        </div>
    </div>
  );
};

export default ComponentA;
