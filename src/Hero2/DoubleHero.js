import React from 'react';
import dh1 from '../../src/images/Heros/dh1.png'
import dh2 from '../../src/images/Heros/dh2.png'

const DoubleHero = () => {
    return (
        <div class='grid grid-cols-2 gap-3 mx-20 my-10 '>
            <div class='bg-red-300'>
            <div className='flex  '>
      <div class="hero rounded-3xl">
        <div class="hero-content flex-row-reverse ">
          <img src={dh1} class=" " />
          <div>
            <h1 class="text-4xl font-bold my-3">Earn A certificate</h1>
            <h1 class='font-bold text-xl'> Get the professional certificate program for you</h1>
            <button class="btn btn-primary">View Course Calender</button>
          </div>
        </div>
      </div>
    </div>
            </div>

            <div class='bg-cyan-400'>
            <div className='flex '>
      <div class="hero  rounded-3xl">
        <div class="hero-content flex-row-reverse ">
          <img src={dh2} class=" " />
          <div>
          <h1 class="text-4xl font-bold my-3">Best rated Co</h1>
            <h1 class='font-bold text-xl'> Get the professional certificate program for you</h1>
            <button class="btn btn-primary">View Course Calender</button>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default DoubleHero;