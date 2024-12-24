import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";
import WorkProcessOne from "../../components/WorkProcessOne";

const DigitalService = () => {
  return (
    <>
      <NavbarThree />

      {/* Navigation Bar */}
      <BreadcrumbService title={"AI, Data & Analystics"} />

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Unlock the Power of AI and Data to Transform Your Business</h4>
              <p>
                At NODIYAL, we empower businesses with cutting-edge AI and data analytics
                solutions to uncover insights, optimize operations, and drive smarter decision-making.
                Our expertise in AI, machine learning, and big data ensures your organization stays
                ahead in an increasingly data-driven world.
              </p>
              <p>
                From predictive analytics to real-time data processing, our tailored solutions enable
                businesses to transform raw data into actionable strategies that fuel growth and innovation.
              </p>
            </div>
            <div className="col-md-6">
              <img src='assets/img/service/ai.jpg' alt='img' className="rounded" />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               <img src="assets/img/service/ai-2.jpg" alt=""  className="rounded" width="100%"/>
            </div>
            <div className="col-md-8">
              <h4>Why AI and Data Analytics Matter?</h4>
              <p className="mb-3">
                Data is the cornerstone of modern business. When combined with artificial
                intelligence, it becomes a powerful tool for
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="shadow p-3 mb-3 bg-success">
                    <h5 className="text-white">Enhanced Decision</h5>
                    <p className="text-white">AI-driven insights provide actionable data, enabling faster and more informed decisions.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shadow p-3 mb-3">
                    <h5>Operational Efficiency</h5>
                    <p>Automate repetitive tasks and optimize workflows to save time and resources.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shadow p-3 mb-3">
                    <h5>Customer Insights</h5>
                    <p>Gain a deeper understanding of your customers' behaviors, preferences, and needs.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shadow p-3 mb-3 bg-primary">
                    <h5 className="text-white">Predictive Capabilities</h5>
                    <p className="text-white">Forecast trends and outcomes to make proactive decisions,  product/service offerings</p>
                  </div>
                </div>
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

export default DigitalService;
