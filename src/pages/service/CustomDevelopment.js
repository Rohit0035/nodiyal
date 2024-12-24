import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";
import WorkProcessOne from "../../components/WorkProcessOne";
import SolutionsServices from "./SolutionsServices";

const CustomDevelopment = () => {
  return (
    <>
      <NavbarThree />

      {/* Navigation Bar */}
      <BreadcrumbService title={"Custom Software Developement"} />
      
      <div className='service-area pd-top-90 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6">
              <p>
                At NODIYAL, we specialize in creating custom software solutions that
                align with your business objectives. Here’s what sets us apart:
              </p>
              <ul>
                <li>Tailored solutions to meet your specific requirements.</li>
                <li>Scalable and secure architecture for future growth.</li>
                <li>Streamlined processes ensuring faster time-to-market.</li>
                <li>Expert developers utilizing cutting-edge technologies.</li>
                <li>Dedicated post-deployment support and maintenance.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src='assets/img/service/ser-cyber.jpg' alt='img' className="rounded" />
            </div>
          </div>
        </div>
      </div>

      <section className="mb-5">
        <div className="container">
          <div className='section-title text-center'>
            {/* <h6 className='sub-title'>OUR SIMPLE PROCESS</h6> */}
            <h2 className='title'>
              Our <span>Key</span> Features
            </h2>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="p-3 shadow border border-success">
                <h5>Require Analysis</h5>
                <p>
                  In-depth understanding of your business needs to craft the perfect
                  solution.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow border border-success bg-success">
                <h5 className="text-white">Custom Development</h5>
                <p className="text-white">
                  End-to-end development tailored to your specific goals and
                  workflows.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow border border-success">
                <h5>Quality Assurance</h5>
                <p>
                  Rigorous testing to ensure flawless performance and user
                  experience.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow border border-success bg-info">
                <h5 className="text-white">Scalability</h5>
                <p className="text-white">
                  Future-ready architecture designed to grow with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <WorkProcessOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default CustomDevelopment;




