import Link from "next/link";
import React from "react";
import { About, Blog, Cases, Home, Pages, Services } from "./Menus";

const MainMenu = ({ search, setShow }) => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="#">Home</a>
          <ul className="sub-menu">
            <Home />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">About</a>
          <ul className="sub-menu">
            <About />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">Services</a>
          <ul className="sub-menu">
            <Services />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">Cases</a>
          <ul className="sub-menu">
            <Cases />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">Blog</a>
          <ul className="sub-menu">
            <Blog />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">Pages</a>
          <ul className="sub-menu">
            <Pages />
          </ul>
        </li>
        <li className="menu-item">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        {!search && (
          <li className="search-item">
            <a
              href="#"
              data-toggle="modal"
              data-target="#search-modal"
              onClick={() => setShow()}
            >
              <i className="fas fa-search" />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default MainMenu;
