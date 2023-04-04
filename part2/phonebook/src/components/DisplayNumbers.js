const DisplayNumbers = ({ persons, filteredPersons }) => {
  if (filteredPersons.length > 0) {
    return filteredPersons.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}
      </p>
    ));
  } else {
    return persons.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}
      </p>
    ));
  }
};

export default DisplayNumbers;
