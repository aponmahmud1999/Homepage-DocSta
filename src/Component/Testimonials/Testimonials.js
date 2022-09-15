import React from 'react';
import img2 from '../../images/Multicard/img2.png'
const Testimonials = () => {
    return (
        <div className="bg-[url('/src/Component/Testimonials/CompositeLayer(3).png')] bg-no-repeat bg-contain py-32">
            <div className='flex justify-evenly items-center mx-40 relative top-1/2 mt-24'>

                <div className='card w-60'>
                    <div class="card  bg-base-100  p-5">
                        <div className='grid grid-cols-2'>
                            <figure><img src={img2} className=' rounded-full w-20' alt="Movie" /></figure>
                            <div>
                                <p className='text-xl font-bold'>Sarah</p>
                                <p className='text-purple-700'>Dubai</p>
                            </div>
                        </div>
                        <p>I have really improved my knowledge in this field. It has also given me the confidence to start my own training. It has also given me the confidence to start my</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>
                </div>
                <div className='w-72 card h-[400px] bg-white'>
                    <div className='card grid grid-cols-2 mb-5 p-5'>
                        <figure><img src={img2} className=' rounded-full w-20' alt="Movie" /></figure>
                        <div>
                            <p className='text-xl font-bold'>Sarah</p>
                            <p className='text-purple-700'>Dubai</p>
                        </div>
                    </div>
                    <div className=''><p>I have really improved my knowledge in this field. It has also given me the confidence to start my own training. It has also given me the confidence to start my</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>


                    </div>
                </div>
                <div className='card w-60'>
                    <div class="card  bg-base-100  p-5">
                        <div className='grid grid-cols-2'>
                            <figure><img src={img2} className=' rounded-full w-20' alt="Movie" /></figure>
                            <div>
                                <p className='text-xl font-bold'>Sarah</p>
                                <p className='text-purple-700'>Dubai</p>
                            </div>
                        </div>
                        <p>I have really improved my knowledge in this field. It has also given me the confidence to start my own training. It has also given me the confidence to start my</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;