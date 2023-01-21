import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar';
import Hello from './components/Hello';
import Clock from './components/Clock.js';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <hr className="nav-hr" />
      <Hello />
      <Clock />
    </div>
  );
}
