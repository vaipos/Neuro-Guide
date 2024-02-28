import React from 'react'
import NavBar from '../LakshaComps/Comp1'
import Footer from '../NidhiComps/Footer'
import QuizText from '../NidhiComps/QuizText'
import StartQuizBtn from '../NidhiComps/StartQuizBtn'
const page = () => {
  return (
    <>
    <div className = "bg-custom">
    <NavBar/>
    </div>
    <div className="bg-[url('./quizpgbg.png')] bg-cover bg-no-repeat" >
        <QuizText/>
    </div>
    <Footer/>
    </>
  )
}

export default page