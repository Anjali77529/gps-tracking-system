import React from "react";
import TopMenu from "./components/header/TopMenu";
import MainMenu from "./components/header/MainMenu";
// import HomePageSlider from "./components/slider/HomePageSlider";
import TrackShipment from "./components/slider/TrackShipment";
import WhyChooseUs from "./components/slider/WhyChoose";
import Services from "./components/slider/Services";
import Footer from "./components/slider/Footer";
import TrackingAppSection from "./components/slider/TrackingApp";
import ProcessSection from "./components/slider/ProcessSection";
import ServicesSection from "./components/slider/OurServices";
import AboutSection from "./components/slider/AboutSection";

function App() {
  return (
    <>
      <TopMenu companyName="Gravity Drive" imageUrl="images/logo.png" />
      <MainMenu companyName="Gravity Drive" imageUrl="images/logo.png" />
      <TrackShipment />

      {/* <HomePageSlider /> */}
      <ServicesSection />
      <ProcessSection />
      {/* <AboutSection /> */}
      <TrackingAppSection />
      <WhyChooseUs />
      <Services />
      <Footer />
    </>
  );
}

export default App;
