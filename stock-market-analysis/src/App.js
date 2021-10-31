import logo from './logo.svg';
import './App.css';

// import { response } from 'express';

function App() {
  async function handle() {
    const res = await fetch('http://localhost:3000/');
    const parsedres = await res.json();
    console.log(parsedres);
  }
  
  return (
    <button onClick={handle }>get</button>
  );
}

export default App;
