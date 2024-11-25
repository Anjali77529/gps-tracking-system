import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="section-padding-70 gray" id="why-choose">
      <div
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        {" "}
        <div className="container">
          <div className="row clearfix">
            {/* Left Column */}
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="about-title">
                <h3>More about us</h3>
                <h2>Why People Choose Us</h2>
                <p>
                  Ut consequat velit a metus accumsan, vel tempor nulla blandit.
                  Integer euismod magna vel mi congue suscipit. Praesent quis
                  facilisis neque. Donec scelerisque nibh vitae sapien ornare
                  efficitur.
                </p>
              </div>
              <div className="choose-services">
                <ul className="choose-list">
                  {/* Feature */}
                  <li>
                    <div className="choose-box">
                      <span className="iconbox">
                        <i className="flaticon-logistics-delivery-truck-and-clock"></i>
                      </span>
                      <div className="choose-box-content">
                        <h4>Fast Worldwide delivery</h4>
                        <p>
                          Donec dignissim enim id urna fermentum, non hendrerit
                          sem volutpat ellentesque pretium sapien nec metus.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Feature */}
                  <li>
                    <div className="choose-box">
                      <span className="iconbox">
                        <i className="flaticon-woman-with-headset"></i>
                      </span>
                      <div className="choose-box-content">
                        <h4>Safety & Compliance</h4>
                        <p>
                          Donec dignissim enim id urna fermentum, non hendrerit
                          sem volutpat ellentesque pretium sapien nec metus.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Feature */}
                  <li>
                    <div className="choose-box">
                      <span className="iconbox">
                        <i className="flaticon-24-hours-symbol"></i>
                      </span>
                      <div className="choose-box-content">
                        <h4>24/7 Support</h4>
                        <p>
                          Donec dignissim enim id urna fermentum, non hendrerit
                          sem volutpat ellentesque pretium sapien nec metus.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="quotation-box-1" style={{ paddingTop: "50px" }}>
                <h2>REQUEST A QUOTE</h2>
                <div className="desc-text">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <form
                  action="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/contact.html"
                  method="post"
                >
                  <div className="row clearfix">
                    {/* Form Group */}
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Your Name"
                        name="your-name"
                      />
                    </div>
                    {/* Form Group */}
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Subject"
                        name="your-subject"
                      />
                    </div>
                    {/* Form Group */}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        name="your-email"
                      />
                    </div>
                    {/* Form Group */}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <select
                        className="quote-select form-control"
                        name="sel-location"
                      >
                        <option>Select Location</option>
                        <option>Afghanistan</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        {/* Add other options here */}
                      </select>
                    </div>
                    {/* Form Group */}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <textarea
                        className="form-control"
                        rows="7"
                        cols="20"
                        placeholder="Your Message"
                        name="your-message"
                      ></textarea>
                    </div>
                    {/* Form Group */}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12 text-right">
                      <button className="custom-button light" type="submit">
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
