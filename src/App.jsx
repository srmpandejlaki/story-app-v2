import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNote from './pages/AddPage';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className='main'>
      <header>
        <section className='header'>
          <h1>DiPerNot</h1>
          <NavBar />
        </section>
        <p className='text'>Welcome to the Digital Personal Notes Chest. Always Save All Your Memories Here</p>
      </header>
      <main>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/add' element={<AddNote />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
