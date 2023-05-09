import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Topbar from './components/Topbar'

function App() {
  return (
    
    <div className="App">
  <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
