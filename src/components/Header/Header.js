import React from 'react'
import styles from "./index.module.scss"
import PathUrl from '../shared/PathUrl/PathUrl'
import Search from '../shared/Search/Search'
import { MenuIcon, NotificationIcon, ProfileIcon, SettingIcon } from '../../assets/img/icon'
import { useDispatch, useSelector } from 'react-redux'
import { navborIsActive } from '../../Reducer/MenuReducer'

export default function Header() {
  let navborActive=useSelector(store=>store.menu.navborActive)
  let dispatch=useDispatch()
  return (
    <div className={styles.Header}>
      <div className={styles.left}>
        {
          window.innerWidth>576?""
          :<button onClick={()=>dispatch(navborIsActive(!navborActive))}>
            <MenuIcon color={navborActive?"var(--color-brand--3)":"var(--color-brand--4)"}/>
          </button>
        }
        <PathUrl/>
      </div>
      <div className={styles.right}>
        <Search/>
        <div>
          <ProfileIcon color='var(--color-brand--4)' width={window.innerWidth>576?"16":"10"}/>
          <p>Sign In</p>
        </div>
        <SettingIcon color='var(--color-brand--4)' width={window.innerWidth>576?"16":"10"}/>
        <NotificationIcon color='var(--color-brand--4)' width={window.innerWidth>576?"16":"10"}/>
      </div>
    </div>
  )
}
