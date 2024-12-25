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

const CadCam = () => {
    return (
        <>
            <NavbarThree />

            {/* Navigation Bar */}
            <BreadcrumbService title={"CAD/CAM Services"} />


            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shadow p-4">
                                <h4>Transforming Designs with Precision: CAD/CAM Services for Seamless Manufacturing</h4>
                                <p>
                                      At NODIYAL, we specialize in offering CAD (Computer-Aided Design) and CAM (Computer-Aided Manufacturing) 
                                      Services to bring your mechanical engineering projects to life with precision and efficiency. Our CAD/CAM 
                                      services ensure that your designs are translated into highly accurate, manufacturable products, reducing 
                                      errors and streamlining the entire production process.
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
                                <h4>What are CAD & CAM Services?</h4>
                                <p>
                                    CAD refers to the use of computer software to create precise drawings or 
                                    models of products, components, and structures. CAM, on the other hand, 
                                    is the use of software to control machine tools and manufacturing processes 
                                    based on CAD models. Together, CAD and CAM services help us design, simulate, 
                                    and manufacture parts with unparalleled accuracy, efficiency, and quality.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <img src='assets/img/service/auto-cad.jpg' alt='img' className="rounded" width="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="title">
                            Our   <span>CAD/CAM </span>Services
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-primary">
                                          <h5 className="text-white">2D and 3D CAD Design</h5>
                                          <p className="text-white">
                                            We create both 2D and 3D models for products, components, and 
                                            systems, ensuring accurate and manufacturable designs from the 
                                            outset. 
                                        </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3">
                                          <h5>Mechanical Part Design</h5>
                                          <p>Specialized in designing mechanical parts, assemblies, and 
                                            components, we use CAD tools to produce detailed models that 
                                            are both functional
                                        </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-success">
                                          <h5 className="text-white">Product Prototyping</h5>
                                          <p className="text-white">
                                            Using advanced CAD software, we create prototypes for testing and 
                                            refinement, allowing for faster iteration and improvements.
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
                                          <h5 className="text-white">CAM Toolpath Generation</h5>
                                          <p className="text-white">
                                            After CAD design, we use CAM software to generate the toolpaths 
                                            needed for CNC machines, ensuring that your designs are manufactured
                                          </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12 ">
                                      <div className="shadow mb-5 p-3">
                                          <h5 >CNC Machining & Milling</h5>
                                          <p>
                                            We specialize in CNC machining and milling processes for manufacturing 
                                            mechanical components from CAD models, ensuring high accuracy
                                        </p>
                                      </div>
                                 </div>
                                 <div className="col-md-12">
                                      <div className="shadow mb-5 p-3 bg-primary">
                                          <h5 className="text-white">Rapid Prototyping</h5>
                                          <p className="text-white">
                                             With our state-of-the-art 3D printing and additive manufacturing capabilities, 
                                             we offer rapid prototyping services to help test designs 
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

export default CadCam;
