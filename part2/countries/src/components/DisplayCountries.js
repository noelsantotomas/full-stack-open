import CountryDetails from "./CountryDetails";

const DisplayCountries = ({
  countriesToShow,
  setSelectedCountry,
  selectedCountry,
}) => {
  console.log(countriesToShow);
  if (selectedCountry) {
    return selectedCountry.name ? (
      <CountryDetails country={selectedCountry} />
    ) : null;
  } else if (countriesToShow.length === 1) {
    return countriesToShow[0].name ? (
      <CountryDetails country={countriesToShow[0]} />
    ) : null;
  } else if (countriesToShow.length < 10 && countriesToShow.length > 0) {
    return countriesToShow.map((country, index) => (
      <div key={index}>
        {country.name.common}{" "}
        <button onClick={() => setSelectedCountry(country)}>Show</button>
      </div>
    ));
  } else if (countriesToShow.length !== 0) {
    return (
      <p>Too many results, narrow down search by adding more characters.</p>
    );
  }
};

export default DisplayCountries;
