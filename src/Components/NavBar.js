import React, { useState } from 'react';
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="w-screen h-[80px] drop-shadow-lg z-10 bg-zinc-200">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
          <ul className="hidden md:flex text-[18px]">
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platform</li>
              <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
              <button className="border-none bg-transparent text-black mr-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
        </div>
        <div onClick={handleNav} className="md:hidden">
            {nav ? <XIcon className="w-6" /> : <MenuIcon className="w-6" /> }
        
        </div>
      </div>

       <ul className={nav ? "absolute bg-zinc-200 w-full px-8 pb-5" : "hidden"}>
              <li className="border-b-2 border-zinc-300 w-full">Home</li>
              <li className="border-b-2 border-zinc-300 w-full">About</li>
              <li className="border-b-2 border-zinc-300 w-full">Support</li>
              <li className="border-b-2 border-zinc-300 w-full">Platform</li>
              <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
              <div className="flex flex-col">
                <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
                <button className="px-8 py-3">Sign Up</button>
              </div>
       </ul>
      
    </div>
  );
};

export default NavBar;
