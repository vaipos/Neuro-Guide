import React from 'react'
import Link from 'next/link'


const Submit = () => {
  return (
    <>
    <div className="flex justify-center">
        <Link href =  "/TreatmentPage" className=" text-white bg-black  hover:bg-blue-700 transition-colors hover:text-white font-medium py-4 px-10 rounded-2xl text-2xl mb-24 -mt-10" >
            Submit
        </Link>
    </div>

    </>
  )
}

export default Submit