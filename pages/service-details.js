import Link from "next/link";
import Counter from "../src/components/Counter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service Details"} />
      <section className="fancy-about fancy-about-five pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="text-wrapper mb-50">
                <div className="experience-box wow fadeInLeft">
                  <div className="big-text mb-45">25</div>
                  <div className="content mb-45">
                    <span className="span">Years Of Experience</span>
                    <h2>Professional IT Solutions for Business Success</h2>
                    <blockquote>
                      <p>
                        Sed ut perspiciatis unde omnis natus error sit
                        voluptatem accustium dolorem que laudantium totam rem
                        eaque
                      </p>
                    </blockquote>
                  </div>
                </div>
                <div className="counter-wrapper wow fadeInUp">
                  <div className="row">
                    <div className="col-md-4 col-6 counter-column">
                      <div className="counter-item">
                        <h2 className="number">
                          <Counter end={25630} />+
                        </h2>
                        <p>Happy Customer</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 counter-column">
                      <div className="counter-item">
                        <h2 className="number">
                          <Counter end={75646} />+
                        </h2>
                        <p>Star Work Reviews</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 counter-column">
                      <div className="counter-item">
                        <h2 className="number">
                          <Counter end={89634} />+
                        </h2>
                        <p>Project Complate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-img mb-50 wow fadeInRight">
                <img src="assets/images/about/about-9.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area position-relative mb-90-minus">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-product-development" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Machine Learning</h3>
                  <p>
                    Sed perspiciatis unde omnatus voluptate accusantie oloremque
                    laudantiu totamrem beatae
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-interactive" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Artificial Intelligence</h3>
                  <p>
                    Sed perspiciatis unde omnatus voluptate accusantie oloremque
                    laudantiu totamrem beatae
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-creative" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Augmented Reality</h3>
                  <p>
                    Sed perspiciatis unde omnatus voluptate accusantie oloremque
                    laudantiu totamrem beatae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area light-gray-bg pt-220 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title sub-title-bg blue-light-bg">
                  what we do
                </span>
                <h2 className="text-underline">
                  Most Organize Core Features For IT Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-help" />
                </div>
                <div className="text">
                  <h3 className="text-underline">IT Solution Management</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus errors voluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    quae explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-technical-support" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Powerful Database Security</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus errors voluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    quae explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-it" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Quality Technical Support</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus errors voluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    quae explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-technical-support-1" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Product Engineering</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus errors voluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    quae explicabo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-area cta-style-three bg_cover pt-135 pb-140"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-2.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content-box text-center wow fadeInUp">
                <h2>Ready To Get Our Professional IT Services ?</h2>
                <ul className="button">
                  <li>
                    <Link href="/team">
                      <a className="main-btn btn-blue-light">Meet the team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-1">
                      <a className="main-btn btn-purple">Our services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Fancy Block Section ======*/}
      <section className="fancy-text-block fancy-text-block-eleven pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-holder-box mb-20">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="img-holder border-top-left-radius mb-30 wow fadeInLeft">
                      <img src="assets/images/block/gallery-9.jpg" alt="" />
                    </div>
                    <div className="img-holder border-bottom-left-radius mb-30 wow fadeInLeft">
                      <img src="assets/images/block/gallery-10.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="img-holder mb-30 wow fadeInRight">
                      <img src="assets/images/block/gallery-11.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    It Benifits
                  </span>
                  <h2 className="text-underline">
                    We Provide How Can Growth Your IT Business
                  </h2>
                </div>
                <p>
                  On the other hand denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment blinded by desire that they cannot
                  foresee
                </p>
                <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                  <li>Software Solutions</li>
                  <li>Product Engineering</li>
                  <li>Database Security</li>
                  <li>Mobile Strategy</li>
                  <li>IT Consultancy</li>
                  <li>Business Growth</li>
                </ul>
                <Link href="/about">
                  <a className="main-btn btn-blue-light wow fadeInUp">
                    Learn More Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fancy Block Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section
        className="contact-area contact-style-three bg_cover pt-130 pb-80"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-section-box mb-50 wow fadeInLeft">
                <div className="section-title mb-25">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    Need help ?
                  </span>
                  <h2 className="text-underline">
                    Let’s Talk About IT Solutions
                  </h2>
                </div>
                <p>
                  On the other hand denounce righteous indige ation and dislike
                  men who are so beguiled and demoralized by the charms of
                  pleasure of the moment blinded by desire
                </p>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-wrapper mb-50 wow fadeInRight">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Full Name Here"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Website"
                          name="website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <select className="wide">
                          <option value={1}>Customer Support</option>
                          <option value={1}>Customer Support</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message"
                          name="message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <div className="col-lg-12">
                          <button className="main-btn btn-purple">
                            Get free consultations
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ServiceDetails;
