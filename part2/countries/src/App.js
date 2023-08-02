import { useState, useEffect } from "react";
import DisplayCountries from "./components/DisplayCountries";
import { getCountries } from "./services/countryService";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    setSelectedCountry(null);
  }, [query]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );

  return (
    <>
      <span>Find countries:</span>{" "}
      <input value={query} onChange={handleQuery} />
      <DisplayCountries
        countriesToShow={query ? countriesToShow : []}
        setCountries={setCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </>
  );
};

export default App;
