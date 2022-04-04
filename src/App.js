import './App.css';
import MainNavigation from './components/MainNavigation'
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage'
import UploadPage from './pages/UploadPage'
import AboutPage from './pages/AboutPage'
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import classes from './App.css'


function App() {
  return (
    <div className='main'>
      <MainNavigation />
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/upload' element={<UploadPage />}/>
        <Route path='/results' element={<ResultsPage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </div>
  );
}

export default App;
