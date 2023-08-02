const DisplayCountries = ({ countriesToShow }) => {
  if (countriesToShow.length === 1) {
    return countriesToShow.map((country, index) => (
      <div key={index}>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <h2>Languages</h2>
        {Object.values(country.languages).map((language, index) => (
          <ul key={index}>
            <li>{language}</li>
          </ul>
        ))}
        <h2>Flag</h2>
        <img src={country.flags.png} alt={country.flags.alt}></img>
      </div>
    ));
  } else if (countriesToShow.length < 10) {
    return countriesToShow.map((country, index) => (
      <div key={index}>{country.name.common} </div>
    ));
  } else {
    return (
      <p>Too many results, narrow down search by adding more characters.</p>
    );
  }
};

export default DisplayCountries;
