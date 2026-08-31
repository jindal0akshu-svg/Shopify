import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => navigate('/header', {state : {id:"1", name:"John"}})}>Go to Header</button>
      <button onClick={() => navigate('/footer')}>Go to Footer</button>
      <button onClick={() => navigate('/main')}>Go to Main</button>
    </div>
  );
}

export default App;
