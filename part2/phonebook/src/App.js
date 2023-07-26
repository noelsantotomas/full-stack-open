import { useEffect, useState } from "react";
import DisplayNumbers from "./components/DisplayNumbers";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { getAll } from "./components/services/FormService";
import { create, deleteEntry, update } from "./components/services/FormService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const nameExists = persons.some((person) => person.name === newName);
  const numberExists = persons.some((person) => person.number === newNumber);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleUpdate = (newNumber) => {
    const currentPerson = persons.find((person) => person.name === newName);
    const updatedPerson = { ...currentPerson, number: newNumber };
    console.log(currentPerson);
    update(currentPerson.id, updatedPerson).then((returnedPerson) => {
      const updatedPersons = persons.map((person) =>
        person.id !== currentPerson.id ? person : returnedPerson
      );
      setPersons(updatedPersons);
    });
  };

  const addNewEntry = (event) => {
    event.preventDefault();
    const entryObject = {
      name: newName,
      number: newNumber,
    };
    if (nameExists) {
      if (
        window.confirm(
          `${newName} is already in the phonebook. Do you want to update the phone number?`
        )
      ) {
        handleUpdate(newNumber);
      }
    } else if (numberExists) {
      alert(`${newNumber} is already in the phonebook.`);
    } else {
      create(entryObject).then((data) => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      deleteEntry(id, setPersons).then(
        setPersons((currentPersons) =>
          currentPersons.filter((person) => person.id !== id)
        )
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addNewEntry={addNewEntry}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Filter newFilter={newFilter} handleNewFilter={handleNewFilter} />
      <DisplayNumbers
        persons={persons}
        filteredPersons={filteredPersons}
        setPersons={setPersons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
