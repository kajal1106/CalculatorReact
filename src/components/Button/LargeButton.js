// LargeButton.js Component file

import React from "react";
import Button from "../Button/Button";

//passing down the children property which has the = value, along with an explicitly typed type attribute
const largeButton = (props) => <Button type="large" {...props} />;

export default largeButton;
