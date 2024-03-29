import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  const [points, setPoints] = useState(new Array(8).fill(0));
  const shuffleAnecdote = () => {
    setRandomNumber(Math.floor(Math.random() * anecdotes.length));
    setSelected(randomNumber);
  };

  const handlePoints = (index) => {
    const newPoints = [...points];
    newPoints[index] += 1;
    setPoints(newPoints);
    console.log(newPoints);
  };

  const highestPointsIndex = points.indexOf(Math.max(...points));
  console.log(highestPointsIndex);

  return (
    <div>
      <h1>Selected anecdote:</h1>
      {anecdotes[selected]} <br />
      {/* We have to use `selected` in `handlePoints`, because it represents 
      the current value of selected. `randomNumber`  is only updated when 
      `shuffleAnecdote()` is called, so it cannot be used*/}
      <p>This anecdote has {points[selected]} votes.</p>
      <button onClick={() => handlePoints(selected)}>Add vote</button>
      <button onClick={shuffleAnecdote}>Shuffle anecdote</button>
      <h1>Anecdote with the most votes:</h1>
      <p>{anecdotes[highestPointsIndex]}</p>
      <p>This anecdote has {points[highestPointsIndex]} votes.</p>
    </div>
  );
};

export default App;
