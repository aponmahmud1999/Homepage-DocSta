import React from 'react';
import img from '../images/CompositeLayer.png'
import img1 from '../images/Multicard/img1.png'
import img2 from '../images/Multicard/img2.png'
import img3 from '../images/Multicard/img3.png'
const Multicards = () => {
    return (
        <div className='flex justify-between my-20'>

            <div >
                <div class="hero  bg-[url('/src/images/Multicard/shutterstock_17.png')]" >
                    <div class=" rounded-2xl py-32"></div>
                    <div class="hero-content align-top text-neutral-content -mt-36">
                        <div class="max-w-md">
                            <h1 class="mb-2 text-xl font-bold">How to manage a stubborn child?</h1>
                            <div className='flex justify-between'>
                                <p class="mb-5">10 effective tips for parenting</p>
                                <button class="badge badge-secondary">Get Started</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' ml-10 -mt-10'>
                    <div class="card card-side bg-base-100">
                        <figure><img src={img1} className=' rounded-full w-20' alt="Movie" /></figure>
                        <div class="card-body">
                            <div class="badge badge-secondary">Beginner</div>
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
                            <div class='flex gap-5'>
                                <div>
                                    <h2 class="card-title">Course by</h2>
                                    <p class="card-title">Date</p>
                                    <p class="card-title">Duration</p>
                                </div>
                                <div>
                                    <h2 class="card-title">Dr Danish Salim</h2>
                                    <p class="card-title">11 am, 24 Jun 2022</p>
                                    <p class="card-title">3 hrs</p>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                    <div>
                                
                                <div className='flex justify-evenly'>
                                <img src={img} alt='' className='my-auto' />
                                <button className=' bg-[#7f13ab]  text-white px-2 py-1 btn'>Enroll Now</button>
                                <button class="btn bg-[#888888]">Know More</button>
                                </div>
                            </div>
                    <div class="divider"></div>
                    <div className='flex justify-between mb-5'>
                        <p className='ml-5' >🕒1hr 30mins</p>
                        <p className='font-bold mr-5'>$29</p>
                    </div>
                </div>
            </div>
            <div >
                <div class="hero bg-[url('/src/images/Multicard/shutterstock_58.png')]" >
                    <div class=" bg-opacity-60 rounded-2xl py-32"></div>
                    <div class="hero-content align-top text-neutral-content -mt-36">
                        <div class="max-w-md">
                            <h1 class="mb-2 text-xl font-bold">How to manage a stubborn child?</h1>
                            <div className='flex justify-between'>
                                <p class="mb-5">10 effective tips for parenting</p>
                                <button class="badge badge-secondary">Get Started</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' ml-10 -mt-10'>
                    <div class="card card-side bg-base-100">
                        <figure><img src={img2} className=' rounded-full w-20' alt="Movie" /></figure>
                        <div class="card-body">
                            <div class="badge badge-secondary">Beginner</div>
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
                            <div class='flex gap-5'>
                                <div>
                                    <h2 class="card-title">Course by</h2>
                                    <p class="card-title">Date</p>
                                    <p class="card-title">Duration</p>
                                </div>
                                <div>
                                    <h2 class="card-title">Dr Danish Salim</h2>
                                    <p class="card-title">11 am, 24 Jun 2022</p>
                                    <p class="card-title">3 hrs</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div>
                                
                                <div className='flex justify-evenly'>
                                <img src={img} alt='' className='my-auto' />
                                <button className=' bg-[#7f13ab]  text-white px-2 py-1 btn'>Enroll Now</button>
                                <button class="btn bg-[#888888]">Know More</button>
                                </div>
                            </div>
                    <div class="divider"></div>
                    <div className='flex justify-between mb-5'>
                        <p className='ml-5' >🕒1hr 30mins</p>
                        <p className='font-bold mr-5'>$29</p>
                    </div>
                </div>
            </div>
            <div >
                <div class="hero bg-[url('/src/images/Multicard/shutterstock_18.png')]">
                    <div class=" bg-opacity-60 rounded-2xl py-32"></div>
                    <div class="hero-content align-top text-neutral-content -mt-36">
                        <div class="max-w-md">
                            <h1 class="mb-2 text-xl font-bold">How to manage a stubborn child?</h1>
                            <div className='flex justify-between'>
                                <p class="mb-5">10 effective tips for parenting</p>
                                <button class="badge badge-secondary">Get Started</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' ml-10 -mt-10'>
                    <div class="card card-side bg-base-100">
                        <figure><img src={img3} className=' rounded-full w-20' alt="Movie" /></figure>
                        <div class="card-body">
                            <div class="badge badge-secondary">Beginner</div>
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
                            <div class='flex gap-5'>
                                <div>
                                    <h2 class="card-title">Course by</h2>
                                    <p class="card-title">Date</p>
                                    <p class="card-title">Duration</p>
                                </div>
                                <div>
                                    <h2 class="card-title">Dr Danish Salim</h2>
                                    <p class="card-title">11 am, 24 Jun 2022</p>
                                    <p class="card-title">3 hrs</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div>
                                
                                <div className='flex justify-evenly'>
                                <img src={img} alt='' className='my-auto' />
                                <button className=' bg-[#7f13ab]  text-white px-2 py-1 btn'>Enroll Now</button>
                                <button class="btn bg-[#888888]">Know More</button>
                                </div>
                            </div>
                    <div class="divider"></div>
                    <div className='flex justify-between mb-5'>
                        <p className='ml-5' >🕒1hr 30mins</p>
                        <p className='font-bold mr-5'>$29</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Multicards;