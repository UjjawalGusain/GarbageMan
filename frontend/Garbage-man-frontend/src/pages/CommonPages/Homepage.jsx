import React from 'react'
import './Homepage.css'
import Navbar from '../../components/Homepage/Navbar'
import InfiniteScroll from '../../components/Homepage/InfiniteScroll'
import Footer from '../../components/Homepage/Footer'

const Homepage = () => {
  return (
    <div className='page'>
      <Navbar/>
      <InfiniteScroll/>
      <Footer/>
    </div>
  )
}

export default Homepage