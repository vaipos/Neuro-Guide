import React, { useState } from 'react';

const Questions = () => {
  const [ratings, setRatings] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
  });

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>, questionId: string) => {
    setRatings({
      ...ratings,
      [questionId]: parseInt(event.target.value),
    });
  };

  return (
    <>
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
                    name="question1"
                    value={rating}
                    checked={ratings.question1 === rating}
                    onChange={(event) => handleRatingChange(event, 'question1')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                  />
                </label>
              ))}
            </div>
            <div className="font-light text-xl">Disagree</div>
          </div>
        </div>
      </div>

      <div className="mb-36">
        <div className="mx-56">
          <div className="text-left text-3xl">Question 2</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
                    name="question2"
                    value={rating}
                    checked={ratings.question2 === rating}
                    onChange={(event) => handleRatingChange(event, 'question2')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                  />
                </label>
              ))}
            </div>
            <div className="font-light text-xl">Disagree</div>
          </div>
        </div>
      </div>

      <div className="mb-36">
        <div className="mx-56">
          <div className="text-left text-3xl">Question 3</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
                    name="question3"
                    value={rating}
                    checked={ratings.question3 === rating}
                    onChange={(event) => handleRatingChange(event, 'question3')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                  />
                </label>
              ))}
            </div>
            <div className="font-light text-xl">Disagree</div>
          </div>
        </div>
      </div>

      <div className="mb-36">
        <div className="mx-56">
          <div className="text-left text-3xl">Question 4</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
                    name="question4"
                    value={rating}
                    checked={ratings.question4 === rating}
                    onChange={(event) => handleRatingChange(event, 'question4')}
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
                  />
                </label>
              ))}
            </div>
            <div className="font-light text-xl">Disagree</div>
          </div>
        </div>
      </div>

      <div className="mb-36">
        <div className="mx-56">
          <div className="text-left text-3xl">Question 5</div>
          <div className="flex justify-center my-8">
            <div className="font-light text-xl">Agree</div>
            <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
                  <input
                    type="radio"
                    name="question5"
                    value={rating}
                    checked={ratings.question5 === rating}
                    onChange={(event) => handleRatingChange(event, 'question5')}
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
              name="question6"
              value={rating}
              checked={ratings.question6 === rating}
              onChange={(event) => handleRatingChange(event, 'question6')}
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </label>
        ))}
      </div>
      <div className="font-light text-xl">Disagree</div>
    </div>
  </div>
</div>

<div className="mb-36">
  <div className="mx-56">
    <div className="text-left text-3xl">Question 7</div>
    <div className="flex justify-center my-8">
      <div className="font-light text-xl">Agree</div>
      <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
          <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
            <input
              type="radio"
              name="question7"
              value={rating}
              checked={ratings.question7 === rating}
              onChange={(event) => handleRatingChange(event, 'question7')}
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </label>
        ))}
      </div>
      <div className="font-light text-xl">Disagree</div>
    </div>
  </div>
</div>

<div className="mb-36">
  <div className="mx-56">
    <div className="text-left text-3xl">Question 8</div>
    <div className="flex justify-center my-8">
      <div className="font-light text-xl">Agree</div>
      <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 flex justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
          <label key={rating} className="relative left-6 bottom-1 w-28 h-28">
            <input
              type="radio"
              name="question8"
              value={rating}
              checked={ratings.question8 === rating}
              onChange={(event) => handleRatingChange(event, 'question8')}
              className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </label>
        ))}
      </div>
      <div className="font-light text-xl">Disagree</div>
    </div>
  </div>
</div>
      </>
  );
              }
              export default Questions;