//KeypadRow.js layout file
import React from "react";

//passing props between the components
const keypadRow = (props) => (
  // rendering directly on the page using props.children withpout altering anything
  <div className="keypad__row">{props.children}</div>
);

export default keypadRow;
