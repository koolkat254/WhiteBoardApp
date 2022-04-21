import React from 'react'
import WhiteboardList from '../components/WhiteboardList';
import {useEffect,useState} from 'react'

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedWhiteboards, setLoadedWhiteboards] = useState([]);
  const homePage = true
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-6e00e-default-rtdb.firebaseio.com/whiteboard.json'
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
    <section>
      <h1>Home Page</h1>
      <WhiteboardList whiteboards={loadedWhiteboards} homePage={homePage} />
    </section>
  );
}

export default HomePage