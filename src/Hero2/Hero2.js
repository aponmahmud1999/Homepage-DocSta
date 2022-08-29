import React from 'react';
import cal from '../../src/images/Stat/Calendar-01.png'

const Hero2 = () => {
  return (
    <div className='flex mx-20'>
      <div class="hero  bg-blue-200 rounded-3xl">
        <div class="hero-content flex-row-reverse py-12 ">
          <img src={cal} class="max-w-sm " />
          <div>
            <h1 class="text-4xl font-bold my-3">Click on your preferred date from the Course Calender</h1>
            <button class="btn btn-primary">View Course Calender</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero2;