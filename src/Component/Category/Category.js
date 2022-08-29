import React from 'react';
import u from '../../images/Category/Unkown.png'
import u1 from '../../images/Category/Unkown (1).png'
import u2 from '../../images/Category/Unkown (2).png'
import u3 from '../../images/Category/Unkown (3).png'
import u4 from '../../images/Category/Unkown (4).png'
import u5 from '../../images/Category/Unkown (5).png'

const Category = () => {
    return (

        <div class='my-20'>
              
              <div class='mt-6 mb-8'>
                <h1 class='text-center text-3xl font-bold'>Choose a Category</h1>
                <h1 class='text-center text-xl '>Enrich your knowledge with our empowering catalog</h1>
            </div>
            <div class='grid grid-cols-3 gap-4  mx-20'>
                <div class=" image-full">
                    <figure><img src={u} alt="card" /></figure>

                </div>

                <div class=" image-full">
                    <figure><img src={u1} alt="card" /></figure>

                </div>

                <div class=" image-full">
                    <figure><img src={u2} alt="card" /></figure>

                </div>

                <div class=" image-full">
                    <figure><img src={u3} alt="card" /></figure>

                </div>

                <div class=" image-full">
                    <figure><img src={u4} alt="card" /></figure>

                </div>

                <div class=" image-full">
                    <figure><img src={u5} alt="card" /></figure>

                </div>


            </div>
        </div>
    );
};

export default Category;