import React, { useState } from "react";
import ModalWindow from "./components/ModalWindow";
import styles from "./assets/sass/index.module.scss";

function App() {
  const [open, setOpen] = useState(false);

  const ActivateWindow = (active) => {
    setOpen(active);
  };

  return (
    <div className={styles.App}>
      <button
        onClick={() => ActivateWindow(true)}
        className={styles.open_modal_btn}
      >
        ✨ Открыть окно
      </button>
      <ModalWindow open={open} setOpen={ActivateWindow} content={""}/>
    </div>
  );
}

export default App;
