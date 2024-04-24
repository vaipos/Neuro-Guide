"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


import { useSession } from "next-auth/react";

import NavBar from "../LakshaComps/Comp1";
import ProgressBar from "../NidhiComps/ProgressBar";
import Submit from "../NidhiComps/Submit";
import Footer from "../NidhiComps/Footer";
import { useRouter } from "next/navigation";
const diagnosisOptions = [
  "Addictive disorder",
  "Anxiety disorder",
  "Healthy control",
  "Mood disorder",
  "Obsessive compulsive disorder",
  "Schizophrenia",
  "Trauma and stress related disorder",
];
const Questions = () => {
  const { data: session } = useSession();
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { isSubmitted, dirtyFields } } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const randomIndex = Math.floor(Math.random() * diagnosisOptions.length);
      const randomDiagnosis = diagnosisOptions[randomIndex];
  
      const requestData = {
        ...data,
        email: session?.user?.email || "",
        diagnosis: randomDiagnosis, // Add the randomly selected diagnosis
      };
  

      const response = await axios.post("/api/Quiz", requestData); // pass in data into api
      console.log("Ratings submitted successfully:", response.data);
      setError("");
      router.push(`/TreatmentPage/${randomDiagnosis}`); // Pass diagnosis as part of the route path
   // if successful, go to treatment page
    } catch (error) {
      setError("fill out questions");
      console.error("Error submitting request:", error);
    }
  };
  const [answeredQuestions, setAnsweredQuestions] = useState(0); // State to track answered questions

  const calculateProgress = () => {
    const totalQuestions = 8;
    const newProgress = Math.round((answeredQuestions / totalQuestions) * 100);
    return newProgress;
  };

  const handleInputChange = () => {
    const inputs = document.querySelectorAll('input[type="radio"]:checked');
    setAnsweredQuestions(inputs.length);
  };
  
  return (
    <>
      <div className="bg-white">
        <div className="bg-[url('./bg.png')] bg-cover bg-no-repeat ">
            <NavBar/>
            <div className="py-20 text-5xl font-medium text-center">Mental Health Diagnosis Quiz</div>
            <div className="sticky top-0 z-100">
        <ProgressBar percentage={calculateProgress()} />
      </div>
            <div className='py-12'></div>
        </div>
 
        <div className = 'py-2'></div>
    



      <form onSubmit={handleSubmit(onSubmit)} onChange={handleInputChange}>
        <div className="my-36 ">
          <div className="mx-56">
            <div className="text-left text-2xl">Do you feel unsafe in the environment you reside in?</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">Agree</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      {...register("question1")}
                    
                      
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Disagree</div>
            </div>
          </div>
        </div>
        <div className="my-36">
          <div className="mx-56">
            <div className="text-left text-2xl">Do you have access to your necessities (food, water, etc)?</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">Agree</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      
                      {...register("question2")}
                    
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Disagree</div>
            </div>
          </div>
        </div>
        <div className="my-36">
          <div className="mx-56">
            <div className="text-left text-2xl">How often do you feel heard in conversations</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">Often</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      {...register("question3")}
                    
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Rare</div>
            </div>
          </div>
        </div>
        <div className="my-36">
          <div className="mx-56">
            <div className="text-left text-2xl">How active is your current lifestyle?</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">High</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      {...register("question4")}
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Low </div>
            </div>
          </div>
        </div>
        <div className="my-36">
          <div className="mx-56">
            <div className="text-left text-2xl">How often do you get 7 or more hours of sleep?</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">Often</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      {...register("question5")}
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Rare</div>
            </div>
          </div>
        </div>
        <div className="my-36">
          <div className="mx-56">
            <div className="text-left text-2xl">How often do you feel at stress of your state?</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">Often</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      {...register("question6")}
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Rare</div>
            </div>
          </div>
        </div>
        <div className="my-36">
          <div className="mx-56">
            <div className="text-left text-2xl">To what level do you find joy around other people?</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">High</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      {...register("question7")}
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Low</div>
            </div>
          </div>
        </div>
        <div className="my-36">
          <div className="mx-56">
            <div className="text-left text-2xl">Do you feel at content with yourself?</div>
            <div className="flex justify-center my-8">
              <div className="font-light text-xl">Agree</div>
              <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <label
                    key={rating}
                    className="relative left-12 bottom-2 w-28 h-28"
                  >
                    <input
                      type="radio"
                      value={rating}
                      {...register("question8")}
                      className="text-blue-600 scale-150 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </label>
                ))}
              </div>
              <div className="font-light text-xl">Disagree</div>
            </div>
          </div>
        </div>
        {error && (
        <div className="mx-96">
          {" "}
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Please fill all necessary fields</span>
          </div>{" "}
        </div>
      )}
        <div className="text-center my-10">
          {" "}
          <button
            type="submit"
            className=' object-center text-white bg-black  hover:bg-blue-700 transition-colors hover:text-white font-medium py-4 px-10 rounded-2xl text-2xl mb-24 -mt-10"'
          >
            Submit{" "}
          </button>
        </div>
      </form>
      </div>
      <Footer/>
    </>
  );
};

export default Questions;
