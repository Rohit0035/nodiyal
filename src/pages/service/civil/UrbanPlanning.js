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

const UrbanPlanning = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Urban Planning"} />

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <h4>Designing Sustainable and Thriving Urban Landscapes for Future Generations</h4>
                                <p>
                                    At NODIYAL, we specialize in Urban Planning Services that balance development, 
                                    sustainability, and community well-being. Our innovative approach integrates 
                                    advanced technologies and visionary strategies to design urban spaces that are 
                                    functional, environmentally friendly, and culturally enriching. Whether it's 
                                    city expansion, smart city initiatives, or sustainable community development, 
                                    we craft solutions that shape vibrant and resilient urban ecosystems.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/urban-plan.jpg' alt='img' className="rounded" width="100%" />
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
                                <h4>What is Urban Planning?</h4>
                                <p>
                                   Urban planning is the process of designing and managing the development 
                                   of urban areas to ensure they are sustainable, efficient, and inclusive. 
                                   It involves analyzing land use, transportation, infrastructure, and public 
                                   spaces to create a harmonious and thriving environment for residents, 
                                   businesses, and visitors.
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
                            Our   <span>Urban Planning </span>Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-primary">
                                <h5 className="text-white">Land Use Planning</h5>
                                <ul className="text-white">
                                    <li>
                                        Strategic allocation of land for residential, commercial, industrial, and 
                                        recreational purposes.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3">
                                <h5>Sustainable Urban Design</h5>
                                <ul className="">
                                    <li>
                                         Eco-friendly layouts that prioritize green spaces, renewable energy, and efficient 
                                         resource management.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="shadow mb-3 p-3">
                                <h5>Transportation Planning</h5>
                                <ul className="">
                                    <li>
                                       Development of multimodal transport systems that improve connectivity and reduce 
                                       congestion.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow mb-3 p-3 bg-success">
                                <h5 className="text-white">Smart City Development</h5>
                                <ul className="text-white">
                                    <li>
                                        Integration of technology for real-time monitoring, waste management, and energy 
                                        efficiency.
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

export default UrbanPlanning;
