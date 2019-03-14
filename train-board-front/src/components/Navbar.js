import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Nav" id="navbar">
        <div className="Nav__container">
          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/">
                  Home
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/about">
                  About
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/select_amtrak_station">
                  Select an Amtrak Station
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/search_amtrak_station">
                  Search for an Amtrak Station
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/view_user_trains">
                  View My Train Board
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/new_user_train">
                  Create a new Train
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
