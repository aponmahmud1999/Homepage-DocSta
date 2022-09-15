import React from 'react';
import dh1 from '../../src/images/Heros/dh1.png'
import dh2 from '../../src/images/Heros/dh2.png'

const DoubleHero = () => {
    return (
        <div class='grid grid-cols-2 gap-3 mt-[87px] '>
            <div class='bg-[#fff4de] rounded-3xl'>
            <div className='flex  '>
      <div class="">
        <div class="hero-content flex-row-reverse ">
          <img src={dh1} class="" />
          <div>
            <h1 class="text-4xl font-bold">Earn A certificate</h1>
            <p class='font-bold text-xl'> Get the professional certificate program for you</p>
            <button class="btn bg-[#7f13ab]">View Program</button>
          </div>
        </div>
      </div>
    </div>
            </div>

            <div class='bg-[#d3eaff] rounded-3xl'>
            <div className='flex '>
      <div class="hero  rounded-3xl">
        <div class="hero-content flex-row-reverse ">
          <img src={dh2} class=" " />
          <div>
          <h1 class="text-4xl font-bold my-3">Best rated Courses</h1>
            <h1 class='font-bold text-xl'> Get the professional certificate program for you</h1>
            <button class="btn bg-[#0561fc] mt-3">View Courses</button>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default DoubleHero;