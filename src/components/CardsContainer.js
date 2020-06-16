import React from "react";
import Card from "./CountryCard";

const CardsContainer = ({ countries }) => {
  return (
    <div className="row">
      <table className="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((data, index) => {
            return <Card countryData={data} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CardsContainer;
