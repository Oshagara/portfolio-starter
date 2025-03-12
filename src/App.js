import React from 'react';
// components
import Banner from './components/Banner';
// import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-no-repeat bg-contain overflow-hidden'>
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
