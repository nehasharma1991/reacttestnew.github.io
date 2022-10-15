import React from 'react'
import { Link } from 'react-router-dom'

export default function Aboutinner() {
  return (
    <section class="about-section bg-grey bd-bottom padding">
    <div class="container">
        <div class="row about-wrap">
            <div class="col-md-6 xs-padding">
                <div class="about-image">
                    <img src="img/about.jpg" alt=""/>
                </div>
            </div>
            <div class="col-md-6 xs-padding">
                <div class="about-content">
                    <h2>You are definitely intrigued to <br/> discover who we are.</h2>
                    <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                    <Link to ="/about">More About Us</Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
