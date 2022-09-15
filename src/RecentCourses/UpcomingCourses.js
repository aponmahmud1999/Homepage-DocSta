import React from 'react';
import icon from '../RecentCourses/Group 4807.png'
import img1 from '../RecentCourses/img5.png'
import img2 from '../RecentCourses/img6.png'
import img3 from '../RecentCourses/img7.png'
import img4 from '../RecentCourses/img8.png'
import i1 from '../RecentCourses/i1.png'
import i2 from '../RecentCourses/i2.png'
import i3 from '../RecentCourses/i3.png'
import i4 from '../RecentCourses/i4.png'

const UpcomingCourses = () => {
    return (
        <div className='my-10'>
           <div class='mx-20 text-center font-bold'>
           <h1 class='text-4xl  '>
                Upcoming Courses
            </h1>
            <h1 class='mt-3 mb-7'>
                Take a peak the most ancipated couses that are one the way
            </h1>
           </div>
           
            <div class='grid-cols-4 grid gap-4 mx-20'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="badge badge-secondary">NEW</div>

                        <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
                        <div className='flex'>
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src={i1} />
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
                        <div className='flex space-x-3 text-xs '>
                            <p className='ml-5' >🕒1hr 30mins</p>
                            <p className=' mr-5'>🔽 100 sessions</p>
                        </div>

                    </div>
                </div>



                <div class="card bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="badge badge-secondary">NEW</div>

                        <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
                        <div className='flex'>
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src={i2} />
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
                        <div className='flex space-x-3 text-xs '>
                            <p className='ml-5' >🕒1hr 30mins</p>
                            <p className=' mr-5'>🔽 100 sessions</p>
                        </div>

                    </div>
                </div>


                <div class="card bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="badge badge-secondary">NEW</div>

                        <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
                        <div className='flex'>
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src={i3} />
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
                        <div className='flex space-x-3 text-xs '>
                            <p className='ml-5' >🕒1hr 30mins</p>
                            <p className=' mr-5'>🔽 100 sessions</p>
                        </div>

                    </div>
                </div>


                <div class="card bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="badge badge-secondary">NEW</div>

                        <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
                        <div className='flex'>
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src={i4}/>
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
                        <div className='flex space-x-3 text-xs '>
                            <p className='ml-5' >🕒1hr 30mins</p>
                            <p className=' mr-5'>🔽 100 sessions</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpcomingCourses;