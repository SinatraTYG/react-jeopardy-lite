import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">Time</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Jeopardy">Jeopardy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
