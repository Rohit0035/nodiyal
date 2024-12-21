import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <img className='bg-img-2' src='assets/img/banner-3/4.png' alt='img' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='banner-inner pe-xl-5'>
                <h6
                  className='subtitle '
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  WELCOME TO NODIYAL
                </h6>
                <h2
                  className='title '
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >

                  Elevate Your Business with <br/>
                  <span>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Software Services',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Mechnical Engineering',
                        1000,
                        'Civil Engineering',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '38px', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </span>
                </h2>

                <Link
                  className='mt-3 btn btn-border-base'
                  data-aos='fade-right'
                  data-aos-delay='400'
                  data-aos-duration='1500'
                  to='/contact'
                >
                  Contact Us<FaPlus />
                </Link>

              </div>
            </div>
            <div className='col-lg-6 col-md-10'>
              <div
                className='banner-thumb-3'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-3/2.svg'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/banner-3/3.svg'
                    alt='img'
                  />
                  <img
                    className='main-img'
                    src='assets/img/banner-3/1.png'
                    alt='img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
    </>
  );
};

export default BannerThree;
