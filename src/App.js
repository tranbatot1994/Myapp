import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nhóm Facebook cộng đồng
        </p> 
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dfinity Việt Nam
        </a> 
        <a 
        className="App-link"
        href="https://t.me/joinchat/FgipHXLL0r0wMmZl">Nhóm telegram
        </a>
      </header>
    </div>
  );
}

export default App;
