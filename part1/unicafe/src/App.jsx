import { useState } from 'react'

const Display = ({text}) => <div><h1><strong>{text}</strong></h1></div>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Counter = ({text, count}) => <div>{text} {count}</div>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))
  }

  return (
    <div>
      <Display text={'give feedback'} />
      <Button text={'good'} onClick={() => handleFeedback('good')} />
      <Button text={'neutral'} onClick={() => handleFeedback('neutral')} />
      <Button text={'bad'} onClick={() => handleFeedback('bad')} />
      <Display text={'statistics'} />
      <Counter text={'good'} count={feedback.good}></Counter>
      <Counter text={'neutral'} count={feedback.neutral}></Counter>
      <Counter text={'bad'} count={feedback.bad}></Counter>
    </div>
  )
}

export default App