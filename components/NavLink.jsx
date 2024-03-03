import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <div>
      <Link
        href={href}
        className="block py-2 pr-4 pl-3 text-[#adb7be] sm:text-xl rounded md-p-0 hover:text-white"
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
