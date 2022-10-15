import React from 'react'
import Header from './Component.js/Header'
import Subheader from './Component.js/Subheader'
import Contactinner from './Component.js/Contactinner'
import Footer from './Component.js/Footer'

export default function Contactpage() {
  return (
    <>
         <Header email="Info@YourDomain.com" mobile="+(333) 052 39876" />
    <Subheader title ="Contact With Us" desc={["Help today because tomorrow you may be the one who", <br/>,"needs more helping!"] }link="CONTACT"/>
    <Contactinner/>
    <Footer/>
    </>
  )
}
