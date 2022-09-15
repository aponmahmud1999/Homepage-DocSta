import React from 'react';
import icon from '../RecentCourses/Group 4807.png'
import img1 from '../RecentCourses/img1.png'
import img2 from '../RecentCourses/img2.png'
import img3 from '../RecentCourses/img3.png'
import img4 from '../RecentCourses/img4.png'
import i1 from '../RecentCourses/i1.png'
import i2 from '../RecentCourses/i2.png'
import i3 from '../RecentCourses/i3.png'
import i4 from '../RecentCourses/i4.png'

const TopCourses = () => {
    return (
        <div>

            <h1 class='text-3xl my-10 mx-20 font-bold'>
                Top Courses in <span className='text-[#8013ac]'>Personality Development</span>
            </h1>
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

export default TopCourses;