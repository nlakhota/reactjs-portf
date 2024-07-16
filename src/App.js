import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AudioAnlyz from './components/pages/AudioAnlyz';
import Codebase from './components/pages/Codebase';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/AudioAnlyz' element={ <AudioAnlyz />}></Route>
        <Route path='/Codebase' element={ <Codebase />}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
