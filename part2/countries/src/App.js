import { useState, useEffect } from "react";
import DisplayCountries from "./DisplayCountries";
import { getCountries } from "./services/countryService";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

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
      <DisplayCountries countriesToShow={query ? countriesToShow : []} />
    </>
  );
};

export default App;
