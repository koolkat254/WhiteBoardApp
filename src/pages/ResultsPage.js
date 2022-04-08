import React from 'react'
import {useContext} from 'react'
import VoteContext from '../store/voted-context'
import WhiteboardList from '../components/WhiteboardList';


function Vote() {
  const voteCtx = useContext(VoteContext);

  let content;

  if (voteCtx.totalVotes === 0) {
    content = <p>You have no votes.</p>
  } else {
    content = <WhiteboardList /* whiteboard={voteCtx.vote} *//>
  }
  
  
  return (
    <section>
      <h1>Votes</h1>
       {content}
    </section>)
}
export default Vote