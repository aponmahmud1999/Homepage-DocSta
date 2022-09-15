import React from 'react';
import cal from '../../src/images/Heros/Calendar-02.png'

const Hero3 = () => {
  return (
    <div className='flex mx-20 '>
      <div class="hero justify-around bg-[#ffe8f8] rounded-3xl">
        <div class="hero-content py-12 ">
          <img src={cal} class="max-w-sm ml-10" />
          <div>
            <h1 class="text-[40px] font-bold  my-3 mr-5 ml-5">Want to train at your convenience? 
Pick your choice of Date and Venue</h1>
            <button class="btn bg-[#0f0e0f] px-32 ">Send Ecquiry</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero3;