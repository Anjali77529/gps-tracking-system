import React from "react";

const TrackingAppSection = () => {
  return (
    <section
      className="parallex our-app section-padding-100"
      //   style={{ paddingTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          {/* Section Content */}
          <div className="section-content">
            {/* Image Section */}
            <div className="col-md-5 col-sm-4">
              <img
                alt="Phone"
                className="img-absolute"
                src="images/phone.png"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-7 col-sm-8 text-left">
              <h3>Download Our Tracking App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua. Lorem
                ipsum dolor sit amet, eiusmod tempor dolore aliqua. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt.
              </p>
              <ul className="list-inline">
                <li>
                  <a href="#" className="btn btn-bordered">
                    <i className="fa fa-apple"></i> iPhone
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-bordered">
                    <i className="fa fa-android"></i> Android
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-bordered">
                    <i className="fa fa-windows"></i> Windows
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingAppSection;
