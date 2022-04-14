import './App.css';
import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewWhiteBoardPage from './pages/NewWhiteboardPage'
import ResultsPage from './pages/ResultsPage'
import AboutPage from './pages/AboutPage'
import NavBar from './components/NavBar';

function App() {
  return (

    <div className='main'>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-WhiteBoard" element={<NewWhiteBoardPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </div>
  );
}

export default App;
