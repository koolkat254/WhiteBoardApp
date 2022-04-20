import React, { useRef, useState  } from 'react'
import Card from './ui/Card'
import classes from './NewWhiteboardForm.module.css'
import { storage } from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function NewWhiteboardForm(props) {
  const [file, setFile] = useState();
  // const [imageURL, setImageURL] = useState('');
  var imageURL = ''
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const imageInputRef = useRef();
  const displayChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  };
  
  const uploadFile = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/image/${file.name}`); 
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) =>{

    }, (err) => console.log(err),
    () =>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        imageURL = downloadURL;
        console.log('new image URL:  ', imageURL);
      });
    } )
  };

  function submitHandler(event) {
    event.preventDefault();
    // const file = event.target.files[0]
    console.log("file data: ")
    console.log(file)
    uploadFile(file);
    console.log("image data: ")
    console.log(imageURL)

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageURL;
    const enteredAuthor = authorInputRef.current.value;
  

    const whiteboardData = {
      title: enteredTitle,
      image: enteredImage,
      author: enteredAuthor,
      votes: 0,
    };
    console.log("Whiteboard data: ")
    console.log(whiteboardData);
    props.onAddWhiteboard(whiteboardData);
  };


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}  >
          <label htmlFor='image'>Image</label>
          <input type='file' required id='image' onChange={displayChange} ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' required id='author' ref={authorInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Whiteboard</button>
        </div>
        
      </form>
    </Card>
    
  )
}

export default NewWhiteboardForm