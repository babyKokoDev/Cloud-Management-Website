import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const handleClose = () => {
      setNav(!nav)
    }

    const handleColor = () => {
      if (window.scrollY >= 90){
        setColor(true)
      }else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', handleColor)

  return (
    <div className={color? "w-full h-[80px] drop-shadow-lg z-10 bg-slate-800 text-white fixed" : "w-full h-[80px] drop-shadow-lg z-10 bg-zinc-200 fixed"}>
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
          <ul className="hidden md:flex text-[18px]">
          <li className='cursor-pointer hover:text-slate-500'><Link to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
          <li className='cursor-pointer hover:text-slate-500'><Link to="about" smooth={true} offset={50} duration={500}>About</Link></li>
          <li className='cursor-pointer hover:text-slate-500'><Link to="support" smooth={true} offset={50} duration={500}>Support</Link></li>
          <li className='cursor-pointer hover:text-slate-500'><Link to="allinone" smooth={true} offset={50} duration={500}>Platform</Link></li>
          <li className='cursor-pointer hover:text-slate-500'><Link to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
              <button className="border-none bg-transparent text-black mr-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
            {nav ? <XIcon className="w-6" /> : <MenuIcon className="w-6" /> }
        </div>
      </div>

       <ul className={nav ? " absolute bg-zinc-200 w-full px-8 pb-5" : "hidden"}>

       <li className='cursor-pointer hover:text-slate-500 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
          <li className='cursor-pointer hover:text-slate-500 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={50} duration={500}>About</Link></li>
          <li className='cursor-pointer hover:text-slate-500 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={50} duration={500}>Support</Link></li>
          <li className='cursor-pointer hover:text-slate-500 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="allinone" smooth={true} offset={50} duration={500}>Platform</Link></li>
          <li className='cursor-pointer hover:text-slate-500 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
              <div className="flex flex-col">
                <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
                <button className="px-8 py-3">Sign Up</button>
              </div>
       </ul>
      
    </div>
  );
};

export default NavBar;
