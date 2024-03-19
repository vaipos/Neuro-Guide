import React from 'react'
import Treatments from '../NidhiComps/Treatments'
import Comp1 from '../LakshaComps/Comp1'
import Footer from '../NidhiComps/Footer'

const page = () => {
  return (
    <>
    <Comp1/>
    <div className="relative bg-[url('./AboutUsBg.png')] bg-cover bg-no-repeat">
      <Treatments/>
    </div>
    <Footer/>
    </>
  )
}

export default page