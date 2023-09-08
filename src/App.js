// require('dotenv').config()
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Sports from './pages/Sports';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  render () {
    return (
      <BrowserRouter>
        <header>
          <div className='yellowBanner'>
            If you notice that you or somebody you know may be gambling excessively, call the National Problem Gambling Helpline today at 1800-6-668-668.
          </div>
          <NavBar />
        </header>
        <main className='contentContainer'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sports" element={<Sports />}/>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    )
  }
}

export default App;