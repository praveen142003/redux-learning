import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
import Login2 from './views/Login2';
import WLogin from './views/WLogin';

function App() {
  return (
    <div>
      {/* <header className="App-header">
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
      </header> */}
      {/* <Login/> */}
      {/* <Login2/> */}
      <WLogin/>
    </div>
  );
}

export default App;
