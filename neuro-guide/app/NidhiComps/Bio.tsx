import React from 'react'

const Bio = () => {
  return (
    <>
    <div className='flex justify-between mx-20'>
        <div className="flex flex-col items-center my-32">
        <div className="rounded-full">
            <img src='vais1.png'className='max-w-xs'></img>
        </div>
            <div className='font-bold text-xl text-center my-8 mx-12'> Vaishnavi PXXXXXX </div>
            <div className='text-sm font-normal text-left mx-36'>Project Manager</div>
            <li className='text-sm font-light list-none'>Sophomore CS Major at UTD</li>
            <li className='text-sm font-light list-none '>Passionate about creating helpful services</li>
        </div>

        <div className="flex flex-col items-center my-32">
        <div className="rounded-full "></div>
            <img src='nidhi1.png'className='max-w-xs' ></img>
            <div className='font-bold text-xl text-center my-8 mx-12'> Nidhi Majoju </div>
            <div className='text-sm font-normal text-left mx-36'>Frontend/ML Engineer</div>
            <li className='text-sm font-light list-none'>Freshman CS Major at UTD</li>
            <li className='text-sm font-light list-none '>Passionate about using AI for social good</li>
        </div>

        <div className="flex flex-col items-center my-32">
        <div className="rounded-full "></div>
             <img src='lak1.png' className='max-w-xs'></img>
            <div className='font-bold text-xl text-center my-8 mx-12'> Laksha Arora </div>
            <div className='text-sm font-normal text-left mx-36'>Frontend/ML Engineer</div>
            <li className='text-sm font-light list-none'>Sophomore CS Major at UTD</li>
            <li className='text-sm font-light list-none '>Passionate about creating helpful services</li>
        </div>

    </div>

    <div className='flex justify-center'>
        <div className="flex flex-col items-center my-32">
            <div className="rounded-full "></div>
            <img src='thuyan1.png' className='max-w-xs'></img>
            <div className='font-bold text-xl text-center my-8 mx-12'> Thuyan Dang </div>
            <div className='text-sm font-normal text-left mx-36'>Data Scientist/Backend</div>
            <li className='text-sm font-light list-none'>Sophomore CS Major at UTD</li>
            <li className='text-sm font-light list-none '>Passionate about creating helpful services</li>
        </div>

        <div className="flex flex-col items-center my-32">
        <div className="rounded-full"></div>
        <img src='naomi1.png' className='max-w-xs'></img>
            <div className='font-bold text-xl text-center my-8 mx-12'> Naomi XXXXX </div>
            <div className='text-sm font-normal text-left mx-36'>Data Scientist/Backend</div>
            <li className='text-sm font-light list-none'>Freshman CS Major at UTD</li>
            <li className='text-sm font-light list-none '>Passionate about creating helpful services</li>
        </div>

    </div>
    </>
  )
}

export default Bio