import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarThree = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>
      {/* ==================== Navbar Two Start ====================*/}
      <nav className='navbar navbar-area navbar-area-2 navbar-expand-lg nav-dark fixed' >
        <div className='container nav-container custom-container'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src='assets/img/logo.png' alt='img' />
            </Link>
          </div>
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>

              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Software Services</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/ux-service'>Custom Software Developement
                    </Link>
                  </li>
                  <li>
                    <Link to='/web-service'>Web Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to='/app-service'>AI, Data & Analystics
                    </Link>
                  </li>
                  <li>
                    <Link to='/cyber-service'>Cloud Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to='/digita-service'>Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link to='/digita-service'>System Integration
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='menu-item-has-children'>
                <a href='#'>Mechnical Engineering
                </a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/ux-service'>Product Design & Development

                    </Link>
                  </li>
                  <li>
                    <Link to='/web-service'>Manufacturing & Prototyping

                    </Link>
                  </li>
                  <li>
                    <Link to='/app-service'>CAD/CAM Services

                    </Link>
                  </li>
                  <li>
                    <Link to='/cyber-service'>Testing & Quality Assurance

                    </Link>
                  </li>
                  <li>
                    <Link to='/digita-service'>Maintenance & Troubleshootin

                    </Link>
                  </li>
                </ul>
              </li>

              <li className='menu-item-has-children'>
                <a href='#'>Civil Engineering

                </a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/ux-service'>Architectural Design</Link>
                  </li>
                  <li>
                    <Link to='/web-service'>Structural Design</Link>
                  </li>
                  <li>
                    <Link to='/app-service'>Urban Planning</Link>
                  </li>
                  <li>
                    <Link to='/cyber-service'>Landscape Architecture</Link>
                  </li>
                  <li>
                    <Link to='/digita-service'>BIM (Building Information Modeling)</Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <Link to='/blog'>Blog</Link>
              </li> */}
            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center'>
            {/* <a className='navbar-phone d-xl-inline-block d-none' href='tel:'>
              <span className='icon'>
                <img src='assets/img/icon/1.png' alt='img' />
              </span>
              <span>Need help?</span>
              <h5>(91) 7067994744, 7470391093</h5>
            </a> */}
            <Link className='btn btn-border-base' to='/contact'>
              Contact Us  <FaPlus />
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarThree;
