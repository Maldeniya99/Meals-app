import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="localhost">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Order
            </a>
            <a class="nav-item nav-link" href="#">
              contact us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
