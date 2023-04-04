const Filter = ({ newFilter, setNewFilter }) => {
  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };
  return (
    <p>
      Filter: <input value={newFilter} onChange={handleNewFilter} />
    </p>
  );
};

export default Filter;
