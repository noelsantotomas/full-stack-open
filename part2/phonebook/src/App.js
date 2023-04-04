import { useState } from "react";

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

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("la");
  const nameExists = persons.some((person) => person.name === newName);
  const numberExists = persons.some((person) => person.number === newNumber);
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

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
  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
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
      <p>
        Filter: <input value={newFilter} onChange={handleNewFilter} />
      </p>
      <DisplayNumbers persons={persons} filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
