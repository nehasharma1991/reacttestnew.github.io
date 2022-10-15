import React from 'react'
import { Teamnew } from './Sdata'

function nteam(teamval)
{
    return(
        <>
            <div className="col-md-6">
                  <div className="team-details">
                     <img src={teamval.teamImg} alt="team"/>
                     <div className="hover">
                        <h3>{teamval.teamTitle}</h3>
                     </div>
                  </div>
               </div> 
        </>

    );
}

export default function Team() {
return (
<>
<section className="team-section bg-grey bd-bottom circle shape padding">
   <div className="container">
      <div className="section-heading text-center mb-40">
         <h2>Meet Out Volunteers</h2>
         <span className="heading-border"></span>
         <p>Help today because tomorrow you may be the one who <br/> needs more helping!</p>
      </div>
      <div className="team-wrapper row">
         <div className="col-lg-6 sm-padding">
            <div className="team-wrap row">
            {Teamnew.map(nteam)}
            </div>
         </div>
         <div className="col-lg-6 sm-padding">
            <div className="team-content">
               <h2>Become a Volunteer?</h2>
               <h3>Join your hand with us for a better life and beautiful future.</h3>
               <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
               <ul className="check-list">
                  <li><i className="fa fa-check"></i>We are friendly to each other.</li>
                  <li><i className="fa fa-check"></i>If you join with us,We will give you free training.</li>
                  <li><i className="fa fa-check"></i>Its an opportunity to help poor children.</li>
                  <li><i className="fa fa-check"></i>No goal requirements.</li>
                  <li><i className="fa fa-check"></i>Joining is tottaly free. We dont need any money from you.</li>
               </ul>
               <a href="/" className="default-btn">Join With Us</a>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}