/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo
// import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
         <h2 className="font-bold opacity-80 font-mono text-sm pl-4">Billionaire
         <span className="text-accent">.prof</span></h2>
        </a>

        {/* button */}
        <button className='btn btn-sm'>
          <a href="https://kansas.zoom.us/meeting/register/">Attend my Event</a></button>
      </div>
    </div>
  </header>;
};

export default Header;