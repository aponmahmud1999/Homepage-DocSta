import React from 'react';
import doctor from '../../images/Heros/Doctorbanner-removebg-preview.png'
import Ellipse from '../../images/Heros/Group 5129.png'

const Hero = () => {
  return (
    <div class="hero  bg-[url('/src/images/Heros/shutterstock_52.png')] py-20">
      <div class="w-full flex items-center justify-between">
        <div className='ml-16'><img src={Ellipse} />
          <h1 className='text-4xl font-bold'>Advanced Medical Courses</h1>
          <div className='my-5 flex space-x-5'>
            <button className='py-2 px-8 rounded-lg border border-black bg-white font-bold text-3xl text-purple-500'>BLS</button>
            <button className='py-2 px-8 rounded-lg border border-black bg-white font-bold text-3xl text-purple-500'>ACLS</button>
            <button className='py-2 px-8 rounded-lg border border-black bg-white font-bold text-3xl text-purple-500'>PALS</button>
          </div>
          <h1 className='text-2xl font-bold'>with 2 yrs international certificate</h1>
          <button className='rounded-full bg-purple-700 px-7 py-1'>Join Now</button>
          </div>
        <div> <img src={doctor} class="max-w-[700px]" />

        </div>

      </div>
    </div>
  );
};

export default Hero;