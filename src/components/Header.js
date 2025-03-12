/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll';
// import logo
// import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <Link to='home'>
         <h2 className="font-bold opacity-80 font-mono text-sm pl-4">ICC
         <span className="text-green-500">.Inc</span></h2>
        </Link>

        {/* button */}
        <button className='text-green-300 bg-[#09152b] hover:bg-primary/90 px-3 py-1 font-normal text-sm rounded shadow'>
          <Link to="work">Portfolio</Link> </button>
      </div>
    </div>
  </header>;
};

export default Header;