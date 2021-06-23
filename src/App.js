import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tham gia cộng đồng DFINITY
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/dfinity"
          target="_blank"
          rel="noopener noreferrer"
        >
         Nhóm Facebook
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
