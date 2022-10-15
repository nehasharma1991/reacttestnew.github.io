import React from 'react'
import Blog from './Component.js/Blog'
import Featured from './Component.js/Featured'
import Footer from './Component.js/Footer'
import Header from './Component.js/Header'
import Recentcauses from './Component.js/Recentcauses'
import Subheader from './Component.js/Subheader'
import Testimonial from './Component.js/Testimonial'


export default function Causespage() {
  return (
    <>
    <Header email="Info@YourDomain.com" mobile="+(333) 052 39876" />
    <Subheader title ="Recent Causes" desc={["Help today because tomorrow you may be the one who", <br/>,"needs more helping!"] }link="Recent Causes"/>
    <Recentcauses/>
    <Featured/>
    <Testimonial/>
    <Blog/>
    <Footer/>
    </>
  )
}
