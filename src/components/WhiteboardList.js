import React from 'react'
import WhiteboardItem from './WhiteboardItem';
import classes from './WhiteboardList.module.css';


function WhiteboardList(props) {
  const TESTFROMLIST = props.TEST

  return (
    <ul className={classes.list}>
    {props.whiteboards?.map((whiteboard) => (
      <WhiteboardItem
        key={whiteboard.id}
        id={whiteboard.id}        
        image={whiteboard.image}
        title={whiteboard.title}
        author={whiteboard.author}
        votes={whiteboard.votes}
      TESTFROMLIST = {TESTFROMLIST}
      />
    ))}
  </ul>
  )
}

export default WhiteboardList