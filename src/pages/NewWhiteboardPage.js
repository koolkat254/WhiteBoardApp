import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewWhiteboardForm from '../components/NewWhiteboardForm';

function NewWhiteboradPage() {
  const history = useNavigate();
  function addWhiteboardHandler(whiteboardData){
    fetch(
      'https://react-getting-started-6e00e-default-rtdb.firebaseio.com/whiteboard.json',
      {
        method: 'POST',
        body: JSON.stringify(whiteboardData),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    ).then(() => {
      history('/');
    })
  }
  return (
    <section>
      <h1>Wanna make a new Whiteboard?</h1>
      <NewWhiteboardForm  onAddWhiteboard={addWhiteboardHandler}/>
    </section>
  )
}

export default NewWhiteboradPage