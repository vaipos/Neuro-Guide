import React from 'react';
import MiniCircles from './MiniCircles1';
import MiniCircle2 from './MiniCircle2';
import MiniCircle3 from './MiniCircle3';


const Questions = () => {
  return (
    <>
    <div className="my-36">
        <div className="mx-56">
            <div className="text-left text-3xl">1. Question here</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">Agree</div>
                    <MiniCircles/>
                <div className="font-light text-xl">Disagree</div>
            </div>
        </div>
    </div>

    <div className="mb-36">
        <div className="mx-56">
            <div className="text-left text-3xl">1. Question here</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">Agree</div>
                    <MiniCircle2/>
                <div className="font-light text-xl">Disagree</div>
            </div>
        </div>
    </div>
    <div className="mb-36">
        <div className="mx-56">
            <div className="text-left text-3xl">1. Question here</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">Agree</div>
                    <MiniCircle3/>
                <div className="font-light text-xl">Disagree</div>
            </div>
        </div>
    </div>
    <div className="mb-36">
        <div className="mx-56">
            <div className="text-left text-3xl">1. Question here</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">Agree</div>
                <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 z-0 flex justify-between">
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                </div>
                <div className="font-light text-xl">Disagree</div>
            </div>
        </div>
    </div>
    <div className="mb-36">
        <div className="mx-56">
            <div className="text-left text-3xl">1. Question here</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">Agree</div>
                <div className="rounded-full bg-slate-300 h-2 w-full my-2 mx-3 z-0 flex justify-between">
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                    <MiniCircles/>
                </div>
                <div className="font-light text-xl">Disagree</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Questions