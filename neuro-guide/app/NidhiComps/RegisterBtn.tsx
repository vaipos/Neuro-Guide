import Link from 'next/link'
import React from 'react'

const RegisterBtn = () => {
  return (
    <Link href = "/Register"className=" text-white bg-black  hover:bg-blue-700 transition-colors hover:text-white font-medium py-2 px-12 rounded-2xl text-xl">
    Register
    </Link>  
  )
}

export default RegisterBtn