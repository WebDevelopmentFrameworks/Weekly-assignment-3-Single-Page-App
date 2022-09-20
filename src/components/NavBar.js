import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-0">
      <div className="container-fluid">
        <Link className="navbar-brand text-white ms-3 my-auto fs-4" aria-current="page" to="/">SinglePA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/peekaboo">Peek a Boo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) 
}
