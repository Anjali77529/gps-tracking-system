const HomePageSlider = () => {
    return (
      <>
        <section id="home" className="html-slider">
          <div className="overlay">
            <video
              className="text-center"
              muted
              autoPlay
              loop
              playsInline
              poster="/video/1.jpg" // Make sure this is a correct path from the public folder
              onError={(e) => {
                console.error("Error loading video:", e);
              }}
            >
              <source type="video/webm" src="/video/1.webm" />
              <source type="video/mp4" src="/video/1.mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="slider-caption">
              <h1>
                Welcome to Logistic<span> Pro</span>
              </h1>
              <p>A digital design and development agency</p>
              <a className="btn" href="#">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default HomePageSlider;
  