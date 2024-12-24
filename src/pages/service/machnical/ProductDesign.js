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

const ProductDesign = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Product Design & Development"} />


            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shadow p-4">
                                <h4>Transforming Ideas into Market-Ready Innovations</h4>
                                <p>
                                    At NODIYAL, we empower businesses to bring their ideas to life with cutting-edge Product
                                    Design & Development services. Whether you’re conceptualizing a new product or enhancing an
                                    existing one, our team combines creativity, technical expertise, and market insights to
                                    deliver innovative, user-centric designs.
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
                                <h4>What is Product Design & Development?</h4>
                                <p>
                                    Product Design & Development is the process of conceptualizing, designing, prototyping,
                                    and manufacturing a product that meets customer needs while aligning with your business
                                    goals. From ideation to final production, we ensure that every stage is executed with
                                    precision and creativity.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/mac-ser-1-2.jpg' alt='img' className="rounded"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="title">
                            Our Product  <span>Design & Development</span>  Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-primary">
                                          <h5 className="text-white">Concept Development</h5>
                                          <p className="text-white">Brainstorm and refine ideas into viable concepts.</p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3">
                                          <h5>Industrial Design</h5>
                                          <p>Blend aesthetics and functionality for visually striking products.</p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-success">
                                          <h5 className="text-white">Prototyping</h5>
                                          <p className="text-white">Create detailed prototypes to validate designs and functionalities.</p>
                                      </div>
                                 </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                           <div className="mb-2">
                               <img src='assets/img/service/mac-ser-1.jpg' alt='img' className="rounded"/>
                           </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row">
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-success">
                                          <h5 className="text-white">Engineering Design</h5>
                                          <p className="text-white">Develop mechanical and structural designs that ensure durability.
                                          </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12 ">
                                      <div className="shadow mb-5 p-3">
                                          <h5 >Material Selection</h5>
                                          <p >Choose the best materials for cost-effectiveness, durability.</p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-primary">
                                          <h5 className="text-white">Manufacturing Support</h5>
                                          <p className="text-white">Provide detailed manufacturing plans and oversee production processes.</p>
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

export default ProductDesign;
