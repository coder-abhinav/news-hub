import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" style={{padding: "1.5%"}}>
          <div className="container-fluid , container" >
            <a className="navbar-brand" href="/" style={{color: "white"}}>
              News Hub
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" >
                  <Link to="/">
                  <a className="nav-link active" aria-current="page" href="/" style={{color: "white"}}>
                    Home
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports" >
                  <a  className="nav-link active" aria-current="page" href="/"style={{color: "white"}}>
                    Sports
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/business">
                  <a className="nav-link active" aria-current="page" href="/"style={{color: "white"}}>
                    Business
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/entertainment">
                  <a className="nav-link active" aria-current="page" href="/"style={{color: "white"}}>
                    Entertainment
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
