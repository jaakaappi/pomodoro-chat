import logo from './logo.svg';
import './App.css';


const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', function open() {
  ws.send('something');
});

ws.addEventListener('message', function message(data) {
  console.log('received: %s', data.data);
});

function App() {
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
    </div>
  );
}

export default App;
