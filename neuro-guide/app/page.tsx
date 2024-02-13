import Image from 'next/image'
import Background from './NidhiComps/Background'
import NavBar from './LakshaComps/Comp1'
import MissionStmt from './LakshaComps/MissionStmt'
import Footer from './NidhiComps/Footer'
export default function Home() {
  return (
    <>
    <div className="bg-custom">
    <div className="bg-[url('./bg.png')] bg-no-repeat ">
    <Background/>
    <MissionStmt/>
    <Footer/>

    </div>
       
    </div>
   

    </>
 
  )
}
