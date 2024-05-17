import React, { useState } from 'react';
import { Navbar, Button, Drawer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaSearch } from 'react-icons/fa'; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
     <Navbar fluid={true} className=" py-3 px-3">
        <div className='fles justify-start'>
          <Link to="/" className="text-3xl mx-4 font-bold text-orange-500 tracking-tight">
            Foodies
          </Link>
        </div>
        <div className='flex-grow flex justify-center'>
           <Link to="/" className="text-orange-500 font-semibold mx-4">
            Home
           </Link>

           <Link to="/about" className='text-orange-500 font-semibold mx-4'>
              About
           </Link>
        </div>
        <div className="flex items-center">
          <FaSearch className="text-black hover:text-orange-500  mx-2" />
          <FaShoppingBasket className="text-black hover:text-orange-500 mx-2" />
          <Link to="/signup" className='hover:text-orange-500 font-semibold mx-4'>
              Sign In
          </Link>
        </div>
      </Navbar>

   
    </>
  );
}

export default Nav;
