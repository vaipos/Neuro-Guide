import React from 'react';
import Title from './Title';
import StartBtn from '../LakshaComps/StartBtn';
import NavBar from '../LakshaComps/Comp1';

const Background = () => {
  return (
    <>
    <div className=" h-screen">
      <div className=" ">
        <NavBar/>
        <Title/>
        <div className="my-80">
        <StartBtn/>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Background;
