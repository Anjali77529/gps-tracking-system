import React from 'react';


const MainMenu = ({ companyName, imageUrl }) => {
  return (
    <>
        <header className="header-area">
            <div className="navigation">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button aria-expanded="false" data-target="#main-navigation" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index-2.html">
                                <img alt="" src={imageUrl} className="img-responsive" /> 
                            </a>
                        </div>

                        <div id="main-navigation" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right custom-nav">
                                <li className=" hidden-sm"><a to="/">Home</a></li>
                                
                                <li className="dropdown"><a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">About Company <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about.html">About </a> </li>
                                        <li><a href="about-1.html">About 2</a> </li>
                                    </ul>
                                </li>
                                <li className="dropdown"> <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">Our Service <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="services.html">Services</a> </li>
                                        <li><a href="services-2.html">Services 2</a> </li>
                                        <li><a href="services-3.html">Services 3</a> </li>
                                        <li><a href="services-4.html">Services 4 (Sticky Bar)</a> </li>
                                        <li><a href="services-details.html">Services Detail</a> </li>
                                    </ul>
                                </li>
                                <li className=" hidden-sm"><a href="gallery.html">Gallery</a></li>
                                <li className="dropdown"><a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">Blog <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="blog.html">Grid View </a> </li>
                                        <li><a href="blog-1.html">Right Sidebar With 2 Column</a> </li>
                                        <li><a href="blog-2.html">Left Sidebar With 2 Column</a> </li>
                                        <li><a href="blog-3.html">Masonry Grid</a> </li>
                                        <li><a href="blog-detail.html">Post With Slider</a> </li>
                                        <li><a href="blog-detail-2.html">Post With Static Bg</a> </li>
                                        <li><a href="blog-detail-3.html">Post Full Width</a> </li>
                                    </ul>
                                </li>
                                <li className="dropdown"> <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">Pages <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="404.html">Error Page</a> </li>
                                        <li><a href="team.html">Our Team </a> </li>
                                        <li><a href="icons.html">Icons</a> </li>
                                        <li><a href="flat-icons.html">Flat Icons</a> </li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="login.html">Sign In</a></li>
                                        <li><a href="sign-up.html">Sign Up</a></li>
                                        <li><a href="profile.html">Profile</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"> <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">Cargo Tracking <span className="fa fa-angle-down"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="index-5.html">Tracking Landing Page</a> </li>
                                        <li><a href="index-6.html">Tracking Classic Page </a> </li>
                                        <li><a href="history.html">Tracking Order History</a> </li>
                                        <li><a href="online-booking.html">Cargo Booking</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                   
                    </div>
                </nav>
            </div>
        </header>       
    </>
  );
};

export default MainMenu;