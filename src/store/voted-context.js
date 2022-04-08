import { createContext, useState } from 'react';

const VoteContext = createContext({
  vote: [],
  totalVotes: 0,
  addVote: (voteWhiteboard) => {},
  removeVote: (whiteboardId) => {},
  itemIsVote: (whiteboardId) => {}
});

export function VoteContextProvider(props) {
  const [userVote, setUserVote] = useState([]);

  function addVoteHandler(voteWhiteboard) {
    setUserVote((prevUserVote) => {
      return prevUserVote.concat(voteWhiteboard);
    });
  }

  function removeVoteHandler(whiteboardId) {
    setUserVote(prevUserVote => {
      return prevUserVote.filter(whiteboard => whiteboard.id !== whiteboardId);
    });
  }

  function itemIsVoteHandler(whiteboardId) {
    return userVote.some(whiteboard => whiteboard.id === whiteboardId);
  }

  const context = {
    vote: userVote,
    totalVotes: userVote.length,
    addVote: addVoteHandler,
    removeVote: removeVoteHandler,
    itemIsVote: itemIsVoteHandler
  };

  return (
    <VoteContext.Provider value={context}>
      {props.children}
    </VoteContext.Provider>
  );
}

export default VoteContext;