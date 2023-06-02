import React from "react";
import { Outlet,Link } from "react-router-dom";
import "../components/router.css";
const Layout = () => {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          RCV
        </a>
        <div className="header-right">
          <Link  to="/" className="active">
            Home
          </Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
       
        </div>
      </div>
          
      <div style={{ "padding-left": "20px" }}>
        <Outlet/>
      </div>
      
    </>
  );
};
export default Layout;
