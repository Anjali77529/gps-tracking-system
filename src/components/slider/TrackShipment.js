import React, { useState } from "react";

const TrackShipment = () => {
  return (
    <div className="hero-3 full-section" id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>Track Your Shipment</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              excepturi quibusdam reprehenderit iste ullam odit, modi fugit
              aliquam repudiandae, neque nisi tempora?
            </p>
            <div className="form">
              <form action="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/history.html">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Tracking Number eg (Sz-1170)"
                />
                <button type="submit">Track</button>
              </form>
              <span className="declaration">
                We hate spam. You can trust us, we won't use your email
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackShipment;
