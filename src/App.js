import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Elyse</code> is a boss ass bitch.
        </p>
        <a className="App-link" href="https://random.dog" target="_blank" rel="noopener noreferrer">
          Click for a surprise!
        </a>
      </header>
    </div>
  );
}

export default App;
