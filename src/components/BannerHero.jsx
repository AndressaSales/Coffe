import React from 'react'
import coffe from "../assets/coffee2.png"

const BannerHero = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-[#fff]'>
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                    <h1 data-aos="fade-up" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                        Servimos o <span className='bg-clip-text text-transparent bg-gradient-to-b from-primary'>Café</span> mais rico
                    </h1>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-[#fff] py-2 px-4 rounded-full'>
                            Café e Código
                        </button>
                    </div>
                </div>
                 <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                    <img src={coffe} alt="" className='w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin' />
                    <div className='bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10'>
                        <h1 className='text-[#fff]'>Olá, cafezistas</h1>
                    </div>
                    <div className='bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10'>
                        <h1 className='text-[#fff]'>Melhor Café</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerHero