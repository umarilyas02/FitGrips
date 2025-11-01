"use client";
import { useState, React } from "react";
import { TextAlignStart } from "lucide-react";
import SlideInMenu from "./SlideInMenu";


const ToggleNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="md:hidden font-extrabold" onClick={toggleNav}>
        <TextAlignStart width={25} height={25} strokeWidth={2.5} />
      </button>

      <SlideInMenu isOpen={isOpen} onClose={closeNav} />
    </>
  );
};

export default ToggleNav;