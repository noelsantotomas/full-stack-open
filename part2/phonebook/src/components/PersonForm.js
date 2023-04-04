const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const nameExists = persons.some((person) => person.name === newName);
  const numberExists = persons.some((person) => person.number === newNumber);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewEntry = (event) => {
    event.preventDefault();
    const entryObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    if (nameExists) {
      alert(`${newName} is already in the phonebook.`);
    } else if (numberExists) {
      alert(`${newNumber} is already in the phonebook.`);
    } else {
      setPersons(persons.concat(entryObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <form onSubmit={addNewEntry}>
      <div>
        Name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
