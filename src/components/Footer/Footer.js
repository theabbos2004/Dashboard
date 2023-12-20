import React from 'react'
import styles from "./index.module.scss"
export default function Footer({
  sx={},
  firstChild={}
}) {
  return (
    <div className={`${styles.Footer} container`} style={{...sx}}>
      <div style={{...firstChild}}>@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</div>
      <div className={styles.right}>
        <div>Marketplace</div>
        <div>Blog</div>
        <div>License</div>
      </div>
    </div>
  )
}
