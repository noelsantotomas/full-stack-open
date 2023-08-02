const CountryDetails = ({ country }) => {
  console.log(country);
  return (
    <div>
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
  );
};

export default CountryDetails;
