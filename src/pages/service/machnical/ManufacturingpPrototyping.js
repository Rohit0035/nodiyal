import React from "react";
import FooterOne from "../../../components/FooterOne";
import NavbarThree from "../../../components/NavbarThree";
import {
    FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadcrumbService from "../../../components/BreadcrumbService";
// import SolutionsServices from "../../../../SolutionsServices";
import SolutionsServices from "../SolutionsServices";

const ManufacturingpPrototyping = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Maintenance & Troubleshootin"} />


            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shadow p-4">
                                <h4>Maximizing Efficiency: Comprehensive Maintenance & Troubleshooting for Mechanical Systems</h4>
                                <p>
                                    At NODIYAL, we recognize that the long-term performance and reliability of your mechanical 
                                    systems are directly tied to effective Maintenance & Troubleshooting. Our specialized services 
                                    are designed to enhance the lifespan of your equipment, identify and resolve any issues before 
                                    they lead to costly failures, and maintain smooth operation throughout its service life. We 
                                    employ a blend of preventive and corrective maintenance strategies to ensure your mechanical 
                                    systems run at their optimal performance levels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-0 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <h4>What is Maintenance & Troubleshooting?</h4>
                                <p>
                                    Maintenance involves the regular servicing of mechanical systems and components 
                                    to ensure they are functioning optimally and to prevent unexpected breakdowns. 
                                    Troubleshooting, on the other hand, is the process of diagnosing and fixing 
                                    issues or failures in systems, components, or machinery to restore them to 
                                    full functionality.
                                </p>
                                <p>
                                    Both are crucial for reducing downtime, improving operational efficiency, 
                                    and preventing more significant problems that could lead to production delays 
                                    or equipment failure.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/mac-rtt.jpg' alt='img' className="rounded" width="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="title">
                            Our  <span> Process for Maintenance & Troubleshooting </span>  Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="shadow mb-5 p-3 bg-primary">
                                        <h5 className="text-white">Initial Consultation & System</h5>
                                        <p className="text-white">
                                             We perform an in-depth inspection and assessment of your current systems 
                                             to identify existing issues and areas for improvement.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="shadow mb-5 p-3">
                                        <h5>Customized Maintenance Plan</h5>
                                        <p>
                                           Based on our findings, we create a tailored maintenance plan that addresses 
                                           your specific requirements.
                                           
                                      </p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="shadow mb-5 p-3 bg-success">
                                        <h5 className="text-white">Routine Maintenance & Monitoring</h5>
                                        <p className="text-white">
                                            Our team performs regular checks and maintenance as per the scheduled plan, 
                                            including lubrication, adjustments, and cleaning
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-2">
                                <img src='assets/img/service/mac-ser-1.jpg' alt='img' className="rounded" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="shadow mb-5 p-3 bg-success">
                                        <h5 className="text-white">Troubleshooting & Repairs</h5>
                                        <p className="text-white">
                                          In case of a breakdown or malfunction, we quickly diagnose the problem 
                                          using advanced troubleshooting techniques.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="shadow mb-5 p-3">
                                        <h5 >Final Inspection & Reporting</h5>
                                        <p >
                                            After maintenance or troubleshooting work, we conduct a thorough inspection to 
                                            ensure all systems are functioning properly.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="shadow mb-5 p-3 bg-primary">
                                        <h5 className="text-white">Casting & Tooling</h5>
                                        <p className="text-white">
                                            We provide a detailed report on the work completed and recommendations for 
                                            future maintenance or improvements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <SolutionsServices />

            {/* Footer One */}
            <FooterOne />
        </>
    );
};

export default ManufacturingpPrototyping;
