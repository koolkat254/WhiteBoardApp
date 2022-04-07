import React from 'react'
import styles from './AboutPage.module.css';
const AboutPage = () => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.boxlabel}>
            <h1 className={styles.labeltxt}>About</h1>
        </div>
        <div>
          <p className={styles.prg}>Welcome to our Whiteboard App! We were originally a school project that our teacher had assigned to us.</p>
          <p className={styles.prg}>This Whiteboard allows people to take photos of their art and drawings on a whiteboard. You are them able
            to send those photos on a digital whiteboard. Then the final product would be a digital whiteboard containing all of your drawings
            you had taken a photo of. You can also have your whiteboard enter a competition with another whiteboard made by another user. Other
            users will vote on which is the best one and the winnings will be posted in the "Results" page.</p>
        </div>
      </div>
      <div className={styles.creators}>
        <h1>Creators</h1>
        {/* Creators Names */}

      </div>
      <div className={styles.contact}>
        <h1>Contact</h1>
      </div>
    
    </div>
  )
}

export default AboutPage