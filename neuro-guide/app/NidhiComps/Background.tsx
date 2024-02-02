import React from 'react';
import Title from './Title';
import StartBtn from '../LakshaComps/StartBtn';
import NavBar from '../LakshaComps/Comp1';
const Background = () => {
  return (
    <>
    <div className="bg-[url('./bg.png')] bg-cover bg-center h-screen  bg-no-repeat">
      <NavBar/>
      <Title/>
      <StartBtn/>
      </div>
    </>
  );
};

export default Background;
