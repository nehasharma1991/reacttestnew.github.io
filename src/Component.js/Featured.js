import React from 'react'

export default function Featured() {
  return (
    <section className="campaigns-section bd-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 xs-padding">
                        <div className="campaigns-wrap">
                            <h4>Featured Campaigns</h4>
                            <h2>Featured project to built a School.</h2>
                            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width:'35%', ariaValueNow:'25', ariaValueMin:'0', ariaValueMax:'100'}}><span className="wow cssanimation fadeInLeft">35%</span></div>
                            </div>
                            <div className="donation-box">
                                <h3><i className="ti-bar-chart"></i>Goal: $450000</h3>
                                <h3><i className="ti-thumb-up"></i>Raised: $55000</h3>
                            </div>
                            <a href="/" className="default-btn">Donate Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 xs-padding">
                        <div className="video-wrap">
                            <img src="img/video.jpg" alt="video"/>
                            <div className="play">
                                <a className="img-popup" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=_IlLwfC2dNc"><i className="ti-control-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
