import React from 'react'
import { Link } from 'react-router-dom'

export default function Join() {
  return (
   <>
    <section className="cta-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                       <div className="cta-content">
                           <h2>Ready to Join With Us?</h2>
                            <p>The secret to happiness lies in helping others. Never underestimate the difference <br/> the abused and the helpless.</p>
                       </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center text-right">
                       <Link to="contact" className="default-btn">Contact With Us</Link>
                    </div>
               </div>
            </div>
        </section>
   </>
  )
}
