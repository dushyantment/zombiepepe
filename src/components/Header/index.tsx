import React, { useState, useEffect, useRef } from "react";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [showDropNav, setShowDropNav] = useState(false);

  function handleLink() {
    setShowDropNav(false);
  }

  return (
    <>
      <div className="header-bg position-relative">
        <div className="navbar navbar-expand-lg bg-body-tertiary text-white">
          <div className="container">
            <Link className="navbar-brand text-gradient" href="/">
              Zombiepepe
            </Link>
            {!showDropNav ? (
              <RxHamburgerMenu
                className="navs menu-icon"
                onClick={() => setShowDropNav(!showDropNav)}
              />
            ) : (
              <RxCross2
                className="navs menu-icon"
                onClick={() => setShowDropNav(!showDropNav)}
              />
            )}
            <div className=" naving maxing">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#">
                    HOW TO BUY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#">
                    TOKENOMICS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#">
                    ROADMAP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white btn btn-outline-light"
                    href="#"
                  >
                    Buy Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showDropNav && (
        <div className=" w-100 h-100 header-bg  py-10">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                aria-current="page"
                href="#"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                HOW TO BUY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                TOKENOMICS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                ROADMAP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-outline-light"
                href="#"
              >
                Buy Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
