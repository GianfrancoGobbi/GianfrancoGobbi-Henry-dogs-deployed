import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Landing from './Components/Landing/Landing';
import Create from './Components/Create/Create';
import { React} from 'react';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;

// "react-router-dom": "^5.2.0",