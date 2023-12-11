import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../public/images/odiben.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header className="header_container flex justify-around items-center w-[100vw] bg-white p-2 shadow-md sticky top-0 left-0">
      <div className="logo w-1/6 flex justify-center">
        <img src={Logo} height="32px" width="32px" alt="logo" />
      </div>
      <nav className="menus w-3/6">
        <div className="space-x-8">
          <Link to="">About Us</Link>
          <Link to="">Blogs</Link>
          <Link to="">Our Team</Link>
          <Link to="">Home</Link>
          <Link to="">Contact Us</Link>
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
      </div>
    </header>
  );
}

export default Header;
