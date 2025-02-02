import { useState } from "react";
import { languages } from "./data/laguage";
import clsx from "clsx";
import Confetti from 'react-confetti'


function App() {
  const [currentWord, setCurrentWord] = useState("aaaa")
  const [guessedLetters, setGuessedLetters] = useState([])
  
  const letters = "abcdefghijklmnopqrstuvwxyz".split("")

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameLost = guessedLetters.filter(letter => !currentWord.includes(letter)).length === languages.length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameWon || isGameLost



  const languageElements = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    const isLost = index < wrongGuessCount


    return (
      <span className={clsx('chip', {lost : isLost})} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const guessWord = currentWord.split("").map((letter, index) => {

    return (
      <span key={index} className="letter-box">
        {guessedLetters.includes(letter) && letter.toLocaleUpperCase()}
      </span>
    );
  });

  const inputLetter = letters.map((letter) => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)

    return (
      <button disabled={isGameOver} key={letter} onClick={() => letterClick(letter)} className={clsx('key-container',{correct: isCorrect, wrong: isWrong})}>
        {letter.toLocaleUpperCase()}
      </button>
    );
  });

  function letterClick(value){
    setGuessedLetters( prev => {
      if(prev.includes(value)){
        return prev
      }else{
        return [...prev, value]
      }
      
    } )
  }

  

  return (
    <>
      <div className="wrapper">
        {isGameWon && <Confetti/>}
        <header>
          <h1>Assembly: Endgame</h1>
          <p>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </header>

        <section className={clsx('message-box',{langlost : wrongGuessCount > 0, gamewon : isGameWon, gamelost : isGameLost, })}>
          <h3>{isGameWon ? "You win!" : isGameLost ? "Game over!": wrongGuessCount > 0 ? `“Farewell ${languages[wrongGuessCount-1].name}” 🫡"` : ""}</h3>
          <p>{ isGameWon ? "Well done! 🎉" : isGameLost ? "You lose! Better start learning Assembly 😭" : ""}</p>
        </section>

        <section className="lang-container">{languageElements}</section>

        <section className="word-container">{guessWord}</section>

        <section className="keyboard-container">
          <div>{inputLetter}</div>
          <div>
            {isGameOver && <button className="new-game" onClick={()=>{setCurrentWord("sample"); setGuessedLetters([]);}}>New Game</button>}
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
