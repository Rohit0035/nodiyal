import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-60 pd-bottom-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>Our Best IT Service</h6>
                <h2 className='title'>
                   Business With NODIYAL
                </h2>
              </div>
            </div>
          </div>
          <div className='row custom-no-gutter'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-left st-relative' >
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/7.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/'>Custom Software Development</Link>
                  </h5>
                  <p className='mb-0'>
                     NODIYAL, we specialize in crafting exceptional UI and UX
                     designs that elevate your digital presence across various 
                     channels.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/8.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/'>Web Application Development</Link>
                  </h5>
                  <p className='mb-0'>
                    NODIYAL offers premier website development services, 
                    crafting bespoke websites to elevate your online 
                    presence.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left mb-0 st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/9.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/'>AI, Data & Analystics</Link>
                  </h5>
                  <p className='mb-0'>
                    NODIYAL specializes in developing cutting-edge 
                    and interactive mobile applications, unlocking 
                    numerous business opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 bg-blue-right d-lg-inline-block'>
              <div className='animate-img-2 top_image_bounce service-thumb service-middle-section align-self-end'>
                <img src='assets/img/about/22.png' alt='img' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-right st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/10.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/'>CAD/CAM Services</Link>
                  </h5>
                  <p className='mb-0'>
                      We specialize in offering CAD (Computer-Aided Design) 
                      and CAM (Computer-Aided Manufacturing) Services to bring your 
                      mechanical.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/11.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/'>Architectural Design</Link>
                  </h5>
                  <p className='mb-0'>
                    At NODIYAL, we specialize in creating innovative and sustainable 
                    Architectural Design solutions that bring your 
                    vision to life. 
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right st-relative mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/12.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/'>Manufacturing & Prototyping</Link>
                  </h5>
                  <p className='mb-0'>
                    At NODIYAL, we recognize that the long-term performance and 
                    reliability of your mechanical systems are directly tied to 
                    Maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
