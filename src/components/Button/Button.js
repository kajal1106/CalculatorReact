// Button.js Component file
import React from "react";

const button = (props) => {
  //initializing classes array
  const classes = ["btn"];

  //adding the passed prop prefixed with btn-- to our classes array.
  if (typeof props !== "undefined" && typeof props.type !== "undefined")
    classes.push("btn--" + props.type);
  //The code above starts with an initialized classes array. We check if the a type named prop is passed from the parent, if it is then we add the passed prop prefixed with btn-- to our classes array. Finally we assign the joined classes to the className attribute. This allows us to dynamically control the styling of a component. Again we needed to add the curly braces to execute the classes.join() JavaScript expression in our JSX markup. Finally, we will modify the Keypad.js file to update our = to behave as a large button.

  return (
    // assigning the joined classes to the className attribute. This will allow us to dynamically control the styling of a component
    <button className={classes.join(" ")} onClick={props.onButtonPress}>
      {props.children}
    </button>
  );
};

export default button;
