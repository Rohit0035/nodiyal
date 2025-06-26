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
import { FaArrowAltCircleRight } from "react-icons/fa";

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
                  <p style={{textAlign:'justify'}}>
                    Dedicated to innovation, NODIYAL excels in offering cutting-edge IT,
                    Mechanical Engineering, and Civil Engineering solutions, driving
                    success for businesses across the globe.
                  </p>
                  {/* <ul className='social-media'>
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
                  </ul> */}
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Services</h4>
                <ul>
                  <li>
                    <Link to='/custom-development'> <FaArrowRight />Custom Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to='/web-service'>  <FaArrowRight />Web Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to='/digita-service'>  <FaArrowRight />AI, Data & Analystics
                    </Link>
                  </li>
                  <li>
                    <Link to='/cloud-service'>  <FaArrowRight />Cloud Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to='/quality-assurance'>  <FaArrowRight />Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link to='/system-integration'>  <FaArrowRight />System Integration
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>  <FaArrowRight />Home
                    </Link>
                  </li>

                  <li>
                    <Link to='/about'>  <FaArrowRight />About Us
                    </Link>
                  </li>

                  <li>
                    <Link to='/contact'>  <FaArrowRight />Contact Us
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
                    <Link to='/product-design'>  <FaArrowRight /> Product Design & Development

                    </Link>
                  </li>
                  <li>
                    <Link to='/manufacturing-prototyping'>  <FaArrowRight /> Manufacturing & Prototyping

                    </Link>
                  </li>
                  <li>
                    <Link to='/cad-cam'>  <FaArrowRight /> CAD/CAM Services

                    </Link>
                  </li>
                  <li>
                    <Link to='/testing-quality'>  <FaArrowRight /> Testing & Quality Assurance

                    </Link>
                  </li>
                  <li>
                    <Link to='/maintenance-troubleshooting'> <FaArrowRight /> Maintenance & Troubleshootingg

                    </Link>
                  </li>

                  <li>
                    <Link to='/architectural-design'> <FaArrowRight /> Architectural Design</Link>
                  </li>
                  <li>
                    <Link to='/structural-design'> <FaArrowRight /> Structural Design</Link>
                  </li>
                  <li>
                    <Link to='/urban-planning'> <FaArrowRight /> Urban Planning</Link>
                  </li>
                  <li>
                    <Link to='/landscape-architecture'><FaArrowRight /> Landscape Architecture</Link>
                  </li>
                  <li>
                    <Link to='/bim'><FaArrowRight /> BIM (Building Information Modeling)</Link>
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
                          <span>
                            <a href="tel:+61466938821">
                             +61466938821
                            </a></span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <IoMailOpenOutline size={25} />
                          <span> <a href="email:info@nodiyal.com ">info@nodiyal.com </a> </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-infopr-0 mb-2'>
                          <div className='post-info mb-2'>
                            <div className="d-flex">
                              <IoLocationOutline size={25} />
                              <p className="mb-0" style={{ color: '#fff', fontSize: '14px' }}>
                                Level 1/ 239 king st, Newcastle NSW 2300
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-infopr-0 mb-2'>
                          <div className='post-info mb-2'>
                            <div className="d-flex">
                              <FaArrowAltCircleRight size={25} />
                              <p className="mb-0" style={{ color: '#fff', fontSize: '14px' }}>
                                 ABN: 40141837489
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                  <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-infopr-0 mb-2'>
                          <div className='post-info mb-2'>
                            <div className="d-flex">
                               <b className="text-white me-2">ABN:</b>
                              <p className="mb-0" style={{ color: '#fff', fontSize: '14px' }}>
                                 <b>40141837489</b> 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='media'>
                      <div className='media-body align-self-center'>
                        <div className='post-infopr-0 mb-2 text-white'>
                           
                        </div>
                      </div>
                    </div>
                  </li> */}
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
        <Link to="https://api.whatsapp.com/send/?phone=401986606&text&type=phone_number&app_absent=0">
          <FaWhatsapp size={45} />
        </Link>
      </div>

      {/* <div className="socialicon">
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
      </div> */}
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
