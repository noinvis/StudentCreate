import React, { memo } from "react";
import logo from '@/assets/img/user.png'
import { IoIosAdd } from "react-icons/io";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="sticky top-0 h-[90px] bg-white z-10">
      <nav className="container flex justify-between items-center py-[10px]">
        <NavLink to={"/"}>
          <img
            className="w-[70px]"
            src={logo}
            alt=""
          />
        </NavLink>
        <ul className="flex items-center gap-[30px] text-[20px] font-medium max-[500px]:hidden">
          <li className="hover:cursor-pointer hover:text-[dodgerblue] duration-300">About</li>
          <li className="hover:cursor-pointer hover:text-[dodgerblue] duration-300">Contact</li>
          <li className="hover:cursor-pointer hover:text-[dodgerblue] duration-300">Cookie</li>
        </ul>
        <button className="bg-[dodgerblue] rounded-[10px] text-white hover:cursor-pointer border border-[dodgerblue] hover:bg-white hover:text-[dodgerblue] duration-300">
          <NavLink className="flex gap-[2px] items-center py-[10px] px-[10px] font-medium" to={"/create"}><IoIosAdd className="text-[30px]"/>Create</NavLink>
        </button>
      </nav>
    </header>
  );
};

export default memo(Header);
