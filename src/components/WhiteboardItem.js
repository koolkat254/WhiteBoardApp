import React from 'react';
import classes from './WhiteboardItem.module.css';
import Card from './ui/Card';

const WhiteboardItem = (props) => {
  function addVote(event) {
    event.preventDefault();
    const whiteboardData = {
      title: props.title,
      image: props.image,
      author: props.author,
      votes: props.votes + 1,
    };
    fetch(
      `https://react-getting-started-6e00e-default-rtdb.firebaseio.com/whiteboard/${props.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(whiteboardData),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    
    ).then(() => {
      // window.location.reload(false)
    })
    
  }
    // let button;
    // if (props.TESTFROMLIST === true) { 
    //   button = <button onClick={addVote}>Votes</button>;
    // } else {
    //   button = <p></p>;;
    // }
    // console.log(props.TESTFROMLIST)
 
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
          {/* <button onClick={addVote}>Vote</button> */} 
          {/* {button} */}
          {props.homepage && <button onClick={addVote}>Votes</button>}
        </div>
      </Card>
    </li>
  )

}
 

export default WhiteboardItem