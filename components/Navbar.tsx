import React from "react";
import NavbarItem from '../components/NavbarItem';

const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        
                <img className="h-10" src="/images/Flicks-logo.png" alt="Logo" />
        
                {/* Ensure items are flex-row and visible on all screen sizes */}
                <div className="flex flex-row ml-8 gap-10 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by languages" />
                </div>
                <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
