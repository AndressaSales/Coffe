import React from 'react'
import cappuccino from "../assets/cappuccino.png"
import coffe from "../assets/coffe.png"
import coffeIce from "../assets/coffeIce.png"

const Services = () => {

    const services = [
        {
            id: 1,
            name: "Cappuccino",
            url: cappuccino,
            despription: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet"
        },
        {
            id: 2,
            name: "Café",
            url: coffe,
            despription: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet"
        },
        {
            id: 3,
            name: "Café Gelado",
            url: coffeIce,
            despription: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet"
        }
    ]

  return (
    <>
      <span id='services'></span>
        <div className='py-10 bg-light'>
            <div className='container'>
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>O Melhor Café Para Você</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {services.map((service) => {
                        return(
                            <div className='rounded-2xl relative shadow-xl duration-high group max-w-[300px]'>
                                <div className='h-[122px]'>
                                    <img src={service.url} alt="" className='max-w-[200px] group-hover:rolate-6 duration-300' />
                                </div>
                                <div className='p-4 text-center'>
                                    <div className='w-full'></div>
                                    <h1 className='text-xl font-bold'>{service.name}</h1>
                                    <p className='text-gray-500 group-hover:text-[#fff] duration-high text-sm line-clamp-2'>{service.despription}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Services