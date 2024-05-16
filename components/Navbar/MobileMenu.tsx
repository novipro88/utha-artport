import React from "react";
import NavItem from "./NavItem";

interface Link {
  path: string;
  title: string;
}

interface MobileMenuprops {
  links: Link[];
}

const MobileMenu = ({ links }: MobileMenuprops) => {
  return (
    <ul className="flex flex-col py-4 items-center z-10 bg-mycolor-400">
      {links.map((link, index) => (
        <li key={index}>
          <NavItem href={link.path} title={link.title}></NavItem>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
