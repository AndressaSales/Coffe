import React from 'react'
import cappuccino from "../assets/coffee1.png"
import coffe from "../assets/coffee3.png"
import coffeIce from "../assets/coffee1.png"

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
        <div className=''>
            <div className='container my-16 space-y-4'>
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>O Melhor <span className='text-primary'>Café </span> Para Você</h1>
                    <p className='pt-3 font-semibold text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam aperiam, corrupti tenetur asperiores, animi ea fuga sequi eos amet dolor, optio illo incidunt mollitia nostrum dolorem soluta alias vitae.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8' style={{opacity: 1}}>
                    {services.map((service) => {
                        return(
                            <div className='text-center p-4 space-y-6' style={{opacity: 1, transform: 'none'}}>
                               
                                <img src={service.url} alt="" className='max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer img-shadow' />
                                <div className='space-y-2'>
                                    <h1 className='text-2xl text-primary font-bold'>{service.name}</h1>
                                    <p className='text-darkGray'>{service.despription}</p>
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