import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tham gia nhóm cộng đồng Facebook
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/dfinity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dfinity Việt Nam
        </a>
        <a
          className="App-link"
          href="https://t.me/joinchat/FgipHXLL0r0wMmZl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nhóm Telegram
        </a>
      </header>
    </div>
  );
}

export default App;
