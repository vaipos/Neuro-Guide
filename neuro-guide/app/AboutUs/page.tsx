import Image from 'next/image'
import NavBar from '../LakshaComps/Comp1'
import Footer from '../NidhiComps/Footer'
import Header from '../NidhiComps/Header'
import Bio from '../NidhiComps/Bio'
export default function Home() {
  return (
    <>
    <div className="bg-[url('./AboutUsBg.png')] bg-cover bg-no-repeat ">
        <NavBar/>
        <Header/>
    </div>
    <Bio/>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-black"></hr>
    <Footer/>
    </>
    
  )
}
