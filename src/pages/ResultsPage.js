import React from 'react'
import WhiteboardList from '../components/WhiteboardList';
import {useEffect,useState} from 'react'

function ResultsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedWhiteboards, setLoadedWhiteboards] = useState([]);
  const TEST = true
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-9c89e-default-rtdb.firebaseio.com/whiteboard.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const whiteboards = [];

        for (const key in data) {
          const whiteboard = {
            id: key,
            ...data[key]
          };

          whiteboards.push(whiteboard);
        }

        setIsLoading(false);
        whiteboards.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
        setLoadedWhiteboards(whiteboards);
      });
  }, []); 
  
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <h1>Results</h1>
      <WhiteboardList whiteboards={loadedWhiteboards} />
    </div>
  );
}

export default ResultsPage