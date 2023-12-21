import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdMenuOpen } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="max-w-7xl w-full mx-auto ">
      <div className="lg:flex items-center justify-between hidden bg-[#F7EFE5] p-3 shadow-md shadow-gray-400">
        <div className="">
          <Link to={"/"}>
            <img className="w-[70px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="font-semibold text-gray-800 flex items-center gap-5">
          <NavLink>Sing up</NavLink>
          <NavLink>Sing In</NavLink>
          <NavLink>logout</NavLink>
        </div>
      </div>
      {/* ------------------------ Nav bar for sm and md device----------------------- */}
      <div className="flex justify-between items-center lg:hidden bg-[#F7EFE5] p-3 fixed w-full top-0 ">
        <Link to={"/"}>
          <img className="w-[70px]" src={logo} alt="" />
        </Link>
        <span onClick={() => setOpen(!open)}>
          {open ? (
            <span>
              <VscChromeClose size={30}></VscChromeClose>
            </span>
          ) : (
            <span>
              <MdMenuOpen size={30}></MdMenuOpen>
            </span>
          )}
        </span>
      </div>
      {open && (
        <div className="flex flex-col h-screen bg-[#7743DB] w-[40%] text-white justify-center text-center gap-14">
          <NavLink>Sing up</NavLink>
          <NavLink>Sing In</NavLink>
          <NavLink>logout</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
