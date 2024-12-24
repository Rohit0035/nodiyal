import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
    FaArrowRight,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";
import WorkProcessOne from "../../components/WorkProcessOne";

const CyberService = () => {
  return (
    <>
      <NavbarThree/>

      {/* Navigation Bar */}
      <BreadcrumbService title={"Cloud Consulting"} />

      <section className="pt-5 pb-5">
          <div className="container">
              <div className="row">
                   <div className="col-md-6">
                       <img src='assets/img/service/ser-cyber.jpg' alt='img' className="rounded"/>
                   </div>
                   <div className="col-md-6">
                       <h4>Empowering Businesses Through Seamless Cloud Transformation</h4>
                       <p>
                            At NODIYAL, we specialize in providing end-to-end cloud consulting 
                            services that help businesses harness the power of the cloud. Our 
                            expertise lies in designing, implementing, and managing tailored 
                            cloud solutions that drive efficiency, scalability, and 
                            cost-effectiveness.
                       </p>
                       <p>
                            Whether you're migrating to the cloud, optimizing existing infrastructure, 
                            or implementing a hybrid model, our cloud consulting services ensure your 
                            business achieves its full potential in a digital-first world.
                       </p>
                   </div>
              </div>
          </div>
      </section>

      <section className=" pb-5 pt-5 bg-success">
          <div className="container">
              <div className="row">
                   <div className="col-md-8">
                       <h4 className="text-white">Why Cloud Consulting Matters?</h4>
                       <p className="text-white">
                          Adopting the right cloud strategy is critical for businesses 
                          aiming to stay competitive in today's fast-paced environment. 
                          Key benefits include:
                       </p>
                       <ul className="text-white">
                          <li>
                             <b>Increased Agility: </b>Scale resources up or down on demand to meet business needs.
                          </li>
                          <li>
                             <b>Cost Savings: </b>Scale resources up or down on demand to meet business needs.
                          </li>
                          <li>
                             <b>Enhanced Security: </b>Scale resources up or down on demand to meet business needs.
                          </li>
                          <li>
                             <b>Global Accessibility: </b>Scale resources up or down on demand to meet business needs.
                          </li>
                          <li>
                             <b>Disaster Recovery: </b>Scale resources up or down on demand to meet business needs.
                          </li>
                       </ul>
                   </div>
                   <div className="col-md-4">
                       <img src='assets/img/service/solu-4.jpg' alt='img' className="rounded"/>
                   </div>
              </div>
          </div>
      </section>

     <WorkProcessOne/>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default CyberService;
