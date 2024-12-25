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

const ArchitecturalDesign = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Architectural Design"} />

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <h4>Transforming Spaces: Expert Architectural Design Solutions for Your Dream Projects</h4>
                                <p>
                                    At NODIYAL, we specialize in creating innovative and sustainable Architectural
                                    Design solutions that bring your vision to life. Our team of expert architects
                                    is dedicated to designing spaces that are not only functional and efficient but
                                    also aesthetically inspiring. Whether it's residential, commercial, or industrial
                                    architecture, we ensure that every design is a perfect blend of creativity, practicality,
                                    and sustainability. From conceptualization to final execution, our architectural design
                                    services are focused on delivering exceptional results that meet your needs and exceed
                                    your expectations.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/auto-cad.jpg' alt='img' className="rounded" width="100%" />
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
                                <h4>What is Architectural Design?</h4>
                                <p>
                                    Architectural Design is the process of planning, designing, and constructing
                                    buildings or structures. It involves a detailed understanding of the project’s
                                    requirements, the environment, functionality, and aesthetic appeal. Our designs
                                    consider all aspects of the space, from spatial layout and material selection to
                                    lighting and ventilation, ensuring that every element contributes to the overall
                                    design concept.
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
                            Our   <span>Architectural Design </span>Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-primary">
                                <h5 className="text-white">Residential Architecture</h5>
                                <ul className="text-white">
                                    <li>
                                        <b className="me-2">Custom Homes</b>
                                         Creating bespoke designs for private homes that reflect your personal style, needs, and lifestyle.
                                    </li>
                                    <li>
                                        <b className="me-2">Interior Layouts</b>
                                        Designing interior spaces with a focus on optimal functionality, aesthetics, and flow.
                                    </li>
                                    <li>
                                        <b className="me-2">Sustainable Homes</b>
                                        Designing energy-efficient homes using sustainable materials and innovative technology.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3">
                                <h5>Commercial Architecture</h5>
                                <ul className="">
                                    <li>
                                        <b className="me-2">Office Buildings</b>
                                        Designing modern, functional, and aesthetic office spaces that improve employee 
                                        productivity.
                                    </li>
                                    <li>
                                        <b className="me-2">Retail Spaces</b>
                                        Crafting eye-catching and functional retail store designs that enhance customer 
                                        experience.
                                    </li>
                                    <li>
                                        <b className="me-2">Hospitality Design</b>
                                        Creating inviting and luxurious designs for hotels, resorts, and other hospitalit
                                         spaces style.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="shadow mb-3 p-3">
                                <h5 >Public & Institutional Architecture</h5>
                                <ul className="">
                                    <li>
                                        <b className="me-2">Community Centers</b>
                                        Designing public spaces that are both functional and welcoming for the local community.
                                    </li>
                                    <li>
                                        <b className="me-2">Educational Institutions</b>
                                        Creating thoughtful designs for schools, colleges, and universities that promote learning and growth.
                                    </li>
                                    <li>
                                        <b className="me-2">Healthcare Facilities</b>
                                        Designing healthcare spaces that prioritize comfort, accessibility, and efficiency for patients and staff alike.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-success">
                                <h5 className="text-white">Urban Design & Planning</h5>
                                <ul className="text-white">
                                    <li>
                                        <b className="me-2">Master Planning</b>
                                        Developing comprehensive plans for residential and commercial communities, integrating infrastructure, landscape, and sustainability.
                                    </li>
                                    <li>
                                        <b className="me-2">Site Development</b>
                                        Planning the layout of sites to optimize land use, traffic flow, and environmental factors.
                                    </li>
                                    <li>
                                        <b className="me-2">Landscape Design</b>
                                        Creating outdoor spaces that harmonize with the built environment, enhancing both beauty and functionality.
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

export default ArchitecturalDesign;
