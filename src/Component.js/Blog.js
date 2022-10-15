import React from 'react'
import { Blogdata } from './Sdata'

function bdata(bval)
{
    return(
        <>
                <div className="col-md-4 padding-15">
                     <div className="blog-post">
                        <img src={bval.Blogimgsrc} alt="blog post"/>
                            <div className="blog-content">
                                 <span className="date"><i className="fa fa-clock-o"></i> {bval.Blogdate}</span>
                                        <h3><a href="/">{bval.Blogtitle}</a></h3>
                                        <p>{bval.Blogdescription}</p>
                                        <a href="/" className="post-meta">{bval.Bloglink}</a>
                            </div>
                    </div>
                 </div>
        </>
    );
}

export default function Blog() {
  return (
   <>
    <section className="blog-section bg-grey bd-bottom padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <h2>Recent Stories</h2>
                    <span className="heading-border"></span>
                    <p>Help today because tomorrow you may be the one who <br/> needs more helping!</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 xs-padding">
                        <div className="blog-items grid-list row">
                            {Blogdata.map(bdata)}
                        </div>
                    </div>
            </div>
            </div>
        </section>
   </>
  )
}
