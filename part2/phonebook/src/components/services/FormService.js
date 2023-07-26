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

export { getAll, create, deleteEntry };
