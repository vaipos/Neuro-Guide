import React from 'react';

const StepsCards = () => {
  return (
    <>

    <div className="absolute flex justify-center items-center h-screen bg-white">
      <div className="w-3/5 h-3/5 lg:max-w-full lg:flex relative z-10 flex justify-center items-center drop-shadow-lg">
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}></div>
      </div>
   </div>

    <div className="relative mx-16 py-24">

    <div className="card w-2/5 h-96 bg-neutral rounded-2xl px-10 py-5 drop-shadow-lg relative z-10" style={{ left: 'calc(100% - 42rem)' }}>
      <div className="card-body py-12">
        <h5 className="card-title text-right text-2xl text-black font-medium">Quiz Time</h5>
        <p className="card-text text-right text-black py-8 my-4">Determine your mental health status with our concise quiz, offering valuable insights into your emotional well-being and guiding you towards necessary support and resources.</p>
        <a href="#" className="btn btn-primary drop-shadow-xl bg-black hover:bg-white rounded-full py-3 px-6 text-center text-white  hover:text-black">Start Here</a>
      </div>
    </div>

  

    <div className="card-container flex flex-col justify-between">
      <div className="card w-2/5 h-96 bg-neutral rounded-2xl px-10 py-4 drop-shadow-lg relative my-48" style={{ left: 'calc(100% - 85rem)' }}>
      <div className="card-body py-12">
        <h5 className="card-title text-left text-2xl text-black font-medium">Get Diagnosed</h5>
        <p className="card-text text-left text-black py-5 my-4">Gain clarity and validation about your mental health by obtaining a diagnosis through a quick mental health quiz. Take control of your well-being and access tailored resources to support your journey towards a happier, healthier life.</p>
        <div className="flex justify-end">
        <a href="#" className="btn btn-primary drop-shadow-xl bg-black hover:bg-white rounded-full py-3 px-6 text-center text-white hover:text-black">Start Here</a>
      </div>
      </div>
      </div>
    </div>

    <div className="card w-2/5 h-96 bg-neutral rounded-2xl px-10 py-5 drop-shadow-lg relative " style={{ left: 'calc(100% - 42rem)' }}>
      <div className="card-body py-12">
        <h5 className="card-title text-right text-2xl text-black font-medium">Treatments & Help</h5>
        <p className="card-text text-right text-black py-8 my-4">After receiving a diagnosis, users can access a comprehensive list of resources and engage in supportive conversations with a chatbot tailored to their mental health needs.</p>
      </div>
    </div>
    
    </div>
    
    </>
  );
};

export default StepsCards;
