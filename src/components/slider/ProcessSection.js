import React from "react";

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding-80">
      <div className="container">
        {/* Title Section */}
        <div className="main-heading text-center">
          <h2>OUR Process</h2>
          <p>
            Cras varius purus in tempus porttitor ut dapibus efficitur sagittis
            cras vitae lacus metus nunc vulputate facilisis nisi <br /> eu
            lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus
            velit
          </p>
        </div>
        {/* End Title Section */}

        {/* Process Steps */}
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 our-process process-steps text-left">
            <ul>
              <li>
                <span className="process-icon">
                  <i className="flaticon-man-standing-with-delivery-box"></i>
                </span>
                <div className="process-detail">
                  <h3>Step: 1</h3>
                  <h2>Create Your Account</h2>
                  <div className="clearboth"></div>
                </div>
              </li>
              <li>
                <span className="process-icon">
                  <i className="flaticon-commercial-delivery-symbol-of-a-list-on-clipboard-on-a-box-package"></i>
                </span>
                <div className="process-detail">
                  <h3>Step: 2</h3>
                  <h2>Place Your Order</h2>
                  <div className="clearboth"></div>
                </div>
              </li>
              <li>
                <span className="process-icon">
                  <i className="flaticon-delivery-worker-giving-a-box-to-a-receiver"></i>
                </span>
                <div className="process-detail">
                  <h3>Step: 3</h3>
                  <h2>We Collect It</h2>
                  <div className="clearboth"></div>
                </div>
              </li>
              <li>
                <span className="process-icon">
                  <i className="flaticon-logistics-delivery-truck-in-movement"></i>
                </span>
                <div className="process-detail">
                  <h3>Step: 4</h3>
                  <h2>Delivered</h2>
                  <div className="clearboth"></div>
                </div>
              </li>
              <div className="clearfix"></div>
            </ul>
          </div>
        </div>
        {/* Process Steps End */}
      </div>
      {/* End Container */}
    </section>
  );
};

export default ProcessSection;
