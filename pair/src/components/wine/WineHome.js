import React from "react";
import { NavLink } from "react-router-dom";

/**
 * TODO:
 * [ ] integrate GoBack component
 */

const WineHome = () => {
  return (
    <div className="wineHome-container">
      <h2>Wine</h2>
      <div
      //   style={{ marginBottom: "5vh", marginTop: "5vh" }}
      >
        <div className="red-wine-wrapper">
          <NavLink to="red" activeClassName="is-active">
            RED
          </NavLink>
        </div>
      </div>
      <div
      //   style={{ marginBottom: "5vh", marginTop: "5vh" }}
      >
        <div className="white-wine-wrapper">
          <NavLink to="white" activeClassName="is-active">
            WHITE
          </NavLink>
        </div>
      </div>
      <div
      //   style={{ marginBottom: "5vh", marginTop: "5vh" }}
      >
        <div className="fp-wrapper">
          <NavLink to="fp" activeClassName="is-active">
            SEARCH BY FLAVOR PROFILE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WineHome;
