//import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Login from './components/Login';
//import Registration from './Registration';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
