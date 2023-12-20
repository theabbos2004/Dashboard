import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
export default function PathUrl() {
    let menu=useSelector(state=>state.menu)
  return (
    <div className={styles.pathURL_sector}>
            {
                menu?.pathURL?.map((item,index)=><div key={index} className={item?.active? styles.pathURL_item_active:styles.pathURL_item}>
                    {item.title}
                    <p>/</p>
                </div>)
            }
        </div>
  )
}
