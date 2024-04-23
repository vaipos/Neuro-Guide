import Link from 'next/link'
import React from 'react'

const StartBtn = () => {
  return (
    <Link href = "/Quiz" className=" drop-shadow-md bg-white hover:bg-blue-700 transition-colors text-black hover:text-white font-bold py-3 px-12 rounded-full my-80 mx-20 text-lg">
  Start Here
</Link>
  )
}

export default StartBtn