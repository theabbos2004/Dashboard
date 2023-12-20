import React from "react";
import styles from "./style.module.scss";

export default function CircleDiagram({ 
  children,
  value,
  sx,
  rotate="90deg",
  strokeColor="var(--color-brand--3)",
  strokeColorBg="var(--active-bg-1)",
  strokeSizeBg="0.3rem",
  strokeSize="0.3rem"
  }) {
  return (
    <div
      className={styles.Circle_section}
      style={{ ...sx, width: "15rem", height: "15rem" }}
    >
      <svg viewBox="0 0 36 36"
        className={styles.circle_diagram_bg}
        style={{transform:`translate(-50%,-50%)`}}>
        <path
          className={styles.circle}
          strokeDasharray={`100, 100`}
          stroke={strokeColorBg}
          strokeWidth={strokeSizeBg}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            />
      </svg>
      <svg viewBox="0 0 36 36"
        className={styles.circle_diagram}
        style={{transform:`translate(-50%,-50%) rotate(${rotate})`}}>
        <path
          className={styles.circle}
          strokeDasharray={`${value}, 100`}
          stroke={strokeColor}
          strokeWidth={strokeSize}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            />
      </svg>
      
      <div className={styles.children}>
          {children}
      </div>
    </div>  
  );
}
