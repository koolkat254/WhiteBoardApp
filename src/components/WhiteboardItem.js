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
      'https://react-getting-started-9c89e-default-rtdb.firebaseio.com/whiteboard.json',
      {
        method: 'POST',
        body: JSON.stringify(whiteboardData),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    ).then(() => {
      event.preventDefault();
      
      fetch(
        'https://react-getting-started-9c89e-default-rtdb.firebaseio.com/whiteboard/'+props.id,
        {
          method: 'DELETE',
          
        }
      ).then(res => res.text()) // or res.json()
      .then(res => console.log(res))
    
    }).then(() => {
      /* window.location.reload(false) */
    })
    
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
          <p>{(props.votes)} Votes </p>
        </div>
        <div className={classes.actions}>
          <button onClick={addVote}>Vote</button> 
        </div>
      </Card>
    </li>
  )
}
 

export default WhiteboardItem