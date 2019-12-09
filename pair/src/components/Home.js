import React from "react";
import { NavLink } from "react-router-dom";
// import '../styles/welcome.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        ></link>
      </header>

      <h2>
        <strong>Pair.</strong>
      </h2>

      <div
      // style={{ marginBottom: "5vh", marginTop: "5vh" }}
      >
        <div className="wine-wrapper">
          <NavLink to="wine" activeClassName="is-active">
            WINE
          </NavLink>
        </div>
      </div>

      <div className="cheese-wrapper">
        <NavLink to="cheese" activeClassName="is-active">
          CHEESE
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
