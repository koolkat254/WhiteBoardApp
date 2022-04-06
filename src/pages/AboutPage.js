import React from 'react'
import styles from './AboutPage.module.css';
const AboutPage = () => {
  return (
    <div>
    <div className={styles.box}>
      <div className={styles.boxtxt}>
        <h1>About</h1>
      </div>
      <div className={styles.prg}>
        <p className={styles.prgdsg}>asddsaasddsa</p>
      </div>
      <div className={styles.creators}>
      <span class={styles.dot1}></span>
      <h1>Creators</h1>
      </div>
      <div className={styles.contact}>
      <span class={styles.dot2}></span>
      <h1>Contact</h1>
      </div>
    </div>
    </div>
  )
}

export default AboutPage