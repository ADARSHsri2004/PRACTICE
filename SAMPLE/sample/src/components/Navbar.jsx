import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white w-full">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Brand Logo */}
                <div className="text-xl font-bold">
                    <a href="#">BrandLogo</a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400">About</a></li>
                    <li><a href="#" className="hover:text-gray-400">Services</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-gray-700 text-white space-y-4 p-4">
                    <li><a href="#" className="block hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="block hover:text-gray-400">About</a></li>
                    <li><a href="#" className="block hover:text-gray-400">Services</a></li>
                    <li><a href="#" className="block hover:text-gray-400">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
