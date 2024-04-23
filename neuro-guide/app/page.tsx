import Image from 'next/image'
import Background from './NidhiComps/Background'
import NavBar from './LakshaComps/Comp1'
import MissionStmt from './LakshaComps/MissionStmt'
import Footer from './NidhiComps/Footer'
import StepsCards from './LakshaComps/StepsCards'
import ScrollIcon from './LakshaComps/ScrollIcon'
export default function Home() {
  return (
    <>

    <div className="bg-[url('./bg.png')] bg-no-repeat bg-custom w-screen">
    <Background/>
    <MissionStmt/>
    <StepsCards/>
    </div>
    <Footer/>
   

    </>
 
  )
}
