import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
    FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";
import WorkProcessOne from "../../components/WorkProcessOne";

const SystemIntegration = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"System Integration"} />

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <h4>Unifying Technology for Seamless Business Operations</h4>
                            <p>
                                 In today’s interconnected world, fragmented systems can slow down operations 
                                 and hinder growth. At NODIYAL, we specialize in System Integration to bridge 
                                 the gaps between disparate technologies, ensuring your business functions as 
                                 a cohesive, efficient unit. From aligning software to integrating complex 
                                 hardware systems, we deliver solutions that streamline workflows and enhance 
                                 productivity.
                            </p>
                            {/* <p>
                                By integrating cutting-edge tools, methodologies, and domain expertise, we
                                ensure that your software and systems not only meet but exceed user expectations.
                            </p> */}
                        </div>
                        <div className="col-md-6">
                            <img src='assets/img/service/inte.png' alt='img' className="rounded" />
                        </div>
                    </div>
                </div>
            </section>

            <section className=" pb-5 pt-5 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src='assets/img/service/int-2.jpg' alt='img' className="rounded" width="100%"/>
                        </div>
                        <div className="col-md-7">
                            <h4 className="text-white">Why System Integration Matters?</h4>
                            <p className="text-white">Quality Assurance is crucial for achieving:</p>
                            <ul className="text-white">
                                <li>
                                    <b>Increased Efficiency: </b>Detect and resolve bugs before deployment.
                                </li>
                                <li>
                                    <b>Cost-Effective Operations: </b>Identify issues early, reducing the cost of fixing defects later in the development cycle.
                                </li>
                                <li>
                                    <b>Enhanced Collaboration: </b>Scale resources up or down on demand to meet business needs.
                                </li>
                                <li>
                                    <b>Scalable Solutions : </b>Ensure adherence to industry and legal standards.

                                </li>
                                <li>
                                    <b>Data-Driven Insights: </b>Prevent downtime and improve system performance.
                                </li>
                            </ul>
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

export default SystemIntegration;
