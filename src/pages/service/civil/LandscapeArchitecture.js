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

const LandscapeArchitecture = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Landscape Architecture"} />

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <h4>Crafting Harmonious Spaces Where Nature Meets Design</h4>
                                <p>
                                    At NODIYAL, our Landscape Architecture Services combine artistry, functionality, 
                                    and sustainability to create outdoor spaces that inspire and endure. From urban 
                                    parks and residential gardens to commercial landscapes and public plazas, we design 
                                    environments that balance natural beauty with practical usability.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/land-scap.jpg' alt='img' className="rounded" width="100%" />
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
                                <h4>What is Landscape Architecture?
                                </h4>
                                <p>
                                    Landscape architecture involves designing, planning, and managing outdoor 
                                    spaces to enhance the environment and improve the quality of life. This 
                                    discipline integrates ecological, cultural, and social elements to craft 
                                    landscapes that are both aesthetically pleasing and sustainable.
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
                            Our   <span>Landscape Architecture  </span>Services

                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-primary">
                                <h5 className="text-white">Urban Parks and Recreational Spaces</h5>
                                <ul className="text-white">
                                    <li>
                                      Designing parks that promote relaxation, play, and community engagement.

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3">
                                <h5>Residential and Commercial Landscaping</h5>
                                <ul className="">
                                    <li>
                                        Creating vibrant and functional outdoor spaces for homes and businesses.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="shadow mb-3 p-3">
                                <h5>Eco-Restoration and Rewilding</h5>
                                <ul className="">
                                    <li>
                                        Restoring natural habitats and integrating native flora and fauna.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-success">
                                <h5 className="text-white">Green Roofs and Vertical Gardens</h5>
                                <ul className="text-white">
                                    <li>
                                       Maximizing urban greenery and enhancing building aesthetics.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-primary">
                                <h5 className="text-white">Public Plaza and Streetscape Design</h5>
                                <ul className="text-white">
                                    <li>
                                       Crafting dynamic and accessible public spaces for cities and towns.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3">
                                <h5 className="">Water Features and Irrigation Systems</h5>
                                <ul className="">
                                    <li>
                                       Incorporating fountains, ponds, and sustainable water management systems.
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

export default LandscapeArchitecture;
