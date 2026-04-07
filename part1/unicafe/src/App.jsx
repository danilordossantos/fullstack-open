import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100 + " %"

  return (
    <>
      <h1>Give feedback</h1>
      <article>
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      </article>
      <h2>Statistics</h2>
      {
        all === 0 ? (
          <p>No feedback given</p>
        ) : (
          <table>
            <tbody>
              <Statistics text="Good" value={good} />
              <Statistics text="Neutral" value={neutral} />
              <Statistics text="Bad" value={bad} />
              <Statistics text="All" value={all} />
              <Statistics text="Average" value={average} />
              <Statistics text="Positive" value={positive} />
            </tbody>
          </table>
        )
      }
    </>
  )
}

export default App
