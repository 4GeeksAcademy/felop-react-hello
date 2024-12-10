import React from "react";

function Navbar() {
    return( 
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid px-5">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </nav>
    );
};
export default Navbar;