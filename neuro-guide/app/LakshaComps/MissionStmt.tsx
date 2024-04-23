import Link from 'next/link';
import React from 'react';

const MissionStmt = () => {
  return (
    <div className="relative my-4">
    
      <div className="flex justify-center items-center h-screen">
      <div className="w-4/5 h-2.5/5 lg:max-w-full lg:flex relative z-10 flex justify-center items-center">
          {/*original spot for image div*/}
          <div className="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2) transition: 0.3s width: 40% border-r border-b border-l border-gray-400 lg:border-l-0 
          lg:border-t lg:border-gray-400 bg-white rounded-3xl p-8 flex flex-col justify-between leading-normal drop-shadow-lg">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-3xl mb-2 text-align: left py-10 px-5">MISSION STATEMENT</div>
              <p className="text-gray-900 text-xl px-5 py-3">Our mission is to destigmatize mental health by offering free and accessible AI-driven diagnoses, 
              breaking down barriers to mental healthcare, and empowering individuals to seek support through technology. We believe in promoting mental well-being 
              globally and advocating for equal access to comprehensive mental healthcare for everyone.</p>
            </div>

            <div className="center">
              <Link href = "/AboutUs" className="drop-shadow-lg bg-buttonColor hover:bg-white transition-colors text-white hover:text-black font-bold py-2 px-9 rounded-full 
              my-7 mx-5 text-xl">About Us</Link>
            </div>

          </div>
      </div>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 mb-8 z-20">
        <div className="bg-black text-white py-6 px-24 rounded-xl drop-shadow-md">
          <h2 className="text-xl font-bold">What We Offer</h2>
        </div>
      </div>

    </div>
  );
};

export default MissionStmt;
