import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdMenuOpen } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { signOut } from "firebase/auth";
const Nav = () => {
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <nav className="w-full">
      <div className="lg:flex items-center justify-between hidden bg-[#FFF7D4] p-3 shadow-md shadow-gray-400">
        <div className="">
          <Link to={"/"}>
            <img className="w-[70px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="font-semibold text-gray-800 flex items-center gap-5">
          <NavLink to={`/singUp`}>Sing up</NavLink>
          <NavLink to={`/login`}>Sing In</NavLink>
          <NavLink onClick={logOut}>logout</NavLink>
        </div>
      </div>
      {/* ------------------------ Nav bar for sm and md device----------------------- */}
      <div className="flex justify-between items-center lg:hidden bg-[#FFF7D4] p-1 fixed w-full top-0 z-50">
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
        <div className="flex flex-col h-screen bg-[#22092C] text-white w-[40%] fixed z-50 mt-[1px] justify-center text-center gap-14 lg:hidden">
          <NavLink>Sing up</NavLink>
          <NavLink>Sing In</NavLink>
          <NavLink>logout</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
