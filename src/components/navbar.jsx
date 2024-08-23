import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import NavbarLinks from './navbarlinks';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(open => !open);
    console.log(isOpen)
  }
  return (
    <div className='fixed top-0 left-0 z-50 w-screen px-4 md:px-8 xl:px-[10vw] bg-gray-50' style={{ boxShadow: '0 1px 4px rgba(255, 255, 255, 0.2)' }}>
      <div className='mx-auto max-w-full py-4'>
        <div className='flex flex-wrap justify-between items-center'>
        <h1 className="text-lg md:text-xl text-gray-600">{"{developedbysaheb}"}</h1>
          <IoIosMenu className='h-8 w-8 text-3xl font-bold md:hidden'
            onClick={toggleOpen}
          />
          <NavbarLinks extraClassNames='hidden' toggleOpen={() => {}} />
        </div>
        <div className={`transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
          {isOpen && <NavbarLinks extraClassNames='flex flex-col text-center mt-3' toggleOpen={toggleOpen} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
