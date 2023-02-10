import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [isShown, setIsShown] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast variant={variant} isShown={isShown} setIsShown={setIsShown}> {message} </Toast>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((v) => (
              <label key={v} htmlFor={`variant-${v}`}>
                <input
                  id={`variant-${v}`}
                  type="radio"
                  name="variant"
                  value={v}
                  checked={v === variant}
                  onChange={(e) => {
                    setVariant(e.target.value);
                  }}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={e =>setIsShown(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
