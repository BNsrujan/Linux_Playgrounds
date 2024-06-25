import React from "react";
import { styles } from "../style";
import { terminal, user } from "../assets";
import {Link, useNavigate} from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed bg-[#000000] pattern t-0 z-10 pattern`}
    >
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
        <Link className="items-center flex gap-2" to="/" onClick={() => {}}>
          <img
            src={terminal}
            alt="logo"
            className="h-8 w-8 object-contain bg-white p-1 rounded-full"
          />
          <p className="font-bold text-white text-xl">EDS</p>
        </Link>
        {localStorage.getItem("user") ? (
          <img
            src={user}
            alt="profile"
            className="h-8 w-8 object-contain bg-white p-1 rounded-full"
          />
        ) : (
          
          <button onClick={()=>{Navigate("/login")}} className="px-1 py-2 bg-white text-black rounded-xl">Login</button>
          
        )}
      </div>
    </nav>
  );
};

export default Nav;
