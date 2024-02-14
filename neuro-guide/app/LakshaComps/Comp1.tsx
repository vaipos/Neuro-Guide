import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <>
        <div className="px-5 py-8 flex justify-between mx-4 ">
        <Link href='/' className='font-bold text-2xl'>NeuroGuide</Link> 
        <div className="flex ">
        <Link href='/Quiz' className='px-10 text-lg'>quiz</Link> 
        <Link href='/Register' className='px-10 text-lg'>chat</Link> 
        <Link href='/AboutUs' className='px-10 text-lg'>about us</Link> 
        <Link href='/Login'><svg className="h-7 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg></Link>
        </div>
        
        </div>
        
        </>  
      )
}




export default NavBar