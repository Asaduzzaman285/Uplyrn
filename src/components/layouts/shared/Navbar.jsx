/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    const navItems = (
        <div className="uppercase text-xl md:text-2xl flex md:flex-row flex-col items-center gap-5 ">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                <img src="https://s3.ap-southeast-1.amazonaws.com/uplyrn.com/uploads%2F0000%2F1%2F2021%2F02%2F10%2Fuplyrn-logo-reverse.png" alt="logo" className=" w-14 md:w-40" />
            </NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Online Classes
            </NavLink>
        </div>
    );

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 20 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <div>
            <div
                className={`z-30 mb-10 navbar w-full px-10 bg-black  duration-200 transition-all ${
                    isScrolled ? 'ease-out fixed bg-opacity-100 mx-auto bg-black' : 'fixed  bg-black py-3 ease-in bg-opacity-30'
                }`}>
                <div className="navbar-start">
                    <div className="dropdown bg-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-72 bg-black">
                            {navItems}
                            <div className="mx-4 flex flex-col items-center gap-4">
                                <Link to="/" className="text-2xl text-white">
                                    Teach/Coach/Mentor
                                </Link>
                                <button type="button" className="btn btn-primary bg-orange-500 rounded-full border-none text-white tracking-widest font-bold text-xl">
                                    Login/Sign Up
                                </button>
                            </div>
                            <div>
                                <label htmlFor="themeToggle" className="swap swap-rotate">
                                    <input type="checkbox" id="themeToggle" checked={theme === 'dark' ? 'light' : 'dark'} onChange={toggleTheme} className="hidden" />

                                    {/* sun icon */}
                                    <svg className={`swap-on fill-current w-10 h-10 ${theme === 'dark' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>

                                    {/* moon icon */}

                                    <svg className={`swap-on fill-current w-10 h-10 ${theme === 'light' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </div>
                        </ul>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1">{navItems}</ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div className="mx-4 flex items-center gap-4">
                        <Link to="/" className="text-2xl text-white">
                            Teach/Coach/Mentor
                        </Link>
                        <button type="button" className="btn btn-primary bg-orange-500 rounded-full border-none text-white tracking-widest font-bold text-xl">
                            Login/Sign Up
                        </button>
                    </div>
                    <div>
                        <label htmlFor="themeToggle" className="swap swap-rotate">
                            <input type="checkbox" id="themeToggle" checked={theme === 'dark' ? 'light' : 'dark'} onChange={toggleTheme} className="hidden" />

                            {/* sun icon */}
                            <svg className={`swap-on fill-current w-10 h-10 ${theme === 'dark' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}

                            <svg className={`swap-on fill-current w-10 h-10 ${theme === 'light' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
