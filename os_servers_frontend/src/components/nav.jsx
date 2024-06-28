import React from "react";
import { styles } from "../style";
import { terminal ,git } from "../assets";
import {Link, useNavigate} from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-1   bg-[#000000f0] fixed  pattern t-0 z-10 pattern`}
    >
      <div className="flex w-full items-center justify-between xl:mx-40  lg:mx-32  md:mx-20   ">
        <Link className="items-center flex gap-2" to="/" onClick={() => {
          XMLDocument(0,0)
        }}>
          <img
            src={terminal}
            alt="logo"
            className="h-8 w-8 object-contain rounded-sm bg-balck  "
          />
          <p className="font-bold text-white text-xl">EDS</p>
        </Link>
        {localStorage.getItem("acessToken") ? (
          <></>
          
        ) : (
          
          <button onClick={()=>{Navigate("/login")}} className="px-2 py-1 m-1  cursor-pointer flex justify-between
            opacity-85 hover:opacity-100 items-center  text-white   rounded-sm bg-[#121212] border "> 
          <img src={git} alt="login with git hub " width="25px" className="pr-1 " />
          Login</button>
          
        )}
        
        
      </div>
      
    </nav>
  );
};

export default Nav
