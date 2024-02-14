import React from 'react'
import NavBar from '../LakshaComps/Comp1'
import Footer from '../NidhiComps/Footer'
import NameInput from '../NidhiComps/NameInput'
import SignUpForm from '../NidhiComps/SignUpForm'
import CreateAcc from '../NidhiComps/CreateAcc'
const page = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-custom py-36">
        <div className="relative bg-[url('./registerbg.png')] bg-cover bg-no-repeat rounded-3xl bottom-12 mx-32">
          <button className="absolute -top-10 left-64 mx-60 rounded-2xl py-4 px-12 text-5xl">Register</button>
          <div className = "relative -top-11 py-32 ">
            <NameInput/>
          </div>
          <div className="relative bottom-32 mx-96 ">
            <SignUpForm/>
          </div>
          <div className="relative bottom-28 left-96">
            <CreateAcc/>
          </div>
          
        </div>
    
    </div>
    <Footer/>
    </>

  )
}

export default page