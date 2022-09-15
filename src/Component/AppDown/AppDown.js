import React from 'react';
import App from '../AppDown/mobileappmock.png'

const AppDown = () => {
    return (
        <div class=' py-20'>
            <div className='flex justify-between items-center bg-slate-300'>
                <div>
                    <img src={App} className='h-[500px] '/>
                </div>
                <div class=' flex-1'>
                  <h1 className='text-4xl font-semibold'>
                    Dowmload Our APP
                    </h1>
                    <h1 className='text-4xl font-bold'> 
                        Its all about the best <br/> Online Learning App
                    </h1>
                    <h1>
                       Redifing your Learning experience
                    </h1>
                    <div class='grid grid-cols-2 gap-2 mr-5'>
                    <button className=' rounded-lg border bg-white font-bold text-3xl text-purple-500'>BLS</button>
                    <button className='rounded-lg border  bg-white font-bold text-3xl text-purple-500'>BLS</button>
                    <button className='rounded-lg border  bg-white font-bold text-3xl text-purple-500'>BLS</button>
                    <button className=' rounded-lg border  bg-white font-bold text-3xl text-purple-500'>BLS</button>
                    <button className=' rounded-lg border  bg-white font-bold text-3xl text-purple-500'>BLS</button>
                    <button className=' rounded-lg border  bg-white font-bold text-3xl text-purple-500'>BLS</button>
                    </div>
                  
                </div>
            </div>

        </div>
    );
};

export default AppDown;