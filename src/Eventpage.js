import React from 'react'
import Header from './Component.js/Header'
import Event from './Component.js/Event'
import Subheader from './Component.js/Subheader'
import Footer from './Component.js/Footer'
import Join from './Component.js/Join'
import Blog from './Component.js/Blog'
import Sponser from './Component.js/Sponser'

export default function Eventpage() {
  return (
    <>
    <Header email="Info@YourDomain.com" mobile="+(333) 052 39876" />
    <Subheader title ="Upcoming Events" desc={["Help today because tomorrow you may be the one who", <br/>,"needs more helping!"] }link="EVENTS"/>
    <Event/>
    <Join/>
    <Blog/>
    <Sponser/>
    <Footer/>
    </>
  )
}
