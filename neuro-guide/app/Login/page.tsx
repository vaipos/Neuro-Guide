import React from 'react'
import NavBar from '../LakshaComps/Comp1'
import Footer from '../NidhiComps/Footer'
import LoginText from '../NidhiComps/Logintxt'
import SignInBtn from '../NidhiComps/SignInBtn'
import RegisterBtn from '../NidhiComps/RegisterBtn'
import SignUpForm from '../NidhiComps/SignUpForm'

const page = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-[url('./LoginBG.png')] bg-cover bg-no-repeat ">
      <LoginText/>
      <div className="absolute bottom-72 right-36 ">
        <SignUpForm/>
        <div className="flex justify-center space-x-10">
          <SignInBtn/>
          <RegisterBtn/>
        </div>
        <div className="font-light text-xl text-center mt-6">Forgot Your Password?</div>
        <div className="font-light text-xl text-center -mt-4">_______________________</div>
      </div>
    </div>
    <Footer/>
    </>

  )
}

export default page