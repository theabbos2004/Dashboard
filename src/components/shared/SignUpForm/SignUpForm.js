import React, { useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { SignUpFunc, SignUpActive } from "../../../Reducer/UsersReducer";
import { handleActive } from "../../../Reducer/MenuReducer";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import Toggle from "../Toggle/Toggle";
export default function SignUpForm() {
  const navigate = useNavigate();
  let [form, setForm] = useState({ data: {} });
  let dispatch = useDispatch();
  let LoginUpFormRef = useRef();
  const LoginUpSprings = useSpring({
    from: {opacity:"0",filter: 'drop-shadow(0px 10px 4px rgba(0,0,0,0.8)'},
    to: {opacity:"1",filter: "drop-shadow(0px 10px 4px rgba(0,0,0,0.8)"},
    config: { duration: 500 },
});
  return (
    <animated.div
    style={{
      ...LoginUpSprings
    }}>
      <form ref={LoginUpFormRef}>
        <label>Name</label>
        <input
          className={styles.formInput}
          value={form?.data?.name}
          placeholder="Your name"
          onChange={(e) => {
            let { data } = form;
            data = { ...data, email: e?.target?.name };
            setForm({ ...form, data });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              LoginUpFormRef.current[1].focus();
            }
          }}
        />
        <label>Email</label>
        <input
          className={styles.formInput}
          value={form?.data?.email}
          placeholder="Your email address"
          onChange={(e) => {
            let { data } = form;
            data = { ...data, email: e?.target?.value };
            setForm({ ...form, data });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              LoginUpFormRef.current[2].focus();
            }
          }}
        />

        <label>Password</label>
        <input
          className={styles.formInput}
          value={form?.data?.password}
          placeholder="Your password"
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
              SignUpFunc({
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
          Sign Up
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
            Already have an account?
          </p>
          <p
            onClick={() => dispatch(SignUpActive(false))}
            style={{ cursor: "pointer" }}
          >
            Sign In
          </p>
        </div>
      </form>
    </animated.div>
  );
}
