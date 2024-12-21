import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const FooterOne = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };



  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className='footer-area  bg-cover mt-0 pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo.png' alt='img' width="100px" />
                </div>
                <div className='details'>
                  <p>
                    Dedicated to innovation, NODIYAL excels in offering cutting-edge IT,
                    Mechanical Engineering, and Civil Engineering solutions, driving
                    success for businesses across the globe.
                  </p>
                  <ul className='social-media'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Service</h4>
                <ul>
                  <li>
                    <Link to='/'> <FaArrowRight />Custom Software Developement
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight />Web Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight />AI, Data & Analystics
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight />Cloud Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight />Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight />System Integration
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>  <FaArrowRight />Home
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>  <FaArrowRight />About Us
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>  <FaArrowRight />Contact Us
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Useful Links</h4>
                <ul>
                  <li>
                    <Link to='/'>  <FaArrowRight /> Product Design & Development

                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight /> Manufacturing & Prototyping

                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight /> CAD/CAM Services

                    </Link>
                  </li>
                  <li>
                    <Link to='/'>  <FaArrowRight /> Testing & Quality Assurance

                    </Link>
                  </li>
                  <li>
                    <Link to='/'> <FaArrowRight /> Maintenance & Troubleshootin

                    </Link>
                  </li>

                  <li>
                    <Link to='/'> <FaArrowRight /> Architectural Design</Link>
                  </li>
                  <li>
                    <Link to='/'> <FaArrowRight /> Structural Design</Link>
                  </li>
                  <li>
                    <Link to='/'> <FaArrowRight /> Urban Planning</Link>
                  </li>
                  <li>
                    <Link to='/'><FaArrowRight /> Landscape Architecture</Link>
                  </li>
                  <li>
                    <Link to='/'><FaArrowRight /> BIM (Building Information Modeling)</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <ul>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaPhone size={25} />
                          <span>(91) 323332333, 22323323</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <IoMailOpenOutline size={25} />
                          <span> Contact@info.com </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-infopr-0 mb-2'>
                          <div className='post-info mb-2'>
                            <IoLocationOutline size={25} />
                            <span> ipsum ipsum </span>
                          </div>
                          <p style={{ color: '#fff', fontSize: '14px' }}>
                            Lorem Lorem
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <p>© NODIYAL 2024-25 | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="whatsicon">
        <Link to="https://api.whatsapp.com/send/?phone=1234567890&text&type=phone_number&app_absent=0">
          <FaWhatsapp size={45} />
        </Link>
      </div>

      <div className="socialicon">
        <ul className=''>
          <li>
            <a href='#'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
