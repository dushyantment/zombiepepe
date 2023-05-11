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
  {
    /*} const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/
  }

  // const navbarClasses = `navbar navbar-expand-lg navbar-dark bg-blues fixed-top `;

  // Rest of the component code

  return (
    <>
      {/*} <div className="header-bg position-relative">
        <nav className={navbarClasses}>
          <div className="container">
            <Link className="navbar-brand text-gradient" href="/">
              Zombiepepe
            </Link>
            {!isNavOpen ? (
              <RxHamburgerMenu className="navs menu-icon" onClick={toggleNav} />
            ) : (
              <RxCross2 className="navs menu-icon" onClick={toggleNav} />
            )}

            <div
              className={`collapse navbar-collapse ${isNavOpen && "show"}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white active"
                    aria-current="page"
                    href="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#how-to-buy">
                    HOW TO BUY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#tokenomics">
                    TOKENOMICS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#roadmap">
                    ROADMAP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white btn btn-outline-light"
                    href="/"
                  >
                    Buy Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>*/}
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
                    href="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#how-to-buy">
                    HOW TO BUY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#tokenomics">
                    TOKENOMICS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#roadmap">
                    ROADMAP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white btn btn-outline-light"
                    href="/"
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
                onClick={handleLink}
                className="nav-link text-white active"
                aria-current="page"
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#about"
                onClick={handleLink}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#how-to-buy"
                onClick={handleLink}
              >
                HOW TO BUY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#tokenomics"
                onClick={handleLink}
              >
                TOKENOMICS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#roadmap"
                onClick={handleLink}
              >
                ROADMAP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-outline-light"
                href="/"
                onClick={handleLink}
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
