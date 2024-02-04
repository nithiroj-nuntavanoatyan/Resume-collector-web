// import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { LuMenuSquare } from "react-icons/lu";
import { useState } from "react";
import logo from '../images/Resume-collector-logo.png'

function Navbar() {

    //function for make the menu appear when size is small
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = true
    }
    

    return (
        <nav className="navbar bg-[#2B5E53] h-auto w-full sticky top-0 ">
            <div className="flex justify-between items-center h-auto px-3 py-4">
                <div className="title flex justify-center items-center text-lg sm:text-4xl lg:text-5xl font-black text-[#ffffff] uppercase">
                    <Link to="/Home">
                        <img src={logo} className="hidden sm:flex sm:w-16 " alt="Logo" />
                    </Link>
                    <Link to="/Home">ResumeCollector</Link>
                </div>


                {/* Menubutton */}
                <div className="button xl:hidden" onClick={toggleMenu}>
                    <LuMenuSquare size={45} color="white" />
                </div>

                <ul className="nav-items text-xl font-bold text-[#E3F2EF] hidden xl:flex uppercase ">
                    <li><NavLink to="/Home"><span className="flex items-center"><FaHome className="mr-2" />Home</span></NavLink></li>
                    <li><NavLink to="/Search"><span className="flex items-center"><IoMdSearch className="mr-2" />Search</span></NavLink></li>
                    <li><NavLink to="/Resume"><span className="flex items-center"><BsPersonVcardFill className="mr-2" />Resume</span></NavLink></li>
                    <li><NavLink to="/Favorites"><span className="flex items-center"><MdOutlineFavorite className="mr-2" />Favorites</span></NavLink></li>
                    <li><NavLink to="/AboutUs"><span className="flex items-center"><HiUserGroup className="mr-2" />About Us</span></NavLink></li>
                    <li><NavLink to="/Account"><span className="flex items-center"><FaUserCircle className="mr-2" />Account</span></NavLink></li>
                </ul>
            </div>

            {/* Other device */}
            {isMenuOpen ? (
                <ul className="nav-items-responsive text-xl font-bold text-[#E3F2EF] flex-col xl:hidden uppercase ">
                    <li className="py-1.5"><NavLink to="/Home"><span className="flex items-center"><FaHome className="mr-2" />Home</span></NavLink></li>
                    <li className="py-1.5"><NavLink to="/Search"><span className="flex items-center"><IoMdSearch className="mr-2" />Search</span></NavLink></li>
                    <li className="py-1.5"><NavLink to="/Resume"><span className="flex items-center"><BsPersonVcardFill className="mr-2" />Resume</span></NavLink></li>
                    <li className="py-1.5"><NavLink to="/Favorites"><span className="flex items-center"><MdOutlineFavorite className="mr-2" />Favorites</span></NavLink></li>
                    <li className="py-1.5"><NavLink to="/AboutUs"><span className="flex items-center"><HiUserGroup className="mr-2" />About Us</span></NavLink></li>
                    <li className="py-1.5"><NavLink to="/Account"><span className="flex items-center"><FaUserCircle className="mr-2" />Account</span></NavLink></li>
                </ul>
            ) : null}
        </nav>
    )
}

export default Navbar