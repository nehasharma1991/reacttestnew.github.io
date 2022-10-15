import React from 'react'

export default function Slider() {
  return (
    <>
      <section className="slider-section">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="/carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="/carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="/carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="./img/slider-1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <div className="slider-text">
                 <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                 <h1 className="wow cssanimation leFadeInRight sequence">Better Life for People</h1>
                 <p className="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                 <a href="/" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                <a href="/" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
            </div>
            </div>
            </div>
            <div className="carousel-item">
            <img src="./img/slider-2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <div className="slider-text">
                <h1 className="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Together we  <br/>can make a Difference</h1>
                 <p className="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                 <a href="/" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                <a href="/" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
             </div>
            </div>
            </div>
            <div className="carousel-item">
            <img src="./img/slider-3.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <div className="slider-text">
                <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                <h1 className="wow cssanimation lePushReleaseFrom sequence" data-wow-delay="1s">Give a little. Change a lot.</h1>
                <p className="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br/>Forget what you can get and see what you can give.</p>
                <a href="/" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                <a href="/" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donet Now</a>
            </div>
            </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-target="/carouselExampleCaptions" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="/carouselExampleCaptions" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </button> */}
        </div>
        </div>
        </section>
    </>
    
   
  )
}
