import React from "react";

const AboutSection = () => {
  return (
    <section className="padding-top-70" id="about">
      <div className="container">
        <div className="row clearfix">
          {/* Column for Text Content */}
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="about-title">
              <h2>Services All Over The World</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent congue justo scelerisque mattis iaculis. Maecenas
                vestibulum faucibus enim scelerisque egestas. Praesent
                facilisis, tortor vel vehicula imperdiet, felis massa ultrices
                metus, sed consectetur massa ex vitae sem. Integer eu sodales
                augue leo.
              </p>

              <p>
                Pellentesque pharetra orci quam, vel scelerisque massa semper
                et. Fusce vel tortor eu metus rhoncus blandit a vel turpis.
                Suspendisse sed facilisis lacus. Integer mattis interdum neque,
                non molestie risus facilisis et. Donec gravida luctus laoreet.
                Curabitur quis iaculis velit.
              </p>

              <div className="more-about margin-top-30">
                <a href="#" className="btn btn-primary btn-lg">
                  Contact Us <i className="fa fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column for Image */}
          <div className="col-md-6 col-sm-12 our-gallery col-xs-12">
            <a className="tt-lightbox" href="images/crew.png">
              <img
                className="img-responsive"
                alt="Image"
                src="images/crew.png"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
