import React from 'react';
import img from '../Media/shutterstock_11.png'
import sh from '../Media/share-nodes-lig.png'

const Media = () => {
    return (
        <div>
            <div class='text-center '> 
                <h1 class='text-5xl font-bold mb-3'>
                    Media and Press
                </h1>
                <h1>
                    <h1 class='text-2xl font-semibold mb-7 text-gray-500'>
                    Accelerate your knowledge and skill with our experts  
                    </h1>
                </h1>
                <div class='  grid grid-cols-4 gap-4 mx-20'>
                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class='flex justify-between'>
                            <h2 class="card-title">Times of India</h2>
                            <img src={sh}/>

                            </div>
                            <p class='py-1'>20 jun 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum consectetur.... </p>
                            
                        </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class='flex justify-between'>
                            <h2 class="card-title">Times of India</h2>
                            <img src={sh}/>

                            </div>
                            <p class='py-1'>20 jun 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum consectetur.... </p>
                            
                        </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl ">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class='flex justify-between'>
                            <h2 class="card-title">Times of India</h2>
                            <img src={sh}/>

                            </div>
                            <p class='py-1'>20 jun 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum consectetur.... </p>
                            
                        </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl ">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class='flex justify-between'>
                            <h2 class="card-title">Times of India</h2>
                            <img src={sh}/>

                            </div>
                            <p class='py-1'>20 jun 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dui turpis. Lorem ipsum consectetur.... </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;