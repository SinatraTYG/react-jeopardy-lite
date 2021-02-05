import React from "react";

function Welcome(props) {
  let name = props.match.params.name;
  return <div className="Welcome">Welcome, {name}! </div>;
}

export default Welcome;
