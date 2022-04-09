import React from 'react'
import {useContext} from 'react'
import VoteContext from '../store/voted-context'
import WhiteboardList from '../components/WhiteboardList';
import PropTypes from 'prop-types';


 
function Vote(props) {
  const voteCtx = useContext(VoteContext);

  let content;

 

  if (voteCtx.totalVotes === 0) {
    content = <p>You have no votes.</p>
  } else {
    content = <WhiteboardList whiteboard={voteCtx.vote}/>
    /* if (!work) {
      work;
    }elseif (work) {
      while (work){
        work;
      }
    } else {
      fix work;
    } */
  }
/*   Vote.contextTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  } */
  
  return (
    <section>
      <h1>Votes</h1>
       {content}
    </section>)
}
export default Vote