import React, { ReactNode } from 'react'
interface props{
  percentage: ReactNode 
}

const ProgressBar = ({percentage}: props) => {
  return (
    <>
    <div className='bg-white rounded-2xl h-16 mx-96 bg-opacity-60  flex justify-center'>
        <div className="text-2xl font-medium text-black  mt-4 px-5">
            {percentage}%
        </div>
        <div className="bg-white rounded-full h-5 w-full my-5 mx-3 z-0">
            <div className="bg-progBar rounded-full h-5 z-50" style={{ width: `${percentage}%` }}>

            </div>
        </div>
    </div>
    </>
  )
}

export default ProgressBar