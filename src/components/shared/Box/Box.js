import React from "react";
import { useSpring, animated } from '@react-spring/web'
import styles from "./style.module.scss";
export default function Box({ children, sx,from,to,config,ref}) {
  const BoxSpring = useSpring({
    ref,
    from,
    to,
    config,
  });
  return (
    <animated.div
      className={styles.Box}
      style={{
        ...sx,
        ...BoxSpring,
      }}
    >
        {children}
    </animated.div>
  );
}
