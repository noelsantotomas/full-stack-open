import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (entryObject) => {
  return axios.post(baseUrl, entryObject).then((response) => response.data);
};

const deleteEntry = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (id, setPersons, person, newNumber) => {
  const changedNumber = { ...person, number: newNumber };
  return axios
    .put(`${baseUrl}/${id}`, changedNumber)
    .then((returnedNumber) => setPersons());
};

export { getAll, create, deleteEntry, update };
