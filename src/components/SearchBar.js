import React from "react";
const SearchBar = () => {
  return (
    <div className="row">
      <input
        className="form-control col search-bar"
        type="search"
        placeholder="Type a country..."
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
