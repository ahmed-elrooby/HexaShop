"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import DarkMode from '../DarkMode/DarkMode';
import { AlignJustify, X } from 'lucide-react';
import { motion } from 'framer-motion';
const lobster = Dancing_Script({ subsets: ['latin'] });

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = ()=>{
        setIsOpen(!isOpen)
    }
  return <>
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
  <Link className={`font-extrabold text-[30px] text-[--primary] ${lobster.className}`} href="/">
            HEXASHOPE
          </Link>
           
  <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
  <DarkMode  />
      <button onClick={()=> handleMenu()} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="transition-all sr-only">Open main menu</span>
        {isOpen?<motion.div
        initial={{rotate:0}}
        animate={{rotate:180}}
        transition={{duration:0.3}}
        ><X size={32} color='#00BFA6'/></motion.div>:<AlignJustify color='#00BFA6' size={32} />}
    </button>
  </div>
  <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}
            id="navbar-cta"
          >    <ul className={`flex flex-col items-start p-4 mt-4 font-medium   border border-gray-100 rounded-lg ${isOpen?'bg-gradient-to-t from-[--primary] to-gray-400':'bg-white'} md:items-center md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
     
     
     
      <li className="w-fit"></li>
     
      <li>
      <Link href="/" className="block px-3 py-2 font-bold md:text-[--primary] transition-all rounded md:p-0 md:bg-transparent " aria-current="page">Home</Link>
    </li>
    <li>
      <Link href="/Contact" className="block px-3 py-2 font-bold md:text-[--primary] transition-all rounded md:p-0 md:bg-transparent " aria-current="page">Contact</Link>
    </li>
    <li>
      <Link href="/Blogs" className="block px-3 py-2 font-bold md:text-[--primary] transition-all rounded md:p-0 md:bg-transparent " aria-current="page">Blogs</Link>
    </li>
    <li>
      <Link href="/About" className="block px-3 py-2 font-bold md:text-[--primary] transition-all rounded md:p-0 md:bg-transparent " aria-current="page">About</Link>
    </li>

    </ul>
  </div>
  </div>
</nav>
  </>
}

export default Navbar

