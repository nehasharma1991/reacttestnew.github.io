import React from 'react'
import { Aboutdata } from './Sdata'

function abtcard(abval)
{
 return(
    <div className="col-md-6 xs-padding">
    <img src={abval.imgsrc} alt="about-thumb"/>
    <h3>{abval.titlenew}</h3>
    <p>{abval.descriptionnew}</p>
    <a href="/" className="default-btn">Read More</a>
</div>
 );
}
export default function About() {
  return (
    <>
        <section className="about-section bd-bottom shape circle padding">
            <div className="container">
                <div className="row">
                   <div className="col-md-4 xs-padding">
                        <div className="profile-wrap">
                            <img className="profile" src="img/profile.jpg" alt="profile"/>
                            <h3>Jonathan Smith <span>CEO & Founder of Charitify.</span></h3>
                            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                            <img src="img/sign.png" alt="sign"/>
                        </div>
                    </div>
                    <div className="col-md-8 xs-padding">
                        <div className="about-wrap row">
                            {Aboutdata.map(abtcard)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
