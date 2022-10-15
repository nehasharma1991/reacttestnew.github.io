import React from 'react'
import Slider from './Slider'
import Promo from './Promo'
import Recentcauses from './Recentcauses'
import Featured from './Featured'
import About from './About'
import Team from './Team'
import Counter from './Counter'
import Event from './Event'
import Testimonial from './Testimonial'
import Blog from './Blog'
import Sponser from './Sponser'


export default function Homepage() {
  return (
   <>
   <Slider/>
      <Promo />
      <Recentcauses />
      <About />
      <Featured />
      <Team />
      <Counter />
      <Event />
      <Testimonial />
      <Blog/>
    <Sponser/>
   </>
  );
}
