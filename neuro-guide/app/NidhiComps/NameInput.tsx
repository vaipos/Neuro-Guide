import React from 'react'

const NameInput = () => {
  return (
    <>
    <div className="flex flex-row justify-center space-x-10 mx-72 ">
        <input className = "bg-lightBeige rounded-xl w-44 h-10 text-black text-center  placeholder-gray-400 text-semibold text-xl"  type="text" placeholder='First Name'/>
        <input className = "bg-lightBeige rounded-xl w-44 h-10 text-black text-center  placeholder-gray-400 text-semibold  text-xl"  type="text" placeholder='Last Name'/>
    </div>
    </>
    )
}

export default NameInput