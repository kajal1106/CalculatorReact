import React from "react";

import ResultScreen from "./ResultScreen";
import ComputationScreen from "./ComputationScreen";

const screen = (props) => (
  <section className="screen">
    {/* add both the screens to our main Screen component. */}
    <ResultScreen>{props.result}</ResultScreen>
    <ComputationScreen>{props.equation}</ComputationScreen>
  </section>
);

export default screen;
