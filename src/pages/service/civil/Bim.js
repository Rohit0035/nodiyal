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

const Bim = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"BIM (Building Information Modeling)"} />

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <h4>Building Smarter, Efficient, and Sustainable Structures with BIM</h4>
                                <p>
                                    At NODIYAL, we leverage Building Information Modeling (BIM) to revolutionize 
                                    how architectural and engineering projects are designed, executed, and managed. 
                                    BIM enables us to deliver smarter, more efficient, and sustainable building 
                                    solutions by integrating advanced technologies with collaborative workflows.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/bim.png' alt='img' className="rounded" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="pt-0 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-2 shadow p-4">
                                <h4>What is BIM?</h4>
                                <p>
                                   BIM is a digital representation of a building’s physical and functional characteristics. 
                                   It serves as a shared knowledge resource for project stakeholders, facilitating better 
                                   decision-making from conceptualization to demolition. By creating 3D models enriched with 
                                   data, BIM enhances collaboration, reduces errors, and streamlines project execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="title">
                            Our   <span>BIM </span>Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-primary">
                                <h5 className="text-white">3D Modeling</h5>
                                <ul className="text-white">
                                    <li>
                                       Creating accurate and detailed digital representations of buildings.

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3">
                                <h5>Clash Detection and Coordination</h5>
                                <ul className="">
                                    <li>
                                       Identifying and resolving conflicts between different systems before construction.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="shadow mb-3 p-3">
                                <h5>Quantity Takeoff and Cost Estimation</h5>
                                <ul className="">
                                    <li>
                                       Automating material quantity calculations and cost predictions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-success">
                                <h5 className="text-white">4D Scheduling and Simulation</h5>
                                <ul className="text-white">
                                    <li>
                                      Integrating time-related data for effective project management.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-primary">
                                <h5 className="text-white">Facility Management Integration</h5>
                                <ul className="text-white">
                                    <li>
                                       Providing comprehensive models for streamlined building maintenance.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3">
                                <h5 className="">Energy Analysis</h5>
                                <ul className="">
                                    <li>
                                       Evaluating and improving energy efficiency during the design phase.
                                    </li>
                                </ul>
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

export default Bim;
