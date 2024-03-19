import React from 'react'
import Treatments from '../NidhiComps/Treatments'
import Comp1 from '../LakshaComps/Comp1'
import Footer from '../NidhiComps/Footer'

const page = () => {
  return (
    <>
    <div className="relative bg-[url('./AboutUsBg.png')] bg-contain bg-no-repeat">
      <Comp1/>
      <Treatments/>
    </div>
    <Footer/>
    </>
  )
}

export default page