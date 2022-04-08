import React from 'react';
import classes from './WhiteboardItem.module.css';
import { useContext } from 'react'
import VoteContext from '../store/voted-context'
import Card from './ui/Card';

const WhiteboardItem = (props) => {
  const voteCtx = useContext(VoteContext);
  const itemIsVote = voteCtx.itemIsVote(props.id);
  function toggleVoteStatusHandler() {
    if (itemIsVote) {
      voteCtx.removeVote(props.id)
    } else {
      voteCtx.addVote({
        id: props.id,
        image: props.image,
        title: props.title,
        author: props.author,
        
      })
    }
  }
  
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.author}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleVoteStatusHandler}>{itemIsVote ? 'Remove from Votes' : 'Vote'}</button>
        </div>
      </Card>
  </li>
  )
}

export default WhiteboardItem