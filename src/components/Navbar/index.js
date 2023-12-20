import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import * as icon from "../../assets/img/icon";
import { useDispatch, useSelector } from "react-redux";
import { handleFocus, handleActive } from "../../Reducer/MenuReducer";
import { SignInActive, SignInFunc, SignUpActive } from "../../Reducer/UsersReducer";
import Button from "../shared/Button/Button";


export default function Navbar({ sxd = { width: "20%", minHeight: "100vh" }, sx = {} }){
  let { menu, accountMenu } = useSelector((store) => store.menu);
  let dispatch = useDispatch();
  let navigate=useNavigate()
  const geticon = (el) => {
    let IconComponent = icon[el.icon];
    return (
      <IconComponent
        color={
          el?.focus || el?.active
            ? "var(--color-white)"
            : "var(--color-brand--3)"
        }
        width={window.innerWidth>576?"16":"9"}
      />
    );
  };
  return (
    <navbor className={styles.navbor} style={{ ...sxd, ...sx }}>
      <div className="container">
        <>
          <p className={styles.navbor_title}>VISION UI FREE</p>
          <hr />
          <ul className={styles.menu__list}>
            {/* menu */}
            {
            menu?.map((el) => (
              <li
                key={el.id}
                className={
                  el?.focus || el?.active
                    ? styles.menu__item_active
                    : styles.menu__item
                }
              >
                <Link
                  to={el.link}
                  onMouseEnter={() => dispatch(handleFocus(el))}
                  onMouseLeave={() => dispatch(handleFocus({}))}
                  onClick={() => dispatch(handleActive(el))}
                  className={styles.header__item__link}
                >
                  <div className={styles.icon}>{geticon(el)}</div>
                  <p>{el.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.menu__list}>
            <li>ACCOUNT PAGES</li>
            {accountMenu?.map((el) => (
              <li
                key={el.id}
                className={
                  el?.focus || el?.active
                    ? styles.menu__item_active
                    : styles.menu__item
                }
              >
                <Link
                  to={el.link}
                  onMouseEnter={() => dispatch(handleFocus(el))}
                  onMouseLeave={() => dispatch(handleFocus({}))}
                  onClick={() => {
                    dispatch(handleActive(el))
                    if(el.title=="Sign In"){
                      dispatch(SignInActive({navigateFunc:()=>navigate(el.link)}))
                      dispatch(SignUpActive(false))
                    }
                    else if(el.title=="Sign Up"){
                      dispatch(SignInFunc({navigateFunc:()=>navigate(el.link)}))
                      dispatch(SignUpActive(true))
                    }
                  }}
                  className={styles.header__item__link}
                >
                  <div className={styles.icon}>{geticon(el)}</div>
                  <p>{el.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
        <div className={styles.need_help_section}>
          <div className="container">
            <div>
              <div className={styles.icon_box}>
                <div className={styles.icon}>?</div>
              </div>
            </div>
            <p style={{ marginTop: "1rem" }}>Need help?</p>
            <p style={{ marginTop: "0.5rem" }}>Please check our docs</p>
            <Button
              sx={{
                border: "none",
                background:
                  "linear-gradient(90deg,var(--color-brand--2),var(--color-brand--1))",
                marginTop: "1rem",
              }}
            >
              DOCUMENTATION
            </Button>
          </div>
        </div>
      </div>
    </navbor>
  );
};

