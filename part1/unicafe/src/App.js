import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save click count of feedback buttons into a single object
  const [clicks, setClicks] = useState({good:0, neutral:0, bad:0})

  const handleGood = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }
  const handleNeutral = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }
  const handleBad = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }

  const totalClicks = clicks.good + clicks.neutral + clicks.bad
  const averageClicks = totalClicks > 0 ? ((clicks.good * 1) + (clicks.neutral * 0 ) + (clicks.bad * -1)) / totalClicks : 0
  const positiveClicks = totalClicks > 0 ? (clicks.good / totalClicks * 100) : 0

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => handleGood()} text='good'></Button>
      <Button onClick={() => handleNeutral()} text='neutral'></Button>
      <Button onClick={() => handleBad()} text='bad'></Button>

      <h2>Statistics</h2>
      <p>Good {clicks.good}</p>
      <p>Neutral {clicks.neutral}</p>
      <p>Bad {clicks.bad}</p>
      <p>Total feedback given: {totalClicks}</p>
      <p>Average feedback given: {averageClicks}</p>
      <p>Positive feedback given: {positiveClicks}%</p>
    </div>
  )
}

export default App