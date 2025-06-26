import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_saggk1s", //YOUR_SERVICE_ID
        "template_h1zy6gr", //YOUR_TEMPLATE_ID
        form.current,
        "HzqxBhAngK466cw6f" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position='bottom-center' reverseOrder={false} />


      <div className='contact-page-list pt-5 mt-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/13.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Contacts us</h5>
                  <h6> 
                    <a href="tel:+61466938821">
                       +61 466 938 821
                    </a>
                    </h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/14.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5> Email</h5>
                  <h6>
                     <a href="email:info@nodiyal.com">
                        info@nodiyal.com 
                     </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/15.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Location</h5>
                  <h6>Level 1/ 239 king st, Newcastle NSW 2300</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='contact-page-inner bg-gray'>
            <div className='section-title mb-4 pb-2'>
              <h2 className='title'>Tailored Solutions for Every Project – IT, Mechanical, and Civil Engineering Services by NODIYAL </h2>
              <p className='content mb-0'>
                  At NODIYAL, we specialize in delivering innovative solutions across Software Services, 
                  Mechanical Engineering, and Civil Engineering. With our team of industry experts, we 
                  provide cutting-edge advice, seamless project execution, and reliable support for all 
                  your business needs.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='name'
                      name='user_name'
                      type='text'
                      placeholder='Name'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='email'
                      name='user_email'
                      type='email'
                      placeholder='Email'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='phone'
                      name='user_phone'
                      type='number'
                      placeholder='Phone Number'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='phone'
                      name='user_msg'
                      type='text'
                      placeholder='Your Requirement'
                      required
                    />
                  </div>
                </div>
                {/* <div className='col-12'>
                  <div className='single-select-inner'>
                    <select
                      className="single-input-inner"
                      style={{ width: "100%", padding: '10px 5px' }}
                      name='message'
                    >
                      <option>--Select Service--</option>
                      <option>Website</option>
                      <option>Cyber Security</option>
                      <option>Digital Marketing </option>
                      <option>Game Application </option>
                      <option>Not Sure </option>
                    </select>
                  </div>
                </div> */}
                <div className='col-12 text-center'>
                  <button
                    className='btn btn-base border-radius-5'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* contact list */}

      {/* Map  */}
      {/* <div className='contact-g-map mb-0'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.923025501702!2d151.4241299749845!3d-33.32082779088438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b72ce7bd1c394cf%3A0xc86889b3794cf073!2sUnit%203%2F1%20Bounty%20Cl%2C%20Tuggerah%20NSW%202259%2C%20Australia!5e0!3m2!1sen!2sin!4v1735207755686!5m2!1sen!2sin" />
      </div> */}

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
