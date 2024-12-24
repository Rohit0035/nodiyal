import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
    FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";
import WorkProcessOne from "../../components/WorkProcessOne";

const QualityAssurance = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Quality Assurance"} />

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <h4>Ensuring Excellence Through Rigorous Quality Assurance Practices</h4>
                            <p>
                                At NODIYAL, we understand that delivering high-quality software and systems is
                                vital to building trust and ensuring business success. Our Quality Assurance (QA)
                                services are designed to identify and eliminate defects early, improve performance,
                                and ensure your applications meet the highest industry standards.
                            </p>
                            <p>
                                By integrating cutting-edge tools, methodologies, and domain expertise, we
                                ensure that your software and systems not only meet but exceed user expectations.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src='assets/img/service/ser-web.jpg' alt='img' className="rounded" />
                        </div>
                    </div>
                </div>
            </section>

            <section className=" pb-5 pt-5 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src='assets/img/service/ass.jpg' alt='img' className="rounded" />
                        </div>
                        <div className="col-md-7">
                            <h4 className="text-white">Why Quality Assurance Matters?</h4>
                            <p className="text-white">Quality Assurance is crucial for achieving:</p>
                            <ul className="text-white">
                                <li>
                                    <b>Error-Free Software: </b>Detect and resolve bugs before deployment.
                                </li>
                                <li>
                                    <b>Cost Optimization: </b>Identify issues early, reducing the cost of fixing defects later in the development cycle.
                                </li>
                                <li>
                                    <b>Enhanced Security: </b>Scale resources up or down on demand to meet business needs.
                                </li>
                                <li>
                                    <b>Regulatory Compliance : </b>Ensure adherence to industry and legal standards.

                                </li>
                                <li>
                                    <b>Operational Efficiency: </b>Prevent downtime and improve system performance.
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

export default QualityAssurance;
