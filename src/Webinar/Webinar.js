import React from 'react';

const Webinar = () => {
    return (
        <div >
            <div class='mt-6 mb-8'>
                <h1 class='text-center text-3xl font-bold'>Join Our Webinar</h1>
                <h1 class='text-center text-xl '>Explore our global classroom and learn from our experts</h1>
            </div>
            <div class='flex justify-evenly text-white bg-[#656565] ml-20 mr-5'>
           
            <button className="btn  bg-[#8013ac]">Medical</button>
            <button className="btn btn-ghost">Buisness</button>
            <button className="btn btn-ghost">It</button>
            <button className="btn btn-ghost">Software</button>
            <button className="btn btn-ghost">Marketing</button>
            <button className="btn btn-ghost">Finance</button>
            <button className="btn btn-ghost">Softskill</button>
            <button className="btn btn-ghost">Programming</button>
            <button className="btn btn-ghost">Language</button>
            <button className="btn btn-ghost">Wellness</button>
    
            </div>
        </div>
    );
};

export default Webinar;