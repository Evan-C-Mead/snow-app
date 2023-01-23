import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar';
import Hello from './components/Hello';
// import Clock from './components/Clock.js';
import NameCard from './components/NameCard';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hello />
      <NameCard />
      {/* <Clock /> */}
    </div>
  );
}
