import React from 'react';

const Subcribe = () => {
    return (
        <div>
            <div class='text-center mt-20'>
                 <h1 class='text-5xl font-bold'>
                 Want <span class='text-purple-500'> FREE</span>  access to a brilliant mind?
                 </h1>
                 <h1 class='text-3xl font bold'>
                 Subscribe to our newsletter for regular tips
                 </h1>
            </div>
            <div class='text-center '>
            <input type="text" placeholder="Enter yout Email" class="input input-bordered w-[45rem] shadow-inner" />
            <button class="btn btn-active border-t-indigo-500 px-20">Search</button>
            </div>
        </div>
    );
};

export default Subcribe;