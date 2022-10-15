import React from 'react'

export default function Event() {
  return (
    <>
     <section className="events-section bg-grey bd-bottom padding">
           <div className="container">
                <div className="section-heading text-center mb-40">
                    <h2>Upcoming Events</h2>
                    <span className="heading-border"></span>
                    <p>Help today because tomorrow you may be the one who <br/> needs more helping!</p>
                </div>
                <div id="event-carousel" className="events-wrap owl-Carousel">
                    <div className="events-item">
                        <div className="event-thumb">
                           <img src="img/events-1.jpg" alt="events"/>
                        </div>
                        <div className="event-details">
                            <h3>Let's talk about the poor children.</h3>
                            <div className="event-info">
                                <p><i className="ti-calendar"></i>Started On: 12:00 PM.</p>
                                <p><i className="ti-location-pin"></i>Grand Mahal, Dubai 2100.</p>
                            </div>
                            <p>Help today because tomorrow you may be the one who needs more helping!</p>
                            <a href="/" className="default-btn">Read More</a>
                        </div>
                    </div>
                    <div className="events-item">
                        <div className="event-thumb">
                           <img src="img/events-2.jpg" alt="events"/>
                        </div>
                        <div className="event-details">
                            <h3>Insure clean water to everyone in Africa.</h3>
                            <div className="event-info">
                                <p><i className="ti-calendar"></i>Started On: 12:00 PM.</p>
                                <p><i className="ti-location-pin"></i>Grand Mahal, Dubai 2100.</p>
                            </div>
                            <p>Help today because tomorrow you may be the one who needs more helping!</p>
                            <a href="/" className="default-btn">Read More</a>
                        </div>
                    </div>
                    <div className="events-item">
                        <div className="event-thumb">
                           <img src="img/events-3.jpg" alt="events"/>
                        </div>
                        <div className="event-details">
                            <h3>Nepal Earthquake Clean Water Initiative.</h3>
                            <div className="event-info">
                                <p><i className="ti-calendar"></i>Started On: 12:00 PM.</p>
                                <p><i className="ti-location-pin"></i>Grand Mahal, Dubai 2100.</p>
                            </div>
                            <p>Help today because tomorrow you may be the one who needs more helping!</p>
                            <a href="/" className="default-btn">Read More</a>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    </>
  )
}
