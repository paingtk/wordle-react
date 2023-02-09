import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0) // track what player turn is on.
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // each guess is an array
  const [history, setHistory] = useState(['apple', 'spare']) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  // format player guess word into an array of objects. e.g. [{letter: 'a', color: 'yellow'}]
  const formatGuess = () => {
    console.log('formatted guess is -', currentGuess)
  }

  // add player new guess word to the guesses state.
  // update the isCorrect state if the guess is right.
  // add one to the turn state.
  const addNewGuess = () => {}

  // handle keyup and track the current guess word.
  // if player presses enter, add the new guess word.
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      // check if the turn is over 5
      if (turn > 5) {
        console.log('used all the turn')
        return
      }
      // check if the guess word is already submitted
      if (history.includes(currentGuess)) {
        console.log('This word is already guessed!')
        return
      }
      // check if word is 5 char long
      if (currentGuess.length !== 5) {
        console.log('word must be 5 char long')
        return
      }
      // call formatGuess function if above condition are passed
      formatGuess()
    }

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
