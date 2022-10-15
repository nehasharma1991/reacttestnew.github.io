import React from 'react'
export default function Subrecentcauses(props) {
return (
<>
   <div className="col-md-4 xs-padding">
      <div className="causes-content">
         <div className="causes-thumb">
            <img src={props.img} alt="causes"/>
            <a href="/" className="donate-btn">{props.donate}<i className="ti-plus"></i></a>
            <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width:`${props.width}`,ariaValueNow:'25',ariaValueMin:'0',ariaValueMax:'100'}}><span className="wow cssanimation fadeInLeft">{props.width}</span></div>
            </div>
         </div>
         <div className="causes-details">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="donation-box">
               <p><i className="ti-bar-chart"></i>{props.goals}</p>
               <p><i className="ti-thumb-up"></i>{props.raised}</p>
            </div>
            <a href="/" className="read-more">{props.read}</a>
         </div>
      </div>
   </div>
 
</>
)
}