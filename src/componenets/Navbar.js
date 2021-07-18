import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">
          <b>React Meal</b>
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
              <b>Home </b> <span class="sr-only"></span>
            </a>
            <a class="nav-item nav-link" href="#">
              <b>Order</b>
            </a>
            <a class="nav-item nav-link" href="#">
              <b>contact us</b>
            </a>
          </div>
        </div>
        <form>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>

        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
