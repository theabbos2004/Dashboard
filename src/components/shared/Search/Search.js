import React from 'react'
import { SearchIcon } from '../../../assets/img/icon'
import styles from "./index.module.scss"
export default function Search() {
  return (
    <div className={styles.search_section}>
        <div className={styles.icon_section}>
            <SearchIcon color='var(--color-brand--4)' width={window.innerWidth>576?"17":"10"}/>
        </div>
        <div className={styles.input_section}>
            <input placeholder='Type here...'/>
        </div>
    </div>
  )
}
