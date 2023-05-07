import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import { Datas } from './Datas';
import { useState } from 'react';

function App() {
  const [original, setOriginal] = useState(false);

  return (
    <div className="App">
      <main className="App-main">
        <Table datas={Datas} original={original} />
        <button className="App-button__mode" onClick={() => {setOriginal(!original)}}>+</button>
        <p>George P.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
