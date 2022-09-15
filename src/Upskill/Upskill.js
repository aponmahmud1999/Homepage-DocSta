import React from 'react';
import left from '../Upskill/left.png'
import right1 from '../Upskill/right1.png'
import right2 from '../Upskill/right2.png'

const Upskill = () => {
  return (
    <div class='grid grid-cols-2 ml-32 mr-32'>

      <div>
        <h1 class='text-7xl font-bold'>
          DocSta Acadeny
        </h1>
        <h1 class='text-4xl text-purple-400 '>
          Upskill your brilliance
        </h1>
        <h1 class='text-3xl font-bold mt-5 mb-4'>
          Looking for ways to ecclerate your career - your seacrh ends here!
        </h1>
        <p>
          With a mission to create limitless learning opportunities and up-skill the nation’s workforce,  Docsta Academy prides in bringing forth a vast array of accredited and skill-building courses that are tailored to shoot up your
          career. <br></br>

          We have put together a force of knowledge experts and instructors that can guide you in advancing your skills in the most quickest and efficient manner. Docsta Academy is build to be the future of advanced learning. Our courses range from those specifically required in healthcare, IT and software, Human trespasses, finances as well as a multitude of soft skills and many more. <br></br>

          Created out of intense passion to train the people of tomorrow, we offer you a truly enriching and life changing learning experience. <br></br>

          If you wish to become better than the best - Docsta Academy is your ultimate solution <br></br>
        </p>
      </div>
      <div className='flex'>
        <div className='mt-32 -mr-16 z-50'>
          <img src={left} alt='' />
        </div>
        <div className='flex flex-col gap-6'>
          <img src={right1} alt='' />
          <img src={right2} className='w-52 mx-auto' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Upskill;