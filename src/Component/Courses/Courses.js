import React from 'react';
import icon from '../Courses/Group 4807.png'

const Courses = () => {
    return (
        <div>
            <div class='mt-6 mb-8'>
                <h1 class='text-center text-3xl'>Highly Popular Courses</h1>
            </div>
            
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    
      <div class="badge badge-secondary">NEW</div>
    
    <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
    <div className='flex'>
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
    <p className='my-auto ml-2 txl '>DocSta Introductors</p>
    </div>
    
    <div class='flex'>
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p class="card-title ml-2"> 4.7/5</p>
                                
                            </div>
                            <p className='font-bold mr-5'>$29</p>
                            <div class="card-actions justify-between">
                            <div>
                            <div class="badge badge-secondary bg-amber-400">Best Seller</div>
                            
                            </div>
                            <img src={icon} alt='' className='my-auto' />
                            </div>
                            <div class="divider"></div>
                    <div className='flex justify-between'>
                        <p className='ml-5' >🕒1hr 30mins</p>
                        <p className=' mr-5'>🔽 100 sessions</p>
                    </div>
    
  </div>
</div>
        </div>
    );
};

export default Courses;