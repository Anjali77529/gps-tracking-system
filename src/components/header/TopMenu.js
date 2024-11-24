import React from 'react';

const TopMenu = ({ companyName, imageUrl }) => {
    const login = false ;
  return (
    <>
        <section className="top-bar color-scheme">
            <div className="container">
                <div className="left-text nav-left pull-left">
                    <p><span>Opening Hours :</span> 24*7 , to serve you.</p>
                </div>
                
                <ul className="nav-right pull-right list-unstyled">
                { login ? (
                    <li className="dropdown nav-profile">
                        <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">
                        <img className="img-circle resize" alt="" src="images/avatar.jpg" />
                        <span className="hidden-xs small-padding">
                            <span>Umair</span> <i className="fa fa-caret-down"></i>
                        </span>
                        </a>
                        <ul className="dropdown-menu with-arrow pull-right">
                        <li>
                            <a href="profile.html">
                            <i className="fa fa-user"></i> <span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="history.html">
                            <i className="fa fa-check"></i> <span>Tracking History</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            <i className="fa fa-lock"></i> <span>Payment Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            <i className="fa fa-sign-out"></i> <span>Log Out</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                ) : (
                    <>
                        <li>
                        <a href="login.html"><i className="fa fa-lock"></i> Login </a>
                        </li>
                        <li>
                        <a href="sign-up.html"><i className="fa fa-user"></i> Sign Up </a>
                        </li>
                    </>
                )}
              
                
                
            </ul>
            </div>
        </section>
    </>
  );
};

export default TopMenu;