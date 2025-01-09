import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
    
    const Menu = [
        {
            id: 1,
            name: "Home",
        },
        {
            id: 2,
            name: "Serviços"
        },
        {
            id: 3,
            name: "Sobre"
        }
    ]

  return (
    <div className='abosute top-0 left-0 w-full pt-10 text-[#fff] z-20 bg-dark'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <a href="#" className='text-2xl font-semibold'>
                    <h1><span className='text-primary'>Dev</span> Coffe </h1>
                </a>
                
                <div>
                    <IoIosMenu className='text-3xl cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar