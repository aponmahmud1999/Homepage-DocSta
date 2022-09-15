import React from 'react';
import img from '../Clients/circle.png'
import img1 from '../Clients/circle (1).png'
import img2 from '../Clients/circle (2).png'
import img3 from '../Clients/circle (3).png'
import img4 from '../Clients/circle (4).png'
import img5 from '../Clients/circle (6).png'



const Clients = () => {
    return (
        <div>
            <div class='text-center mt-20'>
               <h1 className='text-5xl font-bold mb-2'>
                Our Clients
               </h1>
               <h1 class='text-2xl font-bold text-slate-400 mb-10'>
                Teams that trust our passion
               </h1>
            </div>
            <div className='flex justify-between mx-20 '>
               <img class='btn btn-ghost btn-lg' src={img}/>
               <img class='btn btn-ghost btn-lg' src={img1}/>
               <img class='btn btn-ghost btn-lg' src={img2}/>
               <img class='btn btn-ghost btn-lg' src={img3}/>
               <img class='btn btn-ghost btn-lg' src={img4}/>
               <img class='btn btn-ghost btn-lg' src={img5}/>
            </div>
        </div>
    );
};

export default Clients;