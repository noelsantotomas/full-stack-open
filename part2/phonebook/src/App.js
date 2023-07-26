import { useEffect, useState } from "react";
import DisplayNumbers from "./components/DisplayNumbers";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { getAll } from "./components/services/FormService";

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

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

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
      />
      <h2>Numbers</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <DisplayNumbers
        persons={persons}
        filteredPersons={filteredPersons}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
