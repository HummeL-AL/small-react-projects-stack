import { useState } from "react";
import VariantChooser from "./VariantChooser";
import styles from "../assets/scss/Game.module.scss";

function Game({ currentQuestion, questions, onAnswer }) {
  let progressPercent = currentQuestion / questions.length;
  const { title, variants } = questions[currentQuestion];

  const variantElements = [];
  for (let i = 0; i < variants.length; i++) {
    variantElements.push(VariantChooser(i, variants[i], onAnswer));
  }
  return (
    <>
      <div className={styles.progress}>
        <div
          style={{ width: progressPercent * 100 + "%" }}
          className={styles["progress__inner"]}
        ></div>
      </div>
      <h1>{title}</h1>
      <ul>{variantElements}</ul>
    </>
  );
}

export default Game;
