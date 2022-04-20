import React from 'react'
import WhiteboardItem from './WhiteboardItem';
import classes from './WhiteboardList.module.css';


function WhiteboardList(props) {
  const homePage = props.homePage
  function returnList(whiteboardList){
    if (homePage) {
      if (whiteboardList.length > 4){
        let newList = [];
        for (let i = 0; i <4 ; i++) {
          console.log(whiteboardList)
          newList.push(whiteboardList.pop(Math.random() * whiteboardList.length));
        } 
        console.log("newList")
        console.log(newList)
        return newList;
        }
    }
    else{
      console.log(whiteboardList)
      console.log("whiteboardList")
      return whiteboardList;
    } 
    
  }
  
  let fourList = returnList(props.whiteboards)
  
  return (
    <ul className={classes.list}>
    {fourList?.map((whiteboard) => (
      <WhiteboardItem
        key={whiteboard.id}
        id={whiteboard.id}        
        image={whiteboard.image}
        title={whiteboard.title}
        author={whiteboard.author}
        votes={whiteboard.votes}
        homePage = {homePage}/>
    ))}
  </ul>
  )
}

export default WhiteboardList