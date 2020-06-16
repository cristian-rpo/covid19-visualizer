import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery";
import "./css/main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardsContainer from "./components/CardsContainer";
import GlobalHeader from "./components/GlobalHeader";

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [global, setGlobal] = useState([]);
  const [loading, setLoading] = useState(true);
  //Api consumption
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios("https://api.covid19api.com/summary");
    setCountries(result.data.Countries);
    setGlobal(result.data.Global);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="container">
          <GlobalHeader globalData={global} />
          <SearchBar />
          <CardsContainer countries={countries} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="loader-container">
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default App;
