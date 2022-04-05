import React from 'react'
import classes from "./About.module.css"

function AboutPage() {
  return (
    <div className={classes.border}>
      <h1 className={classes.header}>About Our Website</h1>
      <p className={classes.text}>
        The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. Start with the font you want, and end with a generic family (to let the browser pick a similar font in the generic family, if no other fonts are available). The font names should be separated with comma. Read more about fallback fonts in the next chapter.
      </p>
    </div>
  )
}

export default AboutPage