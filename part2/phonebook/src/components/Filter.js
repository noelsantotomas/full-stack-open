const Filter = ({ newFilter, setNewFilter }) => {
  const handleNewFilter = (event) => {
    if (!event.target.value) return; //defensive programming
    setNewFilter(event.target.value);
  };
  return (
    <p>
      Filter: <input value={newFilter} onChange={handleNewFilter} />
    </p>
  );
};

export default Filter;
