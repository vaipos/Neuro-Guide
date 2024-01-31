import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <>
        <div className="px-5 py-8 flex justify-between mx-4 ">
        <Link href='/' className='font-bold text-xl'>NeuroGuide</Link> 
        <div className="flex ">
        <Link href='/' className='px-10 text'>quiz</Link> 
        <Link href='/' className='px-10 text'>chat</Link> 
        <Link href='/' className='px-10 text'>about us</Link> 
        <Link href='/'><svg className="h-6 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg></Link>
        </div>
        
        </div>
        
        </>  
      )
}




export default NavBar