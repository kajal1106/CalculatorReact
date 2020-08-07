import React from "react";

import "./styles/styles.css";

import Calculator from "./layout/Calculator/Calculator";

const app = () => (
  <div className="app">
    {/* // Adding the Calculator component so that its result can be displayed in a web browser  */}
    <Calculator />
  </div>
);

export default app;
