import React from "react";
import Millify from "millify";
const GlobalHeader = ({ globalData }) => {
  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = globalData;

  return (
    <div className="row d-flex flex-wrap align-middle text-center">
      <div className="col">
        <h4>Global number of cases</h4>
      </div>
      <div className="col">
        <h6>Confirmed</h6>
        <p>
          {Millify(TotalConfirmed, { precision: 1 })}
          <span className="badge badge-pill badge-dark ml-0 ml-sm-2">
            +{Millify(NewConfirmed, { precision: 1 })}
          </span>
        </p>
      </div>
      <div className="col">
        <h6>Recovered</h6>
        <p>
          {Millify(TotalRecovered, { precision: 1 })}
          <span className="badge badge-pill badge-dark ml-0 ml-sm-2">
            +{Millify(NewRecovered, { precision: 1 })}
          </span>
        </p>
      </div>
      <div className="col">
        <h6>Deaths</h6>
        <p>
          {Millify(TotalDeaths, { precision: 1 })}
          <span className="badge badge-pill badge-dark ml-0 ml-sm-2">
            +{Millify(NewDeaths, { precision: 1 })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default GlobalHeader;
