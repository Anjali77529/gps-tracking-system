import React from "react";

const ServicesSection = () => {
  return (
    <section className="custom-padding services">
      <div className="container">
        {/* Title Section */}
        <div className="main-heading text-center">
          <h2>our services</h2>
          <p>
            Cras varius purus in tempus porttitor ut dapibus efficitur sagittis
            cras vitae lacus metus nunc vulputate facilisis nisi <br /> eu
            lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus
            velit
          </p>
        </div>
        {/* End Title Section */}

        {/* Row */}
        <div className="row">
          <div id="services">
            {/* Service Items */}
            <div className="col-md-4 col-sm-6 item">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-box-of-packing-for-delivery"></i>
                </div>
                <h4>packaging and storage</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 item">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-ocean-transportation"></i>
                </div>
                <h4>cargo</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 item">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-delivery-truck"></i>
                </div>
                <h4>worldwide transport</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 item">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-view-symbol-on-delivery-opened-box"></i>
                </div>
                <h4>ware housing</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 item">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-sea-ship-with-containers"></i>
                </div>
                <h4>Sea Freight</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 item">
              <div className="services-grid">
                <div className="icons">
                  <i className="flaticon-delivery-truck-with-packages-behind"></i>
                </div>
                <h4>Door To Door Delivery</h4>
                <p>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>
            {/* Service Items End */}
          </div>
        </div>
        {/* Row End */}
      </div>
      {/* End Container */}
    </section>
  );
};

export default ServicesSection;
