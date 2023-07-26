import { deleteEntry } from "./services/FormService";

const handleDelete = (id, name, setPersons) => {
  if (window.confirm(`Do you really want to delete ${name}?`)) {
    deleteEntry(id, setPersons);
  }
};

const DisplayNumbers = ({ persons, filteredPersons, setPersons }) => {
  if (filteredPersons.length > 0) {
    return filteredPersons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}{" "}
        <button
          onClick={() => handleDelete(person.id, person.name, setPersons)}
        >
          Delete
        </button>
      </div>
    ));
  } else {
    return persons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}{" "}
        <button
          onClick={() => handleDelete(person.id, person.name, setPersons)}
        >
          Delete
        </button>
      </div>
    ));
  }
};

export default DisplayNumbers;
