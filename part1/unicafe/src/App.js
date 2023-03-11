import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ clicks }) => {
  const { good, neutral, bad } = clicks;
  const totalClicks = good + neutral + bad;
  const averageClicks =
    totalClicks > 0 ? (good * 1 + neutral * 0 + bad * -1) / totalClicks : 0;
  const positiveClicks = totalClicks > 0 ? (good / totalClicks) * 100 : 0;

  if (totalClicks === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total feedback given:" value={totalClicks} />
          <StatisticLine text="Average feedback given:" value={averageClicks} />
          <StatisticLine
            text="Positive feedback given:"
            value={`${positiveClicks}%`}
          />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save click count of feedback buttons into a single object
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };
  const handleNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };
  const handleBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  };

  return (
    <>
      <h2>give feedback</h2>
      <Button onClick={() => handleGood()} text="good"></Button>
      <Button onClick={() => handleNeutral()} text="neutral"></Button>
      <Button onClick={() => handleBad()} text="bad"></Button>

      <Statistics clicks={clicks} />
    </>
  );
};

export default App;
