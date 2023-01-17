import './App.css';
import './components/Clock.js';
import Hello from './components/Hello';
import Clock from './components/Clock.js';

export default function App() {
  return (
    <div className="App">
      <Hello />
      <Clock />
    </div>
  );
}
