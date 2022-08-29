import React from 'react';
import images1 from '../../images/Navbari/DOC.png'
import cart from '../../images/Navbari/cart.png'
import globe from '../../images/Navbari/globe.png'
import JW from '../../images/Navbari/JW.png'

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div className='justify-start'>
        <img src={images1} />
        <div className='flex items-center ml-5'>
          <h4>Categories</h4>
          <div class="form-control ml-5">
            <input type="text" placeholder="Search" class="input input-bordered w-[45rem] rounded-full" />
          </div>
        </div>

      </div>
      <div class="navbar-end">
        <div className='flex space-x-5 items-center'>
          <h4>Be a Instructor</h4>
          <h4>My courses</h4>
          <img src={cart} />
          <img src={globe} />
          <img src={JW} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;