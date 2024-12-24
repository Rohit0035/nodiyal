import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";
import WorkProcessOne from "../../components/WorkProcessOne";

const WebServices = () => {
  return (
    <>
      <NavbarThree />

      {/* Navigation Bar */}
      <BreadcrumbService title={"Web Application Development"} />

      <div className='service-area pt-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h4>
                Importance of Developing a Website for Your Business
              </h4>
              <p>
                NODIYAL offers premier website development services, crafting bespoke websites to elevate your online presence. Our adept team specializes in building user-friendly, SEO-optimized, and responsive websites, empowering your business for unparalleled success.
              </p>
              <p>
                As a prominent web development firm based in India, NODIYAL caters to a diverse clientele, ranging from startups to corporate giants across various sectors. From conceptualization to execution, we prioritize optimal UX, UI, coding standards, hosting solutions, and more, ensuring your project's success.
              </p>
            </div>
            <div className='col-lg-6'>
              <div className='thumb'>
                <img src='assets/img/service/ser-web.jpg' alt='img' className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-5 pb-5 bg-success">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h4 className="text-white text-center"> Why Web Application Development Matters?</h4>
              <p className="text-center text-white">In today’s digital era, web applications are essential for businesses to:</p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-white pt-3 pb-3">
                    <li>
                      Enhance customer engagement through personalized experiences.
                    </li>
                    <li>
                      Streamline operations with automated workflows.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-white  pt-3 pb-3">
                    <li>
                      Ensure scalability to meet future demands.
                    </li>
                    <li>
                      Provide 24/7 accessibility across devices and geographies.
                    </li>
                    <li>
                      Gain a competitive edge with innovative solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <WorkProcessOne />
      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default WebServices;
