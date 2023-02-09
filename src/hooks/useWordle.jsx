import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0) // track what player turn is on.
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  // format player guess word into an array of objects. e.g. [{letter: 'a', color: 'yellow'}]
  const formatGuess = () => {}

  // add player new guess word to the guesses state.
  // update the isCorrect state if the guess is right.
  // add one to the turn state.
  const addNewGuess = () => {}

  // handle keyup and track the current guess word.
  // if player presses enter, add the new guess word.
  const handleKeyup = ({ key }) => {
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1) // remove the last letter
      })
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle
