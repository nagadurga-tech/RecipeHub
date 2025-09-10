import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

function Navbar({ cart, search, setSearch }) {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearch = () => {
    navigate(`/recipes?search=${search}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav
      className={`shadow-sm sticky-top transition-all ${
        showNav ? "nav-show" : "nav-hide"
      }`}
      style={{
        background: "linear-gradient(90deg, #facc15, #f59e0b, #d97706)",
      }}
    >
      <div className="container-fluid px-2 py-2 d-flex align-items-center justify-content-between">
        {/* === Mobile Navbar (sm screens) === */}
        <div className="d-flex d-lg-none w-100 align-items-center justify-content-between gap-1">
          {/* Logo */}
          <Link
            to="/"
            className="fw-bold text-dark text-sm d-flex align-items-center text-decoration-none"
          >
            <span className="ms-1 fs-6">RecipeHub</span>
          </Link>

          {/* Search bar */}
          <div className="flex-grow-1 d-flex mx-1">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              className="form-control form-control-sm rounded-start"
              style={{ minWidth: "80px" }}
            />
            <button
              className="btn btn-dark btn-sm rounded-end px-2"
              type="button"
              onClick={handleSearch}
            >
              <Search size={14} />
            </button>
          </div>

          {/* Cart */}
          <Link to="/checkout" className="btn btn-sm position-relative p-1">
            <ShoppingCart size={18} className="text-dark" />
            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}
              </span>
            )}
          </Link>
        </div>

        {/* === Desktop Navbar (lg screens) === */}
        <div className="d-none d-lg-flex w-100 align-items-center justify-content-between">
          <Link
            className="navbar-brand fw-bold text-dark fs-4 text-decoration-none"
            to="/"
          >
            🍳 RecipeHub
          </Link>

          {/* Search bar */}
          <form className="d-flex mx-auto w-50">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="btn btn-dark px-3"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>

          {/* Nav links */}
          <ul className="navbar-nav ms-auto  align-items-center gap-2">
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold text-decoration-none"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold text-decoration-none"
                to="/recipes"
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-dark btn-sm fw-semibold position-relative"
                to="/checkout"
              >
                🛒 Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
