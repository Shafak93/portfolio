import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Skill</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Portfolio</a>
            </div>


            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Skill</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Facebook</a></li>
                     <li><a>Linkedin</a></li>
                    <li><a>Twitter</a></li>
                </ul>
            </div>
            </div>
        // <div class="flex justify-around navbar bg-base-100">
        //     <div>
        //         <a class="btn btn-ghost normal-case text-xl">Portfolio</a>
        //     </div>
        //     <div>
        //         <ul class="menu menu-horizontal p-0">
        //         <li><a>Home</a></li>
        //         <li><a>About</a></li>
        //         <li><a>Skill</a></li>
        //         <li><a>Projects</a></li>
        //         <li><a>Contact</a></li>
        //         </ul>
        //     </div>
        //     <div>
        //         <ul class="menu menu-horizontal p-0">
        //             <li><a>Facebook</a></li>
        //             <li><a>Linkedin</a></li>
        //             <li><a>Twitter</a></li>
        //         </ul>
        //     </div>
        // </div>
    );
};

export default Navbar;