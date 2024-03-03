import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
    const navLinks = [
        {
          title: "About",
          path: "#about",
        },
        {
          title: "Projects",
          path: "#projects",
        },
        {
          title: "Contact",
          path: "#contact",
        },
      ];
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;