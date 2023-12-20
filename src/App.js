//import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
//import BuyMain from "./pages/BuyMain/BuyMain";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      * <Header /> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
