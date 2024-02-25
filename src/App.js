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
import Admin from "./pages/Admin/Admin"
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import MyItems from "./pages/Profile/MyItems/MyItems";
import AdminProfile from "./pages/Admin/AdminProfile";
import EditAdminProfile from "./pages/Admin/EditAdminProfile";
import Wallet from "./pages/Wallet/Wallet";
import CreateItem from "./pages/Profile/MyItems/CreateItem";

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
          <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <Admin />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
         />
         <Route
          path="/my-profile"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <Profile />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
         />
         <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <EditProfile />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
         />
         <Route
          path="/admin-profile"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <AdminProfile />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
         />
         <Route
          path="/edit-admin-profile"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <EditAdminProfile />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
         />
         <Route
          path="/my-items"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <MyItems />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
         />
         <Route
          path="/create-item"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <CreateItem />
                <Footer />
              </React.Fragment>
            </ProtectedRoute>
          }
         />
         <Route
          path="/my-wallet"
          element={
            <ProtectedRoute>
              <React.Fragment>
                <Header />
                <Wallet />
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
