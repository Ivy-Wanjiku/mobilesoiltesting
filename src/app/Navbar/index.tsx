"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md h-28 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-0 mt-20"> 
            <Image 
              src="/media/logo.png" 
              alt="Fanikisha" 
              width={150} 
              height={80} 
              className="object-contain mb-11 mr-56" 
            />
          </div>
          <div className="hidden md:flex items-center -ml-20 mt-10 space-x-8 text-lg md:text-xl lg:text-3xl">
            <Link href="#homepage" className="py-4 text-black hover:text-blue-500">Home</Link>
            <Link href="#aboutus" className="py-4 text-black hover:text-blue-500">About Us</Link>
            <Link href="#product" className="py-4 text-black hover:text-blue-500">Product</Link>
            <Link href="#services" className="py-4 text-black hover:text-blue-500">Services</Link>
            <Link href="#contact" className="py-4 text-black hover:text-blue-500">Contact Us</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              <HiMenu className="w-8 h-8 text-gray-500 hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center justify-center h-full relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
          >
            <HiX className="w-8 h-8" />
          </button>
          <Link href="#homepage" className="py-4 text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#aboutus" className="py-4 text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="#product" className="py-4 text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Product</Link>
          <Link href="#services" className="py-4 text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#contact" className="py-4 text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
