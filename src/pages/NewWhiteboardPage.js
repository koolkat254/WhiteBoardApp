import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewWhiteboardForm from '../components/NewWhiteboardForm';

function NewWhiteboradPage() {
  const history = useNavigate();
  function addWhiteboardHandler(whiteboardData){
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
      history('/');
    })
  }
  return (
    <section>
      <h1>Add New Whiteboard</h1>
      <p>Create your own Virtual Whiteboard and upload in real life pictures to your Virtual Whiteboard!</p>
      <NewWhiteboardForm  onAddWhiteboard={addWhiteboardHandler}/>
    </section>
  )
}

export default NewWhiteboradPage