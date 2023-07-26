import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const create = (entryObject) => {
  return axios.post(baseUrl, entryObject).then((response) => response.data);
};

const deleteEntry = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (id, updatedPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedPerson)
    .then((response) => response.data);
};

export { getAll, create, deleteEntry, update };
