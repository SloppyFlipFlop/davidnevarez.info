import React from "react";
import { IoFlowerOutline } from "react-icons/io5";
import ModeButton from "./ModeButton";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-end py-4">
      <ModeButton />
    </div>
  );
};

export default Navbar;
