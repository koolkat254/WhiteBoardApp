import React from 'react'
import WhiteboardItem from './WhiteboardItem';
import classes from './WhiteboardList.module.css';

const WhiteboardList = (props) => {
  return (
    <ul className={classes.list}>
    {props.whiteboards.map((whiteboard) => (
      <WhiteboardItem
        key={whiteboard.id}
        id={whiteboard.id}
        image={whiteboard.image}
        title={whiteboard.title}
        address={whiteboard.address}
        description={whiteboard.description}
      />
    ))}
  </ul>
  )
}

export default WhiteboardList