import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Product App
        </a>

        <div className="navbar-nav">

          <a className="nav-link" href="/addproduct">
            Add Product
          </a>

          <a className="nav-link" href="/searchproduct">
            Search Product
          </a>

          <a className="nav-link" href="/deleteproduct">
            Delete Product
          </a>

          <a className="nav-link" href="/viewproducts">
            View Products
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navigation