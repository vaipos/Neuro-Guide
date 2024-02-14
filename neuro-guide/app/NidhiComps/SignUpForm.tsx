import React from 'react'

const SignUpForm = () => {
  return (
   <>
    <div className="flex flex-col justify-between">
        <input className = "bg-lightBeige rounded-xl py-2 px-3 text-black placeholder-gray-400 font-normal text-xl"  type="text" placeholder='Email'/>
        <input className = "bg-lightBeige rounded-xl py-2 px-3 text-black  placeholder-gray-400 font-normal text-xl my-8"  type="text" placeholder='Password'/>
    </div>
      
   </>
  )
}

export default SignUpForm