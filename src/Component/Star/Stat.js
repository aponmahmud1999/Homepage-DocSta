import React from 'react';
import board from '../../images/Stat/chalkboard-user.png'
import tie from '../../images/Stat/user-tie-hair-l.png'
import check from '../../images/Stat/badge-check-lig.png'
import grad from '../../images/Stat/graduation-cap-.png'

const Stat = () => {
    return (
        <div class="flex justify-evenly w-full mt-20 bg-blue-300 py-8">

            <div class="flex justify-center items-center space-x-4">
                <div class="flex-1">
                    <img className='w-11' src={board} />
                </div>
                <div className='flex-1'>
                    <div class="stat-value text-primary">10K+</div>
                    <div class="stat-desc">Career Courses</div>
                </div>

            </div>

            <div class="flex justify-center items-center space-x-4">
                <div class="flex-1">
                    <img className='w-11' src={tie} />
                </div>
                <div className='flex-1'>
                    <div class="stat-value text-primary">200+</div>
                    <div class="stat-desc">Expert Instructions</div>
                </div>

            </div>


            <div class="flex justify-center items-center space-x-4">
                <div class="flex-1">
                    <img className='w-11' src={grad} />
                </div>
                <div className='flex-1'>
                    <div class="stat-value text-primary">60K+</div>
                    <div class="stat-desc">Satisfied Students</div>
                </div>

            </div>


            <div class="flex justify-center items-center space-x-4">
                <div class="flex-1">
                    <img className='w-11' src={check} />
                </div>
                <div className='flex-1'>
                    <div class="stat-value text-primary">6K+</div>
                    <div class="stat-desc">Certified Courses</div>
                </div>

            </div>


        </div>
    );
};

export default Stat;