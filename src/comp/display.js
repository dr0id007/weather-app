import React from "react";

export default function display(temp, text, humid, wind) {
  let icon = "";

  switch (text) {
    case "Sunny":
      icon = <i className="fas fa-sun" />;
      break;
    case "Mist":
      icon = <i className="fas fa-cloud-sun" />;
      break;
    case "Patchy rain possible":
      icon = <i className="fas fa-cloud-sun-rain" />;
      break;
    case "Overcast":
      icon = <i className="fas fa-cloud" />;
      break;
    case "Partly cloudy":
      icon = <i className="fas fa-cloud-sun" />;
      break;
    default:
  }

  return (
    <div className="data">
      <h1>
        <i className="fas fa-water" />
        {"   "} {temp} C
      </h1>
      <h2>
        Condition:-{text} {icon}{" "}
      </h2>
      <h2>Humidity:- {humid}</h2>
      <h2>Wind:- {wind}</h2>
    </div>
  );
}
