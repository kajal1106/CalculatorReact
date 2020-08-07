import React from "react";

import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";

//Tranforing from functional to stateful component
class Calculator extends React.Component {
  // Adding State to our Stateful Component
  state = {
    equation: "",
    result: 0
  };
  // implementing an onButtonPress and clear method using arrow functions (to preserve this binding).
  onButtonPress = (event) => {
    let equation = this.state.equation;
    const pressedButton = event.target.innerHTML;

    // The onButtonPress event checks for the button pressed and executes logic accordingly.
    if (pressedButton === "C") return this.clear();
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      equation += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
      equation += " " + pressedButton + " ";
    // The = button checks if the equation is valid via the try/catch block and uses the eval method to compute the result of the equation
    else if (pressedButton === "=") {
      try {
        // eslint-disable-next-line
        const evalResult = eval(equation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("Invalid Mathematical Equation");
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }

    this.setState({ equation: equation });
  };

  clear() {
    this.setState({ equation: "", result: 0 });
  }

  render() {
    return (
      // Adding screen component and keypad to display the result in main application
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad onButtonPress={this.onButtonPress} />
      </main>
    );
  }
}

export default Calculator;
