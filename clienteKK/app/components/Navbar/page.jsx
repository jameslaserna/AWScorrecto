"use client"; // Esto debe ser la primera línea del archivo

import React, { useState } from 'react';
import Link from 'next/link';
import { SlArrowDown } from "react-icons/sl";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLangToggle = () => {
    setLangOpen(prev => !prev); // Cambia el estado de isLangOpen
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-4 bg-white'>
      <div>
        <h1 className='text-start text-black uppercase text-3xl font-bold flex flex-row'>
          future 
          <p className='text-yellow-600 text-sm'>
            阿阿阿
          </p>
        </h1>
      </div>
      <nav className='relative'>
        <div className='hidden md:flex space-x-6'>
          <Link href="/" className='text-black hover:text-yellow-600'>HOME</Link>
          <Link href="/menu" className='text-black hover:text-yellow-600'>MENU</Link>
          <Link href="/location" className='text-black hover:text-yellow-600'>LOCATION</Link>
          <Link href="/member" className='text-black hover:text-yellow-600'>MEMBER</Link>
          <Link href="/carrier" className='text-black hover:text-yellow-600'>CARRIER</Link>
          <div className='relative'>
            <button className='flex items-center border border-gray-300 bg-white hover:bg-yellow-600 rounded w-20 h-8' onClick={handleLangToggle}>
              <div className='text-black flex items-center ml-2'>              
                ENG
                <SlArrowDown className='w-3 h-3 ml-3'/>
              </div>
            </button>
            {/* Selector de idiomas */}
            {isLangOpen && (
              <ul className='absolute left-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg z-10'>
                <li className='flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer'>PE</li>
                <li className='flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer'>ARG</li>
                <li className='flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer'>BR</li>
              </ul>
            )}
          </div>
        </div>
        {/* Botón de menú hamburguesa */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className='w-6 h-6 text-black' /> : <HiMenu className='w-6 h-6 text-black' />}
          </button>
        </div>
        {/* Menú móvil */}
        {isOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10'>
            <div className='flex flex-col'>
              <Link href="/" className='block px-4 py-2 text-black hover:bg-gray-100'>HOME</Link>
              <Link href="/menu" className='block px-4 py-2 text-black hover:bg-gray-100'>MENU</Link>
              <Link href="/location" className='block px-4 py-2 text-black hover:bg-gray-100'>LOCATION</Link>
              <Link href="/member" className='block px-4 py-2 text-black hover:bg-gray-100'>MEMBER</Link>
              <Link href="/carrier" className='block px-4 py-2 text-black hover:bg-gray-100'>CARRIER</Link>
              <div className='relative'>
                <button
                  className='flex items-center border border-gray-300 bg-white hover:bg-yellow-600 rounded w-full p-2'
                  onClick={handleLangToggle}
                >
                  <p>ENG</p>
                  <SlArrowDown className='w-3 h-3 ml-3'/>
                </button>
                {isLangOpen && (
                  <ul className="mt-2 border border-gray-300 rounded bg-white">
                    <li className='flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer'>PE</li>
                    <li className='flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer'>ARG</li>
                    <li className='flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer'>BR</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;