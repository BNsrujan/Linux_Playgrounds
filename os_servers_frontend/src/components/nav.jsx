import React, { useState } from 'react'
import { styles } from '../style';
import { terminal ,user} from '../assets';
import { Link } from 'react-router-dom';


const Nav = () => {

  return (
    <nav className={`${styles.paddingX} w-full flex  items-center py-2 fixed  bg-[#000000] pattern  t-0 z-10 pattern`  }>
       <div className='flex w-full items-center justify-between max-w-7xl mx-auto'>
        <Link className="items-center flex gap-2"
        to="/"
        onClick={()=>{
        }}
        >
        <img src={terminal} alt='logo' className='h-8 w-8 object-contain bg-white p-1 rounded-full'/>
        <p className='text-blck  font-bold text-white text-xl'>EDS</p>
        </Link>

        <img src={user} alt='profile' className='h-8 w-8 object-contain bg-white p-1 rounded-full'/>
         </div>
    </nav>
  )
}

export default Nav;