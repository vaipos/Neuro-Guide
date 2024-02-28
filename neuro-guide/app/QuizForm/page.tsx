import React from 'react'
import NavBar from '../LakshaComps/Comp1'
import Footer from '../NidhiComps/Footer'
import ProgressBar from '../NidhiComps/ProgressBar'
import Questions from '../NidhiComps/Questions'
import Submit from '../NidhiComps/Submit'

const page = () => {
  return (
    <>
    <div className="bg-custom">
        <div className="bg-[url('./QuizBan.png')] bg-cover bg-no-repeat ">
            <NavBar/>
            <div className="py-20 text-5xl text-center">Mental Health Diagnosis Quiz</div>
            <ProgressBar percentage={45} />
            <div className='py-12'></div>
        </div>
        <Questions/>
        <div className = 'py-2'></div>
        <Submit/>
    </div>
   <Footer/>

    </>
  )
}

export default page