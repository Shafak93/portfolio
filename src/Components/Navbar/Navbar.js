import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import { BsFacebook } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
        const [nav, setNav] =useState(false)

    const [open, setOpen] =useState(false)
    const menus =[
        {name:"HOME", link:"/"},
        {name:"ABOUT", link:"/about"},
        {name:"PROJECTS", link:"/projects"},
        {name:"BLOG'S", link:"/blogs"},
        {name:"CONTACT", link:"/contact"},
    ]
    return (

        // <div>

        // </div>
        
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-base-300 py-4 md:px-10 px-7'>
                <div className='logo font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-500'>
                    Mohi U. Shafak
                </div>
                <div onClick={()=>setOpen(!open)} className='absolute right-8 top-5 cursor-pointer md:hidden'>
                    {open ? <AiOutlineClose />:<FaBars /> }
                </div>
                <ul className={`md:flex md:items-center md:h-auto md:pb-0 pb-12 absolute md:static bg-base-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
                    {
                        menus.map( menu =>(
                            <li key={menu.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={menu.link} className='text-gray-500 hover:text-gray-200 duration-500'>{menu.name}</Link>
                                {/* <a href={menu.link} className='text-gray-800 hover:text-gray-400 duration-500'>{menu.name}</a> */}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        /*========================================================
        <div class="navbar bg-base-300 fixed top-0 z-50">
            <div class="navbar-start ">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="font-bold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    
                <li><Link to='/'>HOME</Link> </li>
                <li><Link to='/about'>ABOUT</Link> </li>
                <li><Link to='/projects'>PROJECTS</Link> </li>
                <li><Link to='/blogs'>BLOGS</Link> </li>
                <li><Link to='/contact'>CONTACT</Link> </li>
                </ul>
                </div>
                <a class="logo btn btn-ghost normal-case text-xl">Mohi U. Shafak</a>
            </div>


            <div class="navbar-center hidden lg:flex">
                <ul class="menu font-bold menu-horizontal p-0">
                <li><Link to='/'>HOME</Link> </li>
                <li><Link to='/about'>ABOUT</Link> </li>
                <li><Link to='/projects'>PROJECTS</Link> </li>
                <li><Link to='/blogs'>BLOGS</Link> </li>
                <li><Link to='/contact'>CONTACT</Link> </li>
                </ul>
            </div>
            </div>
           =========================================================== */
    );
};

export default Navbar;