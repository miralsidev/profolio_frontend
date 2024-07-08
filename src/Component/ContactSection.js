import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <>
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 order-2 order-md-1">
            <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
              <div className="section-header">
                <h2 className="section-title">Drop Us a Message</h2>
                <p>
                Feel free to reach out to me for any inquiries or collaborations.
                </p>
              </div>

              <div className="tj-contact-form">
                <form action="index.html">
                  <div className="row gx-3">
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          placeholder="First name"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input
                          type="text"
                          name="lname"
                          id="lname"
                          placeholder="Last name"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email address"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Phone number"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {/* <div className="col-12">
                      <div className="form_group">
                        <select name="service" id="service" className="tj-nice-select">
                          <option value="" selected disabled>
                            Choose Service
                          </option>
                          <option value="branding">Branding Design</option>
                          <option value="web">Web Design</option>
                          <option value="uxui">UI/UX Design</option>
                          <option value="app">App Design</option>
                        </select>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <div className="form_group">
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_btn">
                        <button type="submit" className="btn tj-btn-primary">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
            <div className="contact-info-list">
              <ul className="ul-reset">
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                  <div className="icon-box">
                    <i className="flaticon-phone-call"></i>
                  </div>
                  <div className="text-box">
                    <p>Phone</p>
                    <Link to="tel:0123456789">+91 99784  20331</Link>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".5s">
                  <div className="icon-box">
                    <i className="flaticon-mail-inbox-app"></i>
                  </div>
                  <div className="text-box">
                    <p>Email</p>
                    <Link to="mailto:dhameliyamiral@gmail.com">dhameliyamiral@gmail.com</Link>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".6s">
                  <div className="icon-box">
                    <i className="flaticon-location"></i>
                  </div>
                  <div className="text-box">
                    <p>Address</p>
                    <Link to="#">Mota Varachha , <br />Surat</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactSection