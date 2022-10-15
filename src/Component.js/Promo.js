import React from 'react'
import SubPromo from './Subpromo.js'

export default function Promo() {
  return (
    <div className='promotion'>
      <section className="promo-section bd-bottom">
            <div className="promo-wrap">
               <div className="container">
                    <div className="row">
                        <SubPromo/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
