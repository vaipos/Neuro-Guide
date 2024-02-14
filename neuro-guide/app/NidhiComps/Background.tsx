import React from 'react';
import Title from './Title';
import StartBtn from '../LakshaComps/StartBtn';
import NavBar from '../LakshaComps/Comp1';

const Background = () => {
  return (
    <>
    <div className="relative w-screen h-screen">
      <div className=" ">
        <NavBar/>
        <Title/>
    
      </div>
    </div>
    </>
  );
};

export default Background;
