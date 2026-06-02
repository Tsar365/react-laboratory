// import React from 'react'
import styles from "./header.module.css";
export const Header = () => { //alwayz in capital words bcz this is a component
// const header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.logo}>This is header</h3>
      <button className={styles.btn}>lOGIN</button>
   </div>
  )
}

// export default header