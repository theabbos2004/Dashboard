import React from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";
import Footer from "../Footer/Footer";
import SignUpForm from "../shared/SignUpForm/SignUpForm";
import SignInForm from "../shared/SignInForm/SignInForm";
import IntroMenu from "../shared/IntroMenu/IntroMenu";
export default function SignIn() {
  let signUp = useSelector((store) =>store.users.signUp);
  // style
  const MenuspringsRef = useSpringRef();
  const Menusprings = useSpring({
    ref: MenuspringsRef,
    from: { transform: "translate(-50%,0%) rotateX(90deg)" },
    to: { transform: "translate(-50%,0%) rotateX(0deg)" },
    config: { duration: 1000 },
  });
  const SubtitlespringsRef = useSpringRef();
  const Subtitlesprings = useSpring({
    ref: SubtitlespringsRef,
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { duration: 500 },
  });
  const TitlespringsRef = useSpringRef();
  const Titlesprings = useSpring({
    ref: TitlespringsRef,
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { duration: 500 },
  });
  const RightSectorSpringsRef = useSpringRef();
  const RightSectorsprings = useSpring({
    ref: RightSectorSpringsRef,
    from: { width: "100%" },
    to: { width: "50%" },
    config: { duration: 500 },
  });
  useChain(
    [
      RightSectorSpringsRef,
      SubtitlespringsRef,
      TitlespringsRef,
      MenuspringsRef,
    ],
    [0, 1, 2, 3],
    [300]
  );
  return (
    <div className={styles.SignIn_page}>
      <animated.div
        style={{
          position: "fixed",
          minWidth: window.innerWidth > 576 ? "60%" : "90%",
          zIndex: "100",
          top: "1%",
          left: "50%",
          ...Menusprings,
        }}
      >
       <IntroMenu/>
      </animated.div> 

      {window?.innerWidth > 567 ? (
        <animated.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...RightSectorsprings,
          }}
          className={styles.left_sector}
        >
            <animated.div
              style={{
                fontSize: "1.5rem",
                color: "var(--color-brand--4)",
                ...Subtitlesprings,
              }}
            >
              INSPIRED BY THE FUTURE:
            </animated.div>
            <animated.div
              style={{
                fontSize: "3rem",
                ...Titlesprings,
              }}
            >
              THE VISION UI DASHBOARD
            </animated.div>
        </animated.div>
      ) :""}
      <div
        className={styles.right_sector}
        style={{
          width: window.innerWidth > 576 ? "50%" : "100%",
        }}
      >
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          {signUp ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "2rem", color: "var(--color-white)" }}>
                Welcome!
              </p>
              <p style={{ fontSize: "1rem" }}>
                Use these awesome forms to login or create new account in your
                project for free.
              </p>
            </div>
          ) : (
            <div style={{ padding: "0 2rem" }}>
              <p style={{ fontSize: "2rem", color: "var(--color-white)" }}>
                Nice to see you!
              </p>
              <p style={{ fontSize: "1rem" }}>
                Enter your email and password to sign in
              </p>
            </div>
          )}
          {signUp ? (
            <SignUpForm/>
          ) : (
            <SignInForm/>
          )}
        </div>
        <Footer
          sx={{
            position: "absolute",
            bottom: "5%",
            width: "50%",
            padding: "0 2rem",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
            color: "var(--color-brand--4)",
            fontSize: "1rem",
          }}
          firstChild={{ textAlign: "center" }}
        />
      </div>
    </div>
  );
}
