import './App.css';
import Horoscope from './Horoscope';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Horoscope sign='libra' day='today' />
      </header>
    </div>
  );
}

export default App;
