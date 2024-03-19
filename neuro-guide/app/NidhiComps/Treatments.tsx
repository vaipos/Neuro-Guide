import React from 'react'

const Treatments = () => {
  return ( 
    <>
    <div className="text-4xl mx-24 mt-28 mb-4">Diagnostic Results</div>
    <div className="mx-24 my- text-6xl font-bold">Anxiety Disorder</div>
  
    <div className="relative left-2/3 top-24 mb-36 card w-96 h-96 bg-black rounded-2xl px-10 py-5 drop-shadow-lg">
      <div className="card-body py-12">
        <h5 className="card-title text-left text-3xl text-white font-semibold">Percents:</h5>
        <p className="card-text text-left text-white  my-4">Insert statistics here</p>
      </div>
    </div>

    <div className=" card w-2/5 h-72 bg-white rounded-2xl px-10 py-5">
      <div className="card-body py-12">
        <h5 className="mx-16 card-title text-4xl font-bold relative bottom-44 ">Quick Facts</h5>
        <p className="card-text text-3xl mx-16 relative bottom-40">- Insert facts</p>
        <p className="card-text text-3xl mx-16 relative bottom-40">- Insert facts</p>
        <p className="card-text text-3xl mx-16 relative bottom-40">- Insert facts</p>
        <p className="card-text text-3xl mx-16 relative bottom-40">- Insert facts</p>

      </div>
    </div>

      <div className="steps text-4xl font-bold mx-24 -my-20 mb-16"> Next Steps </div>

      <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20 mx-24">
      <div className="card-body py-4">
        <h5 className="card-title text-2xl font-medium">Step 1</h5>
      </div>
    </div>

    <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20" style={{ left: 'calc(100% - 80rem)' }}>
      <div className="card-body py-4">
        <h5 className="card-title text-2xl font-medium">Step 2</h5>
      </div>
    </div>

    <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20 -mx-24" style={{ left: 'calc(100% - 60rem)' }}>
      <div className="card-body py-4">
        <h5 className="card-title text-2xl font-medium">Step 3</h5>
      </div>
    </div>

    </>
  );
};

export default Treatments