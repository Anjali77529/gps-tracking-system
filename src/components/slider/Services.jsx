import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section-padding-20 services">
      <div className="container">
        {/* Title Section */}
        <div className="main-heading text-center">
          <h2>our partners</h2>
          <p
            style={{
              fontSize: "1.5rem", // Increase font size
              color: "#000", // Optional: Maintain consistent color
            }}
          >
            Cras varius purus in tempus porttitor ut dapibus efficitur sagittis
            cras vitae lacus metus nunc vulputate facilisis nisi <br />
            eu lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus
            velit
          </p>
        </div>
        {/* End Title Section */}

        {/* Partners Row with Slider */}
        <div className="row">
          <Slider {...settings}>
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="item" key={index}>
                <img
                  className="img-responsive"
                  alt={`Client ${index + 1}`}
                  src="images/clients/client_5.png"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* End Partners Row */}
      </div>
    </section>
  );
};

export default Services;
