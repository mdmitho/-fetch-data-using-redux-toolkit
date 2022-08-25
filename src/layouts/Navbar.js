import React from 'react';
import {  Link } from "react-router-dom";
const Navbar = () => {
    return (
      <div>
        <nav className='m-5'>
          <Link to="/" className="nav-link border-2 m-2 p-2">
            Home
          </Link>
          <Link to="/showBooks" className="nav-link border-2 m-2 p-2">
            Show Books
          </Link>
          <Link to="/addBook" className="nav-link border-2 m-2 p-2">
            Add Book
          </Link>
        </nav>
      </div>
    );
};

export default Navbar;