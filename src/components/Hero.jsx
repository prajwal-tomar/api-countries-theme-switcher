import Dashboard from "./Dashboard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const Hero = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [responseData, setResponseData] = useOutletContext();

  console.log(responseData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api-countries-theme-switcher.vercel.app/data.json");
        setResponseData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.log("Failed to fetch data from the API: ", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = (data) => {
    // Handle the search and region filtering
    const searchQuery = data.search.toLowerCase();
    const selectedRegion = data.region.toLowerCase();
    console.log(selectedRegion);

    const filteredCountries = responseData.filter((country) => {
      const countryName = country.name.toLowerCase();
      const countryRegion = country.region.toLowerCase();

      const matchesSearch = countryName.includes(searchQuery);
      const matchesRegion =
        selectedRegion === "" || countryRegion === selectedRegion;

      return matchesSearch && matchesRegion;
    });

    setFilteredData(filteredCountries);
  };

  return (
    <div className="flex flex-col">
      <SearchBar onSubmit={onSubmit}/>
      <Dashboard
        responseData={responseData}
        setResponseData={setResponseData}
        filteredData={filteredData}
      />
    </div>
  );
};

export default Hero;
