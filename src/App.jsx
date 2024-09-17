import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marques from './components/Marques'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Customcursor from './components/Customcursor'
import Loader from './components/Loader'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='text-white cursor-none font min-h-screen w-full bg-black select-none'>
      <Loader/>
      <Customcursor />
      <Navbar />
      <Work />
      <div className='flex w-full overflow-hidden'>
        <Stripes/>
        <Stripes/>
      </div>
      <Products/>
      <Marques/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App