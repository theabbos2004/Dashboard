import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import {
    SignUpActive,
    SignInFunc,
  } from "../../../Reducer/UsersReducer";
import { handleActive } from "../../../Reducer/MenuReducer";
import Button from "../Button/Button";
import styles from "./index.module.scss";
import { useNavigate } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
export default function SignInForm() {
    let [form, setForm] = useState({ data: {} });
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let error = useSelector((store) => store.users.error);
    let LoginFormRef = useRef();
    const LoginInsprings = useSpring({
        from: {opacity:"0",filter: 'drop-shadow(0px 10px 4px rgba(0,0,0,0.8)'},
        to: {opacity:"1",filter: "drop-shadow(0px 10px 4px rgba(0,0,0,0.8)"},
        config: { duration: 500 },
    });
  return (
    <animated.div
    style={{
      ...LoginInsprings
    }}
  >
      <form
      ref={LoginFormRef}
      style={{ border: "none", background: "transparent" }}
      >
      {error ? (
          <div
          style={{
              padding: "0.5rem",
              border: "0.1rem solid var(--color-brand--6)",
              color: "var(--color-brand--6)",
              borderRadius: "0.5rem",
              margin: "0.5rem 0",
          }}
          >
          login or password error
          </div>
      ) : (
          ""
      )}
      <label>Email</label>
      <input
          className={styles.formInput}
          value={form?.data?.email}
          placeholder="existing email:aaa"
          onChange={(e) => {
          let { data } = form;
          data = { ...data, email: e?.target?.value };
          setForm({ ...form, data });
          }}
          onKeyDown={(e) => {
          if (e.key === "Enter") {
              e.preventDefault();
              LoginFormRef.current[1].focus();
          }
          }}
      />
      <label>Password</label>
      <input
          className={styles.formInput}
          value={form?.data?.password}
          placeholder="existing password:aaa"
          onChange={(e) => {
          let { data } = form;
          data = { ...data, password: e?.target?.value };
          setForm({ ...form, data });
          }}
          onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : "")}
      />
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <Toggle
            onChange={() => {
                let { data } = form;
                data = { ...data, checked: !form?.data?.checked };
                setForm({ ...form, data });
            }}
            onKeyDown={(e) =>
                e.key === "Enter" ? e.preventDefault() : ""
            }
        />
          <p>Remember me </p>
      </div>
      <Button
          onClick={() => {
          dispatch(
              SignInFunc({
              data: form?.data,
              navigateFunc: () => navigate("/Dashboard"),
              })
          );
          dispatch(
              handleActive({
              id: 1,
              title: "Dashboard",
              icon: "HomeIcon",
              focus: false,
              active: true,
              link: "/Dashboard",
              })
          );
          }}
          type="submit"
          sx={{
          border: "none",
          backgroundColor: "var(--color-brand--3)",
          }}
      >
          Sign In
      </Button>
      <div
          style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.1rem",
          margin: "1rem 0",
          }}
      >
          <p style={{ color: "var(--color-brand--4)" }}>
          Don't have an account?
          </p>
          <p
          onClick={() => dispatch(SignUpActive(true))}
          style={{ cursor: "pointer" }}
          >
          Sign up
          </p>
      </div>
      </form>
  </animated.div>
  )
}
