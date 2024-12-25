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

const TestingQuality = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"Testing & Quality Assurance"} />


            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shadow p-4">
                                <h4>Ensuring Excellence: Testing & Quality Assurance for Superior Mechanical Performance</h4>
                                <p>
                                    At NODIYAL, we understand that precision and quality are paramount in the manufacturing process. 
                                    Our Testing & Quality Assurance (QA) Services are designed to ensure that every component we 
                                    design and produce meets the highest standards of functionality, durability, and safety. We 
                                    use advanced testing techniques and methodologies to verify the performance, reliability, 
                                    and compliance of your products, reducing the risk of defects and ensuring a smooth manufacturing 
                                    process.
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
                                <h4>What is Testing & Quality Assurance?</h4>
                                <p>
                                    Testing refers to the process of evaluating a product’s functionality, strength, 
                                    and reliability under various conditions to ensure it performs as intended. Quality 
                                    Assurance (QA) encompasses the procedures and processes implemented throughout the 
                                    design and manufacturing stages to ensure that products meet predefined quality 
                                    standards. Our testing and QA services ensure that your mechanical components are 
                                    ready for the toughest environments and highest demands.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/assu-qua.png' alt='img' className="rounded" width="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="title">
                            Our   <span>Testing & Quality Assurance </span>Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-primary">
                                          <h5 className="text-white">Mechanical Testing</h5>
                                          <p className="text-white">
                                             Measures the strength and elasticity of materials to determine how much 
                                             force they can withstand before breaking.
                                        </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3">
                                          <h5>Functional Testing</h5>
                                          <p>
                                            Ensures that your product functions as expected, meeting 
                                            performance requirements and specifications.
                                        </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-success">
                                          <h5 className="text-white">Quality Assurance & Inspection</h5>
                                          <p className="text-white">
                                              We measure key dimensions of parts to ensure they match 
                                              the CAD designs and adhere to tolerances.
                                        </p>
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
                                          <h5 className="text-white">Non-Destructive Testing (NDT)</h5>
                                          <p className="text-white">
                                               Uses high-frequency sound waves to detect internal defects 
                                               in materials without damaging them.
                                          </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12 ">
                                      <div className="shadow mb-5 p-3">
                                          <h5 >Product Validation</h5>
                                          <p>
                                             Ensures your products meet the standards set by regulatory bodies 
                                             like ISO, ASTM, and CE.
                                         </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-primary">
                                          <h5 className="text-white">Rapid Prototyping</h5>
                                          <p className="text-white">
                                             With our state-of-the-art 3D printing and additive manufacturing capabilities, 
                                             we offer rapid prototyping services.
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

export default TestingQuality;
