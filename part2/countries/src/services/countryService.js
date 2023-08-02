import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getCountries = () => {
  const request = axios.get(baseUrl);
  return request;
};

export { getCountries };
