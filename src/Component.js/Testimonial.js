import React from 'react'

export default function Testimonial() {
  return (
   <>
     <section className="testimonial-section bd-bottom padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <h2>What People Say</h2>
                    <span className="heading-border"></span>
                    <p>Help today because tomorrow you may be the one who <br/> needs more helping!</p>
                </div>
                <div id="testimonial-carousel" className="testimonial-carousel owl-carousel">
                    <div className="testimonial-item">
                        <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                        <div className="testi-footer">
                           <img src="img/team-1.jpg" alt="profile"/>
                            <h4>Jonathan Smith <span>Marketer</span></h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                        <div className="testi-footer">
                           <img src="img/team-2.jpg" alt="profile"/>
                            <h4>Angelina Rose <span>Designer</span></h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                        <div className="testi-footer">
                           <img src="img/team-3.jpg" alt="profile"/>
                            <h4>Taylor Swift <span>Developer</span></h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                        <div className="testi-footer">
                           <img src="img/team-4.jpg" alt="profile"/>
                            <h4>Michel Brown <span>Programer</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}
