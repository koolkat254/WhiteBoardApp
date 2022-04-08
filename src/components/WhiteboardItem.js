import React from 'react';
import classes from './WhiteboardItem.module.css';

const WhiteboardItem = (props) => {
  return (
    <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.author}</p>
        </div>
        <div className={classes.actions}>
          <button>Vote</button>
        </div>
  </li>
  )
}

export default WhiteboardItem