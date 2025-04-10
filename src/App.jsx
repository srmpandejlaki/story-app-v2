import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPageWrapper from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import NavBar from './components/nav-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authedUser: null,
    };
  }
 
  render() {
 
    if (this.state.authedUser === null) {
      return (
        <div className='main'>
          <header className='header'>
            <h1>Aplikasi Kontak</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<p>Halaman Login</p>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route exact path='/home' element={<HomePage />} />
              <Route path='/note/:id' element={<DetailPageWrapper />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      )
    }
 
    return (
      < div class='main'>
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
            <Route path='/note/:id' element={<DetailPageWrapper />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
