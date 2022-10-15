import React from 'react'
import Sdata from './Sdata';

function ncard(val)
{
 return(
    <div className="col-md-4 col-sm-6 xs-padding">
    <div className="promo-content">
        <img src={val.imgSrc} alt="prmo icon"/>
        <h3>{val.title}</h3>
        <p>{val.description}</p>
        <a href={val.link}>Read More</a>
        
    </div>
</div> 
 );
}
export default function SubPromo() {
  return (
    <div className='subPromotional'>
    <div className='row'>
    {Sdata.map(ncard)}

    </div>
       
    </div>
  )
};
