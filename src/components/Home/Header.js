import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../public/images/odiben.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header() {
  const { user } = useSelector((state) => state.users);
  const navigate=useNavigate();
  return (
    <header className="header_container flex justify-around items-center w-[100vw] bg-white p-2 shadow-md sticky top-0 left-0 z-50">
      <div className="logo w-1/6 flex justify-center">
        <img src={Logo} height="32px" width="32px" alt="logo" />
      </div>
      <nav className="menus w-3/6 hidden md:block">
        <div className="space-x-8">
          <NavLink to="/" className="py-[0.5rem]">
            Home
          </NavLink>
          <NavLink to="/blogs" className="py-[0.5rem]">
            Blogs
          </NavLink>
          <NavLink to="/about" className="py-[0.5rem]">
            About Us
          </NavLink>
          {user.isAdmin&&
           <NavLink to="/admin-dashboard" className="py-[0.5rem]">
           Admin Dashboard
         </NavLink>}
        </div>
      </nav>
      <div className="icons flex justify-evenly w-2/6 text-purple-800 text-2xl">
        <div className="wishlist">
          <FavoriteBorderIcon />
        </div>
        <div className="cart">
          <ShoppingCartIcon />
        </div>
        <div className="profile">
          <AccountCircleIcon />
        </div>
        <div className="logout-lined">
          <LogoutOutlinedIcon onClick={()=>{
            localStorage.removeItem("token");
            navigate("/login");
          }}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
