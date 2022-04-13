import React from 'react';
import classes from './WhiteboardItem.module.css';
import Card from './ui/Card';

const WhiteboardItem = (props) => {
 return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.author}</p>
          <p>{(props.votes)} Votes </p>
        </div>
        <div className={classes.actions}>
          <button>Vote</button> 
        </div>
      </Card>
    </li>  
  )
}
 

export default WhiteboardItem