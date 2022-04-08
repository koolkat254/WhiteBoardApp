import React from 'react'
import WhiteboardList from '../components/WhiteboardList';

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      author:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      author:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

const HomePage = () => {
  return (
    <div>
      <WhiteboardList whiteboards={DUMMY_DATA}></WhiteboardList>
    </div>
  )
}

export default HomePage