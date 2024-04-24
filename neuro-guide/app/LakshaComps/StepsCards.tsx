'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const StepsCards = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const { scrollYProgress } = useScroll();
  const fadeUp = useTransform(scrollYProgress, [0, 0.5], [1, 0]) as unknown as number;

  return (
    <>
      <div className="mr-10 py-24 -my-10">
        <motion.div
          ref={ref1}
          className="card w-2/5 h-96 bg-teal rounded-2xl  shadow-dullteal px-10 py-5 shadow-2xl relative"
          initial={{ opacity: 0, transform: 'translateY(50px)', left: 'calc(100% - 42rem)' }}
          animate={{ opacity: isInView1 ? 1 : 0, transform: `translateY(${isInView1 ? 0 : 50}px)` }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-body py-12 ">
            <h5 className="card-title text-right text-2xl text-white font-medium">Quiz Time</h5>
            <p className="card-text text-right text-white py-8 my-4">
              Determine your mental health status with our concise quiz, offering valuable insights into your emotional well-being and guiding you towards necessary support and resources.
            </p>
            <a href="#" className="btn btn-primary shadow-2xl bg-black hover:bg-white rounded-full py-3 px-6 text-center text-white hover:text-black">
              Start Here
            </a>
          </div>
        </motion.div>

        <div className="card-container flex flex-col justify-between -my-28">
          <motion.div
            ref={ref2}
            className="card w-2/5 h-96 bg-teal rounded-2xl px-10 py-4 shadow-2xl  shadow-cyan-100 relative my-48"
            initial={{ opacity: 0, transform: 'translateY(50px)', left: 'calc(100% - 85rem)' }}
            animate={{ opacity: isInView2 ? 1 : 0, transform: `translateY(${isInView2 ? 0 : 50}px)` }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body py-12">
              <h5 className="card-title text-left text-2xl text-white font-medium">Get Diagnosed</h5>
              <p className="card-text text-left text-white py-5 my-4">
                Gain clarity and validation about your mental health by obtaining a diagnosis through a quick mental health quiz. Take control of your well-being and access tailored resources to support your journey towards a happier, healthier life.
              </p>
              <div className="flex justify-end">
                <a href= "./QuizForm" className="btn btn-primary shadow-xl bg-black hover:bg-white rounded-full py-3 px-6 text-center text-white hover:text-black">
                  Start Here
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref3}
          className="card w-2/5 bg-teal rounded-2xl px-10 py-5 shadow-2xl shadow-cyan-100 relative"
          initial={{ opacity: 0, transform: 'translateY(50px)', left: 'calc(100% - 42rem)' }}
          animate={{ opacity: isInView3 ? 1 : 0, transform: `translateY(${isInView3 ? 0 : 50}px)` }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-body py-12">
            <h5 className="card-title text-right text-2xl text-white font-medium">Treatments & Help</h5>
            <p className="card-text text-right text-white py-8 my-4">
              After receiving a diagnosis, users can access a comprehensive list of resources and engage in supportive conversations with a chatbot tailored to their mental health needs.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default StepsCards;