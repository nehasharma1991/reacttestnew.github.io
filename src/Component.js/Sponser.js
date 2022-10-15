import React from 'react'
import { Sponserdata } from './Sdata'


function Spcard(spval)
{
    return(
        <>
            <li className="sponsor-item">
                        <img src={spval.Simg} alt=""/>
            </li>
        </>
    )
}

export default function Sponser() {
  return (
    <>
        <div className="sponsor-section bd-bottom">
            <div className="container">
                <ul id="sponsor-carousel" className="sponsor-items owl-carousel">
                    {Sponserdata.map(Spcard)}
                </ul>
            </div>
        </div>
    </>
  )
}
