import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-[#fff]'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-6" style={{opacity: 1, transform: 'none'}}>
                    <h1 className='text-3xl font-bold uppercase'>dev coffe</h1>
                    <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat alias adipisci deleniti, facilis nemo aliquid? Pariatur, molestiae porro. Ullam inventore sint ipsam repudiandae, voluptates excepturi velit natus iste sapiente dignissimos.</p>
                    <div>
                       <p className='flex items-center gap-2'>
                            <BsFillTelephoneFill /> (81) 9 0011-1111
                       </p>
                       <p className='flex items-center gap-2 mt-2'>
                           <FaMapLocationDot />  Rua Das Calçadas, N° 2025
                       </p>
                    </div>
                </div>
                <div className="space-y-6" style={{opacity: 1, transform: 'none'}}>
                    <h1 className='text-3xl font-bold'>Links Rápidos</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>Sobre</li>
                                <li>Contatos</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>Sobre</li>
                                <li>Contatos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-6" style={{opacity: 1, transform: 'none'}}>
                    <h1 className='text-3xl font-bold'>Siga-nos</h1>
                    <div className='flex items-center gap-3'>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                        <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                        <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                        <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                    </div>
                </div>
            </div>
            <p className='text-[#fff] text-center mt-8 pt-8 border-t-2'> &copy;{new Date().getFullYear()} <span className='uppercase'>dev coffe</span> Todos os direitos reservados.</p>
        </div>
    </div>
  )
}

export default Footer