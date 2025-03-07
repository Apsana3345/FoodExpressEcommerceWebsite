import React from "react";
import { NavConstant } from "../../constant/NavConstant";
import { NavLink } from "react-router-dom";

const Navlist = () => {
  return (
    <div className="flex gap-7">
      {NavConstant.map((item) => (
        <NavLink
          className="flex flex-col items-center gap-1"
          key={item.id}
          to={item.link}
        >
          <ul className="hidden sm:flex gap:5 text-sm text-gray-700">
            <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-[#0D7A57] font-medium hover:text-[#0D7A57]/80 transition-colors duration-200">{item.label}</p>
          </ul>
          <hr className="w-3/4 border-none h-[1.5px] bg-[#0D7A57] hidden" />
        </NavLink>
      ))}
    </div>
  );
};

export default Navlist;