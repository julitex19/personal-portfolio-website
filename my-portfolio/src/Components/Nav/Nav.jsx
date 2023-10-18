import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';


function Nav() {
    

    const [openMenu, setOpenMenu] = useState(false);

    const toggleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const closeMenu = () => {
        setOpenMenu(false);
    };
    return (
        <>
            <div className='bg-primaryColor justify-between px-36 py-5 hidden lg:flex fixed w-full top-0 z-50'>
                <span className='text-white font-secondaryFont font-bold text-3xl'>
                    Portfo<span className='text-black'>lio.</span>
                </span>
                <ul className=' gap-6 hidden lg:flex'>
                    <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Intro</li>
                    <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >About</li>
                    <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Services</li>
                    <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Skills</li>
                    <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Teams</li>
                    <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Contact</li>
                </ul>
            </div>

            <div className='bg-primaryColor flex justify-between items-center px-5 py-4 lg:hidden fixed w-full top-0 z-10'>
                <span className='text-white font-secondaryFont font-bold text-3xl'>
                    Portfo<span className='text-black'>lio.</span>
                </span>

                {openMenu ? (<FaTimes className='text-white text-2xl' onClick={closeMenu} />) : (
                    <FaBars className='text-white text-2xl' onClick={toggleOpenMenu} />)}
            </div>

            <ul
                className={`${openMenu
                    ? 'left-0 transition-all duration-1000 ease-in transform translate-x-0' : '-left-1/2 transition-all duration-1000 ease-out transform -translate-x-1/2 bg-secondaryColor'} fixed top-0 h-[95vh] w-full  bg-secondaryColor text-white p-4 text-center flex flex-col gap-6 text-2xl lg:hidden`}>

                <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Intro</li>
                <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >About</li>
                <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Services</li>
                <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Skills</li>
                <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Teams</li>
                <li className="text-white hover:underline hover:text-black font-medium" onClick={closeMenu} >Contact</li>
            </ul>
        </>
    )
}

export default Nav
