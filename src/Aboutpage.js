import React from 'react'
import Header from './Component.js/Header';
import Footer from './Component.js/Footer';
import Subheader from './Component.js/Subheader';
import Team from './Component.js/Team';
import Counter from './Component.js/Counter';
import Sponser from './Component.js/Sponser';
import Aboutinner from './Component.js/Aboutinner';
export default function Aboutpage() {
  return (
    <>
    <Header email="Info@YourDomain.com" mobile="+(333) 052 39876" />
    <Subheader title ="About Us" desc={["Help today because tomorrow you may be the one who", <br/>,"needs more helping!"] }link="About Us"/>
    <Aboutinner/>
    <Team/>
    <Counter/>
    <Sponser/>
    <Footer/>
    </>
  );
}
