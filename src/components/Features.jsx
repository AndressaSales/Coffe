import React from 'react'
import { GiFoodTruck } from 'react-icons/gi'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'

const Features = () => {

  const features = [
    {
      id: 1,
      icon: <GrSecure />,
      text: "Café Premium"
    },
    {
      id: 2,
      icon: <IoFastFood />,
      text: "Café Quente"
    },
    {
      id: 3,
      icon: <GiFoodTruck />,
      text: "Café Frio"
    }
  ]

  return (
    <div className='bg-light py-8 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-y-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-8'>
          {
            features.map((feature) => {
              return <div key={feature.id} className='flex items-center justify-center sm:text-left'>
                  <div className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200'>{feature.icon}</div>
                  <span>{feature.text}</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Features