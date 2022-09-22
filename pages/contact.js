import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us "} />
      <section className="contact-information-area contact-information-style-one pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="brand-logo text-center mb-100 fadeInUp">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logo/contact-logo.png"
                      alt="contact logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-8">
              <div className="information-wrapper mb-50 wow fadeInLeft">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="information-item mb-60">
                      <div className="icon">
                        <i className="flaticon-map" />
                      </div>
                      <div className="text">
                        <h5>New York</h5>
                        <p>55 Main Street, B - Block, 3rd Floor, New York</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="information-item mb-60">
                      <div className="icon">
                        <i className="flaticon-email" />
                      </div>
                      <div className="text">
                        <h5>Our Hotlines</h5>
                        <p>
                          <span>Mobile :</span>
                          <a href="tel:+01234567899">+012 (345) 678 99</a>
                        </p>
                        <p>
                          <span>Phone :</span>
                          <a href="tel:+123456789">+123456789</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="information-item mb-60">
                      <div className="icon">
                        <i className="flaticon-map" />
                      </div>
                      <div className="text">
                        <h5>San Francisco</h5>
                        <p>720 Main Street, B - Block, Floor, San Francisco</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="information-item mb-60">
                      <div className="icon">
                        <i className="flaticon-phone" />
                      </div>
                      <div className="text">
                        <h5>Email Address</h5>
                        <p>
                          <a href="mailto:hotlines@gmail.com">
                            hotlines@gmail.com
                          </a>
                        </p>
                        <p>
                          <a href="www.infor.net">www.infor.net</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="information-cta mb-50 wow fadeInRight">
                <div className="information-box mb-25">
                  <h3>Working Hour</h3>
                  <h5>Sun - Friday : 08 am - 09pm</h5>
                  <h5 className="st-close">Satarday Close</h5>
                </div>
                <div className="information-box mb-25">
                  <h3>Ready To Work Us ?</h3>
                  <p>
                    Sed perspiciatis unde omnisnae voluptate accusantie dolore
                  </p>
                  <Link href="/contact">
                    <a className="main-btn main-btn-blue">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Information Section ======*/}
      {/*====== Start Map section ======*/}
      <section className="contact-page-map wow fadeInUp">
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section>
      {/*====== End Map section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-area contact-style-two">
        <div className="contact-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-55 wow fadeInUp">
                  <h2>Send Us Message</h2>
                  <h5>
                    Don’t Hesited To Contact With Us! Feel Free To Message Us
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-form wow fadeInUp">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row justify-content-center">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Phone Number"
                            name="phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                          <input
                            type="url"
                            className="form_control"
                            placeholder="Website"
                            name="url"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form_group">
                          <textarea
                            name="messsage"
                            placeholder="Website"
                            className="form_control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="form_group text-center">
                          <button className="main-btn btn-purple w-100">
                            send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
