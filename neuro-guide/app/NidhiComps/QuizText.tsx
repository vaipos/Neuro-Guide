
import React from "react";
import StartQuizBtn from "./StartQuizBtn";

const QuizText = () => {
  return (
    <>
      <div className=" relative left-96 py-56">
        <div className="font-light text-center italic mb-4">
          SELF CARE STARTS HERE
        </div>
        <div className="font-bold text-5xl text-center">Mental Health</div>
        <div className="font-bold text-5xl text-center mb-4">
          Diagnosis Quiz
        </div>
        <p className="text-center text-lg mb-10 mx-96 px-40">
          Fill out this short form, and we’ll provide you with the necessary
          information to take charge of your mental health journey.
        </p>
        <StartQuizBtn />
      </div>
    </>
  );
};

export default QuizText;
