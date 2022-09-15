import React from 'react';
import cal from '../../src/images/Stat/Calendar-01.png'

const Hero2 = () => {
  return (
    <div className='flex mx-20 mt-10'>
      <div class="hero  bg-[#edf2ff] rounded-3xl">
        <div class="hero-content flex-row-reverse py-12 ">
          <img src={cal} class="max-w-sm mr-20 " />
          <div>
            <h1 class="text-4xl font-bold my-3 ml-32">Click on your preferred date from the Course Calender</h1>
            <button class="btn btn-primary ml-32 mt-3">View Course Calender</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero2;