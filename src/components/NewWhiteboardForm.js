import { useRef } from 'react';
import React from 'react'
import Card from './ui/Card'
import classes from './NewWhiteboardForm.module.css'

function NewWhiteboardForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const authorInputRef = useRef();
  
  
  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
  

    const whiteboardData = {
      title: enteredTitle,
      image: enteredImage,
      author: enteredAuthor,
      votes: 0,
    };
    props.onAddWhiteboard(whiteboardData);
  }


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.border}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='file' required id='png' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' required id='author' ref={authorInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>+</button>
        </div>
        </div>
        
      </form>
    </Card>
    
  )
}

export default NewWhiteboardForm