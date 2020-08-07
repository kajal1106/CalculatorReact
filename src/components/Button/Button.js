import React from "react";

const button = (props) => {
  //initializing classes array
  const classes = ["btn"];

  //adding the passed prop prefixed with btn-- to our classes array.
  if (typeof props !== "undefined" && typeof props.type !== "undefined")
    classes.push("btn--" + props.type);

  return (
    // assigning the joined classes to the className attribute. This will allow us to dynamically control the styling of a component
    <button className={classes.join(" ")} onClick={props.onButtonPress}>
      {props.children}
    </button>
  );
};

export default button;
