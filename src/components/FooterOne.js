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
                      <a href='https://www.facebook.com/share/EttKVKC1FpbzVYSE/?mibextid=qi2'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fclouebytes'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/clouebytes/?igsh=MWQzZ25weDhucnozMA%3D%3D'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/company/clouebytes/'>
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
                    <Link to='/ux-service'> <FaArrowRight />Custom Software Developement
                    </Link>
                  </li>
                  <li>
                    <Link to='/web-service'>  <FaArrowRight />Web Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to='/app-service'>  <FaArrowRight />AI, Data & Analystics
                    </Link>
                  </li>
                  <li>
                    <Link to='/cyber-service'>  <FaArrowRight />Cloud Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to='/digita-service'>  <FaArrowRight />Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link to='/digita-service'>  <FaArrowRight />System Integration
                    </Link>
                  </li>

                  <li>
                    <Link to='/digita-service'>  <FaArrowRight />Home
                    </Link>
                  </li>

                  <li>
                    <Link to='/digita-service'>  <FaArrowRight />About Us
                    </Link>
                  </li>

                  <li>
                    <Link to='/digita-service'>  <FaArrowRight />Contact Us
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
                    <Link to='/ux-service'>  <FaArrowRight /> Product Design & Development

                    </Link>
                  </li>
                  <li>
                    <Link to='/web-service'>  <FaArrowRight /> Manufacturing & Prototyping

                    </Link>
                  </li>
                  <li>
                    <Link to='/app-service'>  <FaArrowRight /> CAD/CAM Services

                    </Link>
                  </li>
                  <li>
                    <Link to='/cyber-service'>  <FaArrowRight /> Testing & Quality Assurance

                    </Link>
                  </li>
                  <li>
                    <Link to='/digita-service'> <FaArrowRight /> Maintenance & Troubleshootin

                    </Link>
                  </li>

                  <li>
                    <Link to='/ux-service'> <FaArrowRight /> Architectural Design</Link>
                  </li>
                  <li>
                    <Link to='/web-service'> <FaArrowRight /> Structural Design</Link>
                  </li>
                  <li>
                    <Link to='/app-service'> <FaArrowRight /> Urban Planning</Link>
                  </li>
                  <li>
                    <Link to='/cyber-service'><FaArrowRight /> Landscape Architecture</Link>
                  </li>
                  <li>
                    <Link to='/digita-service'><FaArrowRight /> BIM (Building Information Modeling)</Link>
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
            <a href='https://www.facebook.com/share/EttKVKC1FpbzVYSE/?mibextid=qi2'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fclouebytes'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/clouebytes/?igsh=MWQzZ25weDhucnozMA%3D%3D'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/clouebytes/'>
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
