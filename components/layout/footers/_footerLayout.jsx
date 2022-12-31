import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // new Date().setFullYear(new Date().getFullYear() + 1)

  return <footer>Footer @copyright - {currentYear}</footer>;
};

export default Footer;
