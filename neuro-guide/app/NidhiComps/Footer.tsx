import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className="bg-white flex justify-between px-12 py-8 ">
        <Link href='/' className='font-bold text-2xl'>NeuroGuide</Link>
        <div className = 'font-bold flex flex-col'>About Neuroguide
        <Link href='/AboutUs'  className = 'font-normal'>About us</Link>
        <Link href='/'  className = 'font-normal'>Contact</Link>
        </div>
        <div className = 'font-bold flex flex-col'>Products
        <Link href='/Quiz'  className = 'font-normal'>Quiz</Link>
        <Link href='//Login'  className = 'font-normal'>Chatbot</Link>
        </div>
    </div>
  )
}

export default Footer