import React from 'react';
import team from '../../src/images/Heros/Team copy.png'


const Hero4 = () => {
  return (
    <div class=" bg-[url('/src/images/Heros/CompositeLayer(1).jpg')] bg-no-repeat bg-contain ">
     <div className='flex '>
      <div class="hero  rounded-3xl">
        <div class="hero-content flex-row-reverse ">
          <img src={team} class='' />
          <div>
            <h1 class="text-4xl font-bold my-3">Click on your preferred date from the Course Calender</h1>
            <button class="btn btn-primary">View Course Calender</button>
          </div>
        </div>
      </div>
    </div>
      
      </div>
      
    
  );
};

export default Hero4;