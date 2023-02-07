import { useEffect, useState } from 'react'

function App() {
  const [solution, setSolution] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then((res) => res.json())
      .then((data) => {
        const randomSolution = data[Math.floor(Math.random() * data.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])
  return (
    <div>
      <h1>Wordle</h1>
      {solution && <div>Solution is: {solution}</div>}
    </div>
  )
}

export default App
