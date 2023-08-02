const DisplayCountries = ({ countriesToShow }) => {
  if (countriesToShow.length < 10) {
    return countriesToShow.map((country) => (
      <div key={country.id}>{country.name.common} </div>
    ));
  } else if (countriesToShow.length > 10) {
    return <p>Too many results</p>;
  }
};

export default DisplayCountries;
