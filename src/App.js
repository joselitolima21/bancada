import React from 'react';
import 'typeface-roboto/index.css'
import './App.css';
import Routes from './routes'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className='window'>
      <Header/>
        <Routes/>
      <Footer/>
    </div>
  );
}

export default App;

