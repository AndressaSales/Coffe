import React from 'react'
import banner from "../assets/banner.png"
import { GrSecure } from 'react-icons/gr'
const Banner = () => {
  return (
    <>
        <span id='about'></span>
        <div className='py-24 bg-dark'>
            <div className='relative max-w-7xl mx-auto md:rounded-2xl bg-cover h-[550px] md:h-[600px]' style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
                <div className='absolute inset-0 bg-primary bg-opacity-50 md:rounded-2xl flex flex-col items-center justify-center'>
                    <div className='text-[#fff] justify-center items-center text-center px-4'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold  mb-4'>Café Premium Blend</h1>
                        <p className='text-sm text-dark tracking-wide leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque incidunt rerum eius voluptatem voluptatibus laborum velit labore totam. Debitis eveniet, cum ipsam dolorum accusantium quam voluptatem obcaecati quo distinctio fugiat!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner