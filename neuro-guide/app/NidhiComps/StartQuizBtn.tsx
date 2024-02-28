import React from 'react'
import Link from 'next/link'


const StartQuizBtn = () => {
  return (
    <>
      <div className="px-56">
        <Link href= "/QuizForm" className=" drop-shadow-md bg-white hover:bg-blue-700 transition-colors text-black hover:text-white font-bold py-3 px-44 rounded-2xl mx-80 text-xl">
        Start
        </Link> 
      </div>
   
    </>

  )
}

export default StartQuizBtn