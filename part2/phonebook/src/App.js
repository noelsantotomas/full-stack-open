import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: "1", name: "Arto Hellas", number: "31684327128" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const nameExists = persons.some((person) => person.name === newName);
  const numberExists = persons.some((person) => person.number === newNumber);

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

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
