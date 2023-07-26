const DisplayNumbers = ({ persons, filteredPersons, handleDelete }) => {
  if (filteredPersons.length > 0) {
    return filteredPersons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}{" "}
        <button onClick={() => handleDelete(person.id, person.name)}>
          Delete
        </button>
      </div>
    ));
  } else {
    return persons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}{" "}
        <button onClick={() => handleDelete(person.id, person.name)}>
          Delete
        </button>
      </div>
    ));
  }
};

export default DisplayNumbers;
