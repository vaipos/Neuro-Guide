import React from 'react'

const Treatments = () => {
  return ( 
    <>
    <div className="flex mx-16 my-64">
        <div className="text-center text-2xl font-bold">Diagnostic Results</div>
    </div>
    <div className="mx-16 -my-60 text-2xl py-1 font-nomral">Anxiety Disorder</div>
    

    <div className="card w-1/5 h-72 bg-black rounded-2xl px-10 py-5 drop-shadow-lg relative" style={{ left: 'calc(100% - 42rem)' }}>
      <div className="card-body py-12">
        <h5 className="card-title text-right text-2xl text-white font-medium">Percents:</h5>
        <p className="card-text text-right text-white py-8 my-4">Insert statistics here</p>
      </div>
    </div>

    <div className="card w-2/5 h-72 bg-white rounded-2xl px-10 py-5 relative" style={{ left: 'calc(100% - 95rem)' }}>
      <div className="card-body py-12">
        <h5 className="card-title text-left text-2xl text-black font-medium">Quick Facts</h5>
        <p className="card-text text-left text-white py-8 my-4">- Insert facts</p>
      </div>
    </div>

      <div className="steps text-3xl font-bold text-left">
        <h2>Next Steps:</h2>
      </div>

      <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20">
      <div className="card-body py-4">
        <h5 className="card-title text-left text-2xl text-black font-medium">Step 1</h5>
      </div>
    </div>

    <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-10 drop-shadow-lg relative content-center my-20" style={{ left: 'calc(100% - 80rem)' }}>
      <div className="card-body py-4">
        <h5 className="card-title text-left text-2xl text-black font-medium">Step 2</h5>
      </div>
    </div>

    <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20" style={{ left: 'calc(100% - 60rem)' }}>
      <div className="card-body py-4">
        <h5 className="card-title text-left text-2xl text-black font-medium">Step 3</h5>
      </div>
    </div>

    </>
  );
};

export default Treatments