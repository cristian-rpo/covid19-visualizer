import React from "react";
import Millify from "millify";

const CountryCard = ({ countryData }) => {
  const {
    Country,
    CountryCode,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = countryData;
  return (
    <tr>
      <th scope="row d-flex flex-column">
        <img
          src={`https://www.countryflags.io/${CountryCode}/flat/16.png`}
          className="country-icon mr-2"
          alt="..."
        />
        <span>{Country}</span>
      </th>
      <td>
        {Millify(TotalConfirmed, { precision: 1 })}
        {NewConfirmed === 0 ? null : (
          <span className="badge badge-pill badge-light ml-0 ml-sm-2">
            +{Millify(NewConfirmed, { precision: 1 })}
          </span>
        )}
      </td>
      <td>
        {Millify(TotalRecovered, { precision: 1 })}
        {NewRecovered === 0 ? null : (
          <span className="badge badge-pill badge-success ml-0 ml-sm-2">
            +{Millify(NewRecovered, { precision: 1 })}
          </span>
        )}
      </td>
      <td>
        {Millify(TotalDeaths, { precision: 1 })}
        {NewDeaths === 0 ? null : (
          <span className="badge badge-pill badge-danger ml-0 ml-sm-2">
            +{Millify(NewDeaths, { precision: 1 })}
          </span>
        )}
      </td>
    </tr>
  );
};

export default CountryCard;
