import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
export default function Loding() {
  let [animation,setAnimation]=useState({x1:0, x2: 100, y1: 0, y2: 100})
  useEffect(()=>{
    const interval=setInterval(()=>{
      setAnimation(state=>{
        return {
            x1:state?.x1==100?-100:state?.x1+1,
            x2:state?.x2==200?0:state?.x2+1,
            y1:state?.y1==100?-100:state?.y1+1,
            y2:state?.y2==200?0:state?.y2+1,
          }
      })
    }
    ,10)
    return ()=>clearInterval(interval)
  },[])
  return (
    <div className={styles.Loading_sector}>
      <svg
        className="loader-graphic"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="auto"
        viewBox="0 0 24 24"
        x="0px"
        y="0px"
        enable-background="new 0 0 60 60"
      >
        <linearGradient
          id="loader_gradient"
          gradientUnits="userSpaceOnUse"
          x1={`${animation?.x1}%`}
          y1={`${animation?.y1}%`}
          x2={`${animation?.x2}%`}
          y2={`${animation?.y2}%`}
        >
          <stop offset="0" style={{stopColor:"#fff",stopOpacity:"0"}}></stop>
          <stop offset="0.5" style={{stopColor:"#fff"}}></stop>
          <stop offset="1" style={{stopColor:"#fff",stopOpacity:"0"}}></stop>
        </linearGradient>

        <g fill="url(#loader_gradient)">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path>
      </g>
    </svg>
    </div>
  );
}
