import React from 'react';
import icon1 from '../Courses/Group 4807.png'
import img1 from '../Courses/C1.png'
import img2 from '../Courses/c2.png'
import img3 from '../Courses/c3.png'
import icon from '../Courses/group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faGift, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Courses = () => {
  return (
    <div className=''>
      <div class='mt-6 mb-8'>
        <h1 class='text-center text-3xl'>Highly Popular Courses</h1>
      </div>
      <div className='flex justify-evenly'>
        <button className="btn btn-ghost">Medical</button>
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

      <div className='mt-7 flex gap-4 justify-between  ml-10 mr-10'>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src={img1} alt="Shoes" /></figure>
          <div class="card-body">

            <div class="badge badge-secondary">NEW</div>

            <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
            <div className='flex'>
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src={icon} />
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
              <img src={icon1} alt='' className='my-auto' />
            </div>
            <div class="divider"></div>
            <div className='flex justify-between'>
              <p className='ml-5' >🕒1hr 30mins</p>
              <p className=' mr-5'>🔽 100 sessions</p>
            </div>

          </div>
        </div>
      



      <div className='shadow-2xl'>
        <div className='bg-[#7f13ab] justify-items-center p-7 '>
          <h1 className='text-xl text-white'>CPR Adult-Rescouing a adult who is unconcious</h1>
        </div>
        <div className='p-7'>
        <div className='mt-1'>Update 12 hours</div>
        <div className='flex justify-between text-sm my-3'>
          <h1 class="badge badge-secondary">Best Seller</h1>
          <h1>.2 total hours</h1>
          <h1>.All Levels</h1>
          <h1>.Subtitles</h1>
        </div>
        <div className=''>
          <h1 className='text-[#7f13ab] mt-3'>What you'll learn</h1>
          <h1 className='mt-3'><FontAwesomeIcon icon={faCheck}  />You will be able to perform CPR<br/>(according to the latest guidelines).</h1>
          <h1 className='mt-3'><FontAwesomeIcon icon={faCheck} />You will be able to perform CPR<br/>(according to the latest guidelines).</h1>
          <h1 className='mt-3'><FontAwesomeIcon icon={faCheck} />You will be able to perform CPR<br/>(according to the latest guidelines).</h1>
          <h1 className='mt-3'><FontAwesomeIcon icon={faCheck} />You will be able to perform CPR<br/>(according to the latest guidelines).</h1>

        </div>
        <div className='flex justify-evenly mt-4'>
          <h1><FontAwesomeIcon icon={faShoppingCart} /></h1>
          <button className="btn px-14  bg-[#7f13ab]">Button</button>
          <h1><FontAwesomeIcon icon={faGift} /></h1>
        </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img2} alt="Shoes" /></figure>
        <div class="card-body">

          <div class="badge badge-secondary">NEW</div>

          <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
          <div className='flex'>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={icon} />
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
            <img src={icon1} alt='' className='my-auto' />
          </div>
          <div class="divider"></div>
          <div className='flex justify-between'>
            <p className='ml-5' >🕒1hr 30mins</p>
            <p className=' mr-5'>🔽 100 sessions</p>
          </div>

        </div>
      </div>



      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img3} alt="Shoes" /></figure>
        <div class="card-body">

          <div class="badge badge-secondary">NEW</div>

          <p>ACLS- Lorem ips dolor sit amet sit amet Lorem ips dotor</p>
          <div className='flex'>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={icon} />
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
            <img src={icon1} alt='' className='my-auto' />
          </div>
          <div class="divider"></div>
          <div className='flex justify-between'>
            <p className='ml-5' >🕒1hr 30mins</p>
            <p className=' mr-5'>🔽 100 sessions</p>
          </div>

        </div>
      </div>
      </div>





    </div>
  );
};

export default Courses;