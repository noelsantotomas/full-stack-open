const PersonForm = ({
  newName,
  newNumber,
  addNewEntry,
  handleNewName,
  handleNewNumber,
}) => {
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
