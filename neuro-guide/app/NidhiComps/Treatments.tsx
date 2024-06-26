"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { string } from "zod";
import ProgressBar from "./ProgressBar";


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
  s4: string;
  s5: string;
  s6: string;
  s7: string;
  s8: string;
  s9: string;
}
const diagnosisOptions = [
  "Addictive disorder",
  "Anxiety disorder",
  "Healthy control",
  "Mood disorder",
  "Obsessive compulsive disorder",
  "Schizophrenia",
  "Trauma and stress related disorder",
];

const Treatments = () => {
  const [treatments, setTreatments] = useState<Treatments[]>([]);

  const [diagnosis, setDiagnosis] = useState();
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
      console.error("Error fetching diagnosis:", error);
    }
  };



  return (
    <>

      {treatments.map((treatment, index) => (
        <div key={index}>
          <div className="text-4xl mx-24 mt-28 mb-4">Diagnostic Results</div>
          <div className="mx-24 my- text-6xl font-bold">
            {treatment.diagnosis}
          </div>

          <div className="relative left-2/4 ml-10 top-24 mb-36 card w-5/12 h-96 bg-white rounded-2xl px-10 py-5 drop-shadow-lg">
            <div className="card-body py-12">
              <h5 className="card-title text-left text-3xl text-black font-semibold">
                Percents:
              </h5>
              <p className="card-text text-left text-white  my-4">
                <div className="flex ">
                  {" "}
                  <p className="text-black pr-5">Unhealthy Envionment</p>{" "}
                  <progress
                    className="progress h-4 my-2 progress-error w-56"
                    value={10}
                    max="100"
                  ></progress>
                </div>

                <div className="flex ">
                  {" "}
                  <p className="text-black pr-5">Lack of Activity</p>{" "}
                  <progress
                    className="progress h-4 my-2 progress-error w-56"
                    value={72}
                    max="100"
                  ></progress>
                </div><div className="flex ">
                  {" "}
                  <p className="text-black pr-5">Distress</p>{" "}
                  <progress
                    className="progress h-4 my-2 progress-error w-56"
                    value={61}
                    max="100"
                  ></progress>
                </div><div className="flex  ">
                  {" "}
                  <p className="text-black pr-5">Sleep</p>{" "}
                  <progress
                    className="progress h-4 my-2 progress-error w-56"
                    value={89}
                    max="100"
                  ></progress>
                </div><div className="flex ">
                  {" "}
                  <p className="text-black pr-5">Lack of Support</p>{" "}
                  <progress
                    className="progress h-4 my-2 progress-error w-56"
                    value={28}
                    max="100"
                  ></progress>
                </div><div className="flex ">
                  {" "}
                  <p className="text-black pr-5">Co-Dependency</p>{" "}
                  <progress
                    className="progress h-4 my-2 progress-error w-56"
                    value={55}
                    max="100"
                  ></progress>
                </div>
              </p>
            </div>
          </div>
          <div className=" card mt-8 h-72 bg-white rounded-2xl px-10 py-5 mr-20">
            <div className="card-body ">
              <h5 className="mx-8 mt-14 card-title text-4xl font-bold relative bottom-8">
                Quick Facts
              </h5>
              <div className="mx-8 collapse collapse-plus py-5 bg-slate-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Condition Fact #1
                </div>
                <div className="collapse-content">
                  <p>{treatment.fact1}</p>
                </div>
              </div>
              <div className="mx-8 collapse collapse-plus py-5  bg-slate-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Condition Fact #2
                </div>
                <div className="collapse-content">
                  <p>{treatment.fact2}</p>
                </div>
              </div>
              <div className="mx-8 collapse collapse-plus py-5  bg-slate-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Condition Fact #3
                </div>
                <div className="collapse-content">
                  <p>{treatment.fact3}</p>
                </div>
              </div>
              <div className="mx-8 collapse collapse-plus py-5  bg-slate-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Condition Fact #4
                </div>
                <div className="collapse-content">
                  <p>{treatment.fact4}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5"></div>
          <div className="steps text-4xl font-bold mt-96 mx-28 ">
            {" "}
            Next Steps{" "}
          </div>
          <div className="relative right-1/4">
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-lg my-6 mt">
                  {treatment.s1}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-lg my-6">
                  {treatment.s2}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-lg my-6">
                  {treatment.s3}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-lg my-6">
                  {treatment.s4}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-lg my-6">
                  {treatment.s5}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-lg my-6">
                  {treatment.s6}
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-lg my-6">
                  {treatment.s7}
                </div>
                <hr />
              </li>

              <li>
                <hr />
              </li>
            </ul>
          </div>
          <div className="py-16"></div>
        </div>
      ))}

      {/* Render other content */}
      {/* ... */}
    </>
  );
};

export default Treatments;
