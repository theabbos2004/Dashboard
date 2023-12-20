import React, { useState } from "react";
import styles from "./index.module.scss";
export default function Toggle({ value, onChange = () => {}, onKeyDown }) {
  let [checked, setChecked] = useState(value);
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          onChange()
          setChecked(!checked)
        }}
        onKeyDown={onKeyDown}
      />
      <span className={styles.slider + " " + styles.round}></span>
    </label>
  );
}
