import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth(); // auth has {user:,token:}
  const [cart, setCart] = useCart(); // cart has[{...pdts}]
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    setCart([]); //empty ur cart on logout
    localStorage.removeItem("auth");
    localStorage.removeItem("cart");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid .gpt3__navbar-menu_container">
          <button
            className="navbar-toggler mb-3"
            type="button"
            style={{
              backgroundColor: "white",
              marginLeft: "80%",
            }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              🛒 One Stop Shop
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />

              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle mt-3"
                  data-bs-toggle="dropdown"
                >
                  Go To
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>

              <p>
                <li className="nav-item mt-3">
                  <NavLink to={"/categories"} className="nav-link ">
                    Categories
                  </NavLink>
                </li>
              </p>

              {!auth?.user ? (
                <>
                  <li className="nav-item mt-3">
                    {/* if user is not logged in */}
                    <NavLink to="/register" className="nav-link">
                      Sign-Up
                    </NavLink>
                  </li>
                  <li className="nav-item mt-3">
                    <NavLink to="/login" className="nav-link">
                      Sign-In
                    </NavLink>
                  </li>
                </>
              ) : (
                // else part
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle mt-3"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item "
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Sign-Out
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item " id="caRt">
                <NavLink to="/cart" className="nav-link">
                  <Badge
                    className="nav-link"
                    count={cart?.length}
                    showZero
                    offset={[10, -5]}
                  >
                    Cart
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
