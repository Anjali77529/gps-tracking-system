import React from "react";
import TopMenu from "./components/header/TopMenu";
import MainMenu from "./components/header/MainMenu";
// import HomePageSlider from "./components/slider/HomePageSlider";
import OurServices from "./components/slider/OurServices";
import TrackShipment from "./components/slider/TrackShipment";

function App() {
  return (
    <>
      <TopMenu companyName="Gravity Drive" imageUrl="images/logo.png" />
      <MainMenu companyName="Gravity Drive" imageUrl="images/logo.png" />
      <TrackShipment />

      {/* <HomePageSlider /> */}
      <OurServices />
    </>
  );
}

export default App;
