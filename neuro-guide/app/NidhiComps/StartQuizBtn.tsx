'use client'
import React from 'react'
import Link from 'next/link'
import NextAuth, { useSession } from 'next-auth/react'



const StartQuizBtn = () => {
  
  const {status, data: session} = useSession();

  return (
    <>
      <div className="px-56">
        {status === 'unauthenticated' && <Link href= "/api/auth/signin" className=" drop-shadow-md bg-white hover:bg-blue-700 transition-colors text-black hover:text-white font-bold py-3 px-44 rounded-2xl mx-80 text-xl">
        Sign in to Start Quiz
        </Link>  } 
        {status === 'authenticated' && <Link href= "/QuizForm" className=" drop-shadow-md bg-white hover:bg-blue-700 transition-colors text-black hover:text-white font-bold py-3 px-44 rounded-2xl mx-80 text-xl">
        Start Quiz
        </Link>  } 
      </div>
   
    </>

  )
}

export default StartQuizBtn