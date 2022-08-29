import React from 'react';
import cal from '../../src/images/Heros/Calendar-02.png'

const Hero3 = () => {
  return (
    <div className='flex mx-20 '>
      <div class="hero justify-around bg-red-100 rounded-3xl">
        <div class="hero-content py-12 ">
          <img src={cal} class="max-w-sm mr-10" />
          <div>
            <h1 class="text-4xl font-bold  my-3">Click on your preferred date from the Course Calender</h1>
            <button class="btn btn-primary">View Course Calender</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero3;