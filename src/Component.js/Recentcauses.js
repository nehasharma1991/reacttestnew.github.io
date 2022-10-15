import React from 'react'
import Subrecentcauses from './Subrecentcauses'

export default function Recentcauses() {
  return (
    <div>
      <section className="causes-section bg-grey bd-bottom padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <h2>Recent Causes</h2>
                    <span className="heading-border"></span>
                    <p>Help today because tomorrow you may be the one who <br/> needs more helping!</p>
                </div>
                <div className="causes-wrap row">
                   <Subrecentcauses  img="img/causes-1.jpg" donate="Donate Now" title="First charity activity of this summer." description="Help today because tomorrow you may be the one who needs more helping!" goals="Goal: $45000" raised="Raised: $5000" read="Read More" width="25%"/>
                   <Subrecentcauses img="img/causes-2.jpg" donate="Donate Now" title="Big charity: build school for poor children." description="Help today because tomorrow you may be the one who needs more helping!" goals="Goal: $45000" raised="Raised: $5000" read="Read More" width="45%"/>
                   <Subrecentcauses img="img/causes-3.jpg" donate="Donate Now" title="Building clean-water system for rural poor." description="Help today because tomorrow you may be the one who needs more helping!" goals="Goal: $45000" raised="Raised: $5000" read="Read More" width="75%"/>
                </div>
            </div>
        </section>
    </div>
  )
}
