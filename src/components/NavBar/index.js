import React from "react";
import "./style.css";


function Navbar(props) { // navbar need 3 props. 
  return (
    <div className="navbar navbar-expand-md d-flex justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link"><strong>Game Clicker</strong></p>
        </li>
        <li className=" nav-item">
          <p className="nav-link">{props.clickResult}</p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Score : {props.score} / TopScore : {props.topScore}</p>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;