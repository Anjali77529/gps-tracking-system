import React, { useState } from "react";

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    alert(`Tracking shipment: ${trackingNumber}`);
  };

  return (
    <section id="tracking" className="html-slider">
      <div className="relative min-h-[600px] max-w-6xl mx-auto my-8 rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src="/frontend/src/components/slider/static-banner.jpg"
          alt="Background"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 h-full min-h-[600px] flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl mx-auto">
            <h1 className="font-['Poppins'] text-5xl font-bold mb-6 text-white">
              Track Your <span className="text-[#ff5e15]">Shipment</span>
            </h1>
            <p className="font-['Roboto'] text-white text-lg md:text-xl mb-8 opacity-1000">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              excepturi quibusdam reprehenderit iste ullam odit, modi fugit
              aliquam repudiandae, neque nisi tempora?
            </p>

            {/* Tracking Input Section */}
            <div className="flex max-w-2xl mx-auto shadow-lg">
              <input
                type="text"
                placeholder="Your Tracking Number eg (Sz-1170)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 p-4 text-gray-900 text-lg rounded-l focus:outline-none focus:ring-2 focus:ring-[#ff5e15] font-['Roboto'] font-light border"
              />
              <button
                onClick={handleTrack}
                className="bg-[#ff5e15] text-white px-12 py-2 text-lg font-['Poppins'] rounded-r hover:bg-[#e65513] transition-colors uppercase tracking-wider"
              >
                Track
              </button>
            </div>

            {/* Trust Message */}
            <p className="font-['Roboto'] text-white text-sm mt-4 opacity-75">
              We hate spam. You can trust us, we won't use your email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackShipment;
