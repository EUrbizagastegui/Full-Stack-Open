import { useState } from 'react'

const Display = ({text}) => <div><h1><strong>{text}</strong></h1></div>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Counter = ({text, count}) => <div>{text} {count}</div>

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <Counter text={text} count={value}></Counter>
    </div>
  )
}

const Statistics = ({feedback, findAvarege, findPositive}) => {

  //Condicional para mostrar el mensaje 'No feedback given' cuando no hay feedback dado
  if (feedback.good + feedback.neutral + feedback.bad === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <StatisticLine text={'good'} value={feedback.good} />
      <StatisticLine text={'neutral'} value={feedback.neutral} />
      <StatisticLine text={'bad'} value={feedback.bad} />
      <StatisticLine text={'all'} value={feedback.good + feedback.neutral + feedback.bad} />
      <StatisticLine text={'average'} value={findAvarege()} />
      <StatisticLine text={'positive'} value={findPositive() + '%'} />
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const [total, setTotal] = useState(0)

  const handleFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))

    setTotal(feedback.good + feedback.neutral + feedback.bad + 1)
  }

  const findAvarege = () => (feedback.good + feedback.neutral + feedback.bad) / 3

  const findPositive = () => (feedback.good / total) * 100

  return (
    <div>
      <Display text={'give feedback'} />
      <Button text={'good'} onClick={() => handleFeedback('good')} />
      <Button text={'neutral'} onClick={() => handleFeedback('neutral')} />
      <Button text={'bad'} onClick={() => handleFeedback('bad')} />
      <Display text={'statistics'} />
      <Statistics feedback={feedback} findAvarege={findAvarege} findPositive={findPositive}></Statistics>
    </div>
  )
}

export default App