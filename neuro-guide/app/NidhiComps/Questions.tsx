'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";


const Questions = () => {
  const { data: session } = useSession();

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const requestData = {
        ...data,
        email: session?.user?.email || "", // Add the current user's email
      };
      const response = await axios.post('/api/Quiz', requestData);
      console.log('Ratings submitted successfully:', response.data);
      router.push('/TreatmentPage');
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-36">
        <div className="mx-56">
          <div className="text-left text-3xl">Question 1</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question1')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="text-left text-3xl">Question 2</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question2')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="text-left text-3xl">Question 3</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question3')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="text-left text-3xl">Question 4</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question4')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="text-left text-3xl">Question 5</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question5')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="text-left text-3xl">Question 6</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question6')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="text-left text-3xl">Question 7</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question7')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="text-left text-3xl">Question 8</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
  
                    value={rating}
                    {...register('question8')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                  />
                </label>
              ))}
            </div>
            <div className="font-light text-xl">Disagree</div>
          </div>
        </div>
      </div>
      
    

      <button type="submit" className='"justify-center text-white bg-black  hover:bg-blue-700 transition-colors hover:text-white font-medium py-4 px-10 rounded-2xl text-2xl mb-24 -mt-10"'>Submit </button>
    </form>
  );
};

export default Questions;