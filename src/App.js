import { useState } from "react";
import Game from "./modules/Game";
import Result from "./modules/Result";
import questions from "./questions";
import styles from "./assets/scss/App.module.scss";

let correctAnswers = 0;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function onAnswer(id) {
    if (id === questions[currentQuestion].correct) {
      correctAnswers++;
    }

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function restartGame() {
    correctAnswers = 0;
    setCurrentQuestion(0);
  }

  return (
    <div className={styles.App}>
      {currentQuestion == questions.length ? (
        <Result
          correctAnswers={correctAnswers}
          totalAnswers={questions.length}
          restartGame={restartGame}
        />
      ) : (
        <Game
          currentQuestion={currentQuestion}
          questions={questions}
          onAnswer={onAnswer}
        />
      )}
    </div>
  );
}

export default App;
