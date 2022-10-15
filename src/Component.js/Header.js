import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div className='commonHeader'>
      <div className="site-preloader-wrap">
            <div className="spinner"></div>
        </div>
        
        <header id="header" className="header-section">
            <div className="top-header">
                <div className="container">
                    <div className="top-content-wrap row">
                        <div className="col-sm-8">
                            <ul className="left-info">
                                <li><a href="/"><i className="ti-email"></i>{props.email}</a></li>
                                <li><a href="/"><i className="ti-mobile"></i>{props.mobile}</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 d-none d-md-block">
                            <ul className="right-info">
                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="/"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-header">
                <div className="container">
                    <div className="bottom-content-wrap row">
                        <div className="col-sm-4">
                            <div className="site-branding">
                                <Link to ="/"><img src="img/logo.png" alt="Brand"/></Link>
                            </div>
                        </div>
                       <div className="col-sm-8 text-right">
                           <ul id="mainmenu" className="nav navbar-nav nav-menu">
                                <li className="active"><Link to="/">Home</Link> </li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to ="/causes">Causes</Link></li>
                                <li><Link to="/event">Event</Link></li>
                                <li> <Link to ="/contact">Contact</Link></li>
                            </ul>
                            <Link to="/" className="default-btn">Donet Now</Link>
                       </div>
                    </div>
                </div>
            </div>
        </header>
        
        <div className="header-height"></div>
    </div>
  )
}
