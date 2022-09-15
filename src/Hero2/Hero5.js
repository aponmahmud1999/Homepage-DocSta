import React from 'react';
import team from '../../src/images/Heros/Group 4875.png'

const Hero5 = () => {
    return (
        <div class=" bg-[url('/src/images/Heros/CompositeLayer(1).jpg')] bg-no-repeat bg-contain mt-28">
     <div className=' '>
      <div class="">
        <div class=" flex-row-reverse flex justify-evenly ">
          <div>
          <img src={team} class='-mt-28 h-[440px] '/>
          </div>
          
          <div className='ml-32 mt-16'>
            <h1 class="text-4xl font-semibold ">Be our Instructor</h1>
            <p className='text-2xl font-semibold  '>If teaching is your passion,<br/> 
empowering you is our mission. <br/>
Teach the world at Docsta Learn.<br/>
Become our faculty today.</p>
            <button class="btn bg-[#8013ac] mt-5">View Course Calender</button>
          </div>
        </div>
      </div>
    </div>
      
      </div>
      
    );
};

export default Hero5;