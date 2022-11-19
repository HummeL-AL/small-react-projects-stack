import styles from "../assets/scss/Result.module.scss";

function Result({ correctAnswers, totalAnswers, restartGame }) {
  return (
    <div className={styles.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correctAnswers} ответа из {totalAnswers}
      </h2>
      <button onClick={() => restartGame()}>Попробовать снова</button>
    </div>
  );
}

export default Result;
