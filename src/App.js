import React, { useState } from "react";
import styles from "./assets/sass/index.module.scss";

function App() {
  const [count, setCount] = useState(0);

  const IncreaseCount = (increase) => {
    setCount(count + increase);
  };

  return (
    <div className={styles.App}>
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={() => IncreaseCount(-1)} className={styles.minus}>
          - Минус
        </button>
        <button onClick={() => IncreaseCount(1)} className={styles.plus}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
