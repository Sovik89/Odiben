//import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
//import BuyMain from "./pages/BuyMain/BuyMain";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <Home />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <About />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <Blogs />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
