import React from "react";
import cardStyles from "./../../styles/components/cards/ImageStack.module.scss";

const ImageStack = ({ children }) => {
  return <div id={cardStyles.card}>{children}</div>;
};

export default ImageStack;
