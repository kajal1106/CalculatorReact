import React from "react";

import ResultScreen from "./ResultScreen";
import ComputationScreen from "./ComputationScreen";

const screen = (props) => (
  <section className="screen">
    <ResultScreen>{props.result}</ResultScreen>
    <ComputationScreen>{props.equation}</ComputationScreen>
  </section>
);

export default screen;
