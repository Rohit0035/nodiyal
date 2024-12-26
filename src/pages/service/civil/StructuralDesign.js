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

const StructuralDesign = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Structural Design"} />

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <h4>Building Strength and Stability: Expert Structural Design Solutions for Your Projects</h4>
                                <p>
                                      At NODIYAL, we deliver innovative and robust Structural Design Services tailored to 
                                      meet the demands of modern construction. Our designs ensure the safety, functionality, 
                                      and longevity of structures, whether residential, commercial, or industrial. By combining 
                                      advanced engineering practices with cutting-edge technology, we provide designs that are 
                                      efficient, cost-effective, and environmentally conscious. From concept to completion, our 
                                      structural solutions are crafted to withstand the test of time while meeting aesthetic and 
                                      operational goals.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/stu-de.jpg' alt='img' className="rounded" width="100%" />
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
                                <h4>What is Structural Design?</h4>
                                <p>
                                    Structural Design is the art and science of designing and analyzing buildings, 
                                    bridges, and other structures to ensure they can bear loads and resist external 
                                    forces like wind, earthquakes, and gravity. This discipline involves meticulous 
                                    planning, mathematical calculations, and a thorough understanding of materials 
                                    and construction practices to deliver safe and durable structures.
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
                            Our   <span>Structural Design </span>Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-primary">
                                <h5 className="text-white">Residential Structural Design</h5>
                                <ul className="text-white">
                                    <li>
                                        <b className="me-2">Custom Home Structures</b>
                                        Designing foundations, beams, and load-bearing walls for personalized homes.
                                    </li>
                                    <li>
                                        <b className="me-2">Renovations and Additions</b>
                                        Structural assessments and modifications for existing buildings.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3">
                                <h5>Commercial Structural Design</h5>
                                <ul className="">
                                    <li>
                                        <b className="me-2">Office Buildings</b>
                                        Structural systems for multi-story offices, ensuring durability and scalability.
                                    </li>
                                    <li>
                                        <b className="me-2">Retail Spaces</b>
                                         Flexible designs for retail outlets and shopping complexes that accommodate dynamic layouts.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="shadow mb-3 p-3">
                                <h5 >Industrial Structural Design</h5>
                                <ul className="">
                                    <li>
                                        <b className="me-2">Factories and Warehouses</b>
                                        Designing large-span structures to support heavy equipment and operations.
                                    </li>
                                    <li>
                                        <b className="me-2">Utility Structures</b>
                                         Towers, pipelines, and storage facilities designed for industrial use.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-success">
                                <h5 className="text-white">Infrastructure and Public Spaces</h5>
                                <ul className="text-white">
                                    <li>
                                        <b className="me-2">Bridges and Highways</b>
                                         Strong and resilient designs for transportation networks.
                                    </li>
                                    <li>
                                        <b className="me-2">Educational and Healthcare Facilities</b>
                                        Structural designs focused on user safety and accessibility.
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

export default StructuralDesign;
