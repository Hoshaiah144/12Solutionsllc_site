import Link from "next/link";
import { useState } from "react";
import { About, Blog, Cases, Home, Pages } from "./headers/Menus";

const MobileHeader = ({ logo, className, headerClass }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`${
        headerClass ? headerClass : "header-navigation navigation-blue-light"
      } breakpoint-on d-block d-xl-none`}
    >
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/">
              <a className="brand-logo">
                <img
                  src={`assets/images/logo/logo-${logo ? logo : 5}.png`}
                  alt="Site Logo"
                />
              </a>
            </Link>
          </div>
          <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
            {/* Navbar Close */}
            <div
              className={`navbar-close ${className ? className : ""}`}
              onClick={() => setToggle(false)}
            >
              <i className="far fa-times" />
            </div>
            {/* Nav Search */}
            <div className="nav-search">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form_group">
                  <input
                    type="email"
                    className="form_control"
                    placeholder="Search Here"
                    name="email"
                    required=""
                  />
                  <button className="search-btn">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
            </div>
            {/* Main Menu */}
            <nav className="main-menu">
              <ul>
                <li className="menu-item has-children">
                  <a href="#">Home</a>
                  <ul className="sub-menu" style={activeLi("home")}>
                    <Home />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("home")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">About</a>
                  <ul className="sub-menu" style={activeLi("About")}>
                    <About />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("About")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">Cases</a>
                  <ul className="sub-menu" style={activeLi("Cases")}>
                    <Cases />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("Cases")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu" style={activeLi("Blog")}>
                    <Blog />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("Blog")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu" style={activeLi("Pages")}>
                    <Pages />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("Pages")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="search-item">
                  <a href="#" data-toggle="modal" data-target="#search-modal">
                    <i className="fas fa-search" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right-nav">
            <ul>
              <li className="cart-item">
                <a href="#">
                  <i className="fas fa-shopping-basket" />
                </a>
              </li>
              <li className="lang-dropdown">
                <select className="wide">
                  <option value={1}>English</option>
                  <option value={2}>Russian</option>
                </select>
              </li>
              <li className="nav-button">
                <Link href="/contact">
                  <a className="main-btn btn-blue-light">get free quote</a>
                </Link>
              </li>
              <li className="navbar-toggle-btn">
                <div
                  className={`navbar-toggler ${toggle ? "active" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
