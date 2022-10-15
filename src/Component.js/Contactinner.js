import React from 'react'
export default function Contactinner() {
return (
<>
<section className="contact-section padding">
   <div id="google_map"></div>
   <div className="container">
      <div className="row contact-wrap">
         <div className="col-md-6 xs-padding">
            <div className="contact-info">
               <h3>Get in touch</h3>
               <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
               <p>The secret to happiness lies in helping others. Never underestimate the difference.</p>
               <ul>
                  <li><i className="ti-location-pin"></i> 315 West 33rd Street New York, NY 10001</li>
                  <li><i className="ti-mobile"></i> +1 212 425 8617, +1 212 425 8533</li>
                  <li><i className="ti-email"></i> Youremail@companyname.com</li>
               </ul>
            </div>
         </div>
         <div className="col-md-6 xs-padding">
            <div className="contact-form">
               <h3>Drop us a line</h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <form action="contact.php" method="post" id="ajax_form" className="form-horizontal">
                  <div className="form-group colum-row row">
                     <div className="col-sm-6">
                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
                     </div>
                     <div className="col-sm-6">
                        <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
                     </div>
                  </div>
                  <div className="form-group row">
                     <div className="col-md-12">
                        <textarea id="message" name="message" cols="30" rows="5" className="form-control message" placeholder="Message" required></textarea>
                     </div>
                  </div>
                  <div className="form-group row">
                     <div className="col-md-12">
                        <button id="submit" className="default-btn" type="submit">Send Message</button>
                     </div>
                  </div>
                  <div id="form-messages" className="alert" role="alert"></div>
               </form>
            </div>
         </div>
      </div>
   </div>
</section>
</>
);
}