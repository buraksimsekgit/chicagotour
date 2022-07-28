import React from "react";
import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <h1>CHICAGOTOUR</h1>
      <div className="Subtitle">Chicago Places to Visit</div>

      <ul className="navs">
          <li>
              List
          </li>
          <li>
              About
          </li>
          <li>
              Show me random places
          </li>
      </ul>
    </div>
    
  );
}

export default Title;