'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Treatments {
  id: number;
  diagnosis: string;
  fact1: string;
  fact2: string;
  fact3: string;
  fact4: string;
  s1: string;
  s2: string;
  s3: string;
}

const Treatments = () => {
  const [treatments, setTreatments] = useState<Treatments[]>([]);

  useEffect(() => {
    fetchDiagnosis();
  }, []);

  const fetchDiagnosis = async () => {
    try {
      const request = "Schizophrenia";
      const response = await axios.get("/api/treatment", {
        params: { diagnosis: request },
      });
      setTreatments(response.data);
    } catch (error) {
      console.error('Error fetching diagnosis:', error);
    }
  };

  return (
    <>    
      {treatments.map((treatment, index) => (
        <div key={index}>
          <div className="text-4xl mx-24 mt-28 mb-4">Diagnostic Results</div>
    <div className="mx-24 my- text-6xl font-bold">{treatment.diagnosis}</div>
  
    <div className="relative left-2/3 top-24 mb-36 card w-96 h-96 bg-black rounded-2xl px-10 py-5 drop-shadow-lg">
      <div className="card-body py-12">
        <h5 className="card-title text-left text-3xl text-white font-semibold">Percents:</h5>
        <p className="card-text text-left text-white  my-4">Insert statistics here</p>
      </div>
    </div>

    <div className=" card  h-72 bg-white rounded-2xl px-10 py-5">
      <div className="card-body ">
        <h5 className="mx-16 card-title text-4xl font-bold relative bottom-44 ">Quick Facts</h5>
        <p className="card-text text-md mx-16 relative bottom-40">- {treatment.fact1}</p>
        <p className="card-text text-md mx-16 relative bottom-40">- {treatment.fact2}</p>
        <p className="card-text text-md mx-16 relative bottom-40">- {treatment.fact3}</p>
        <p className="card-text text-md mx-16 relative bottom-40">- {treatment.fact4}</p>

      </div>
    </div>

      <div className="steps text-4xl font-bold mx-24 mb-16"> Next Steps </div>

      <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20 mx-24">
      <div className="card-body py-4">
        <h5 className="card-title text-2xl font-medium">{treatment.s1}</h5>
      </div>
    </div>

    <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20" style={{ left: 'calc(100% - 80rem)' }}>
      <div className="card-body py-4">
        <h5 className="card-title text-2xl font-medium">{treatment.fact2}</h5>
      </div>
    </div>

    <div className="card w-3/5 h-24 bg-custom rounded-xl px-10 py-15 drop-shadow-lg relative content-center my-20 -mx-24" style={{ left: 'calc(100% - 60rem)' }}>
      <div className="card-body py-4">
        <h5 className="card-title text-2xl font-medium">{treatment.fact3}</h5>
      </div>
    </div>
        </div>
      ))}

      {/* Render other content */}
      {/* ... */}
    </>
  );
};

export default Treatments;
