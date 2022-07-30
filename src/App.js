import Home from './component/Home';
import './App.css';
import Counter from './component/Counter';
import { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './component/Chat';

function App() {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount(count + 1)
  }
  const handleCountMinus = () => {
    setCount(count - 1)
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/counter" element={<Counter plus={handleCountPlus} minus={handleCountMinus} count={count}/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
