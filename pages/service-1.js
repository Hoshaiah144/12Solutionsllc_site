import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { testimonialSliderTwo } from "../src/sliderProps";

const Service1 = () => {
  return (
    <Layout>
      <PageBanner pageName={"IT Services"} />
      <section className="service-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-50">
                <span className="sub-title sub-title-bg blue-light-bg">
                  it services
                </span>
                <h2 className="text-underline">
                  Digital Innovative Solutions For IT Management
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-5.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Web Design</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istere errorsit voluptatem
                    accusa
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-eighteen  animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-6.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">
                        Mobile Application Design
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istere errorsit voluptatem
                    accusa
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-eighteen  animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-7.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Data &amp; Web Security</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istere errorsit voluptatem
                    accusa
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-eighteen  animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-8.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Web Development</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istere errorsit voluptatem
                    accusa
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-eighteen  animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-9.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">IT Consultancy</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istere errorsit voluptatem
                    accusa
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-10.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Desktop Computing</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis istere errorsit voluptatem
                    accusa
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="button text-center mt-30 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <Link href="/service-details">
                  <a className="main-btn btn-blue-light">view more services</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
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
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-area testimonial-style-two bg_cover pt-130 pb-130"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title sub-title-bg blue-light-bg">
                  Our testimonials
                </span>
                <h2 className="text-underline">
                  What Our Clients Say About Our IT Solutions
                </h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialSliderTwo}
            className="testimonial-slider-two slider_margin"
          >
            <div className="testimonial-item wow fadeInUp">
              <div className="wt-thumb-box">
                <div className="thumb">
                  <img
                    src="assets/images/testimonial/thumb-3.jpg"
                    alt="testimonial image"
                  />
                </div>
                <div className="comment">
                  <h5>“Quality Team”</h5>
                </div>
              </div>
              <div className="wt-content">
                <p>
                  Quis autem veleum iure rerehenderitey qui in ea voluptate
                  velit esse quamessc nihil molestia consequatur velillum qus
                  dolorem eum fugiat quoes.
                </p>
                <div className="quote-title-box">
                  <div className="quote">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="author-title">
                    <h5>Robert D. Matthews</h5>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp">
              <div className="wt-thumb-box">
                <div className="thumb">
                  <img
                    src="assets/images/testimonial/thumb-4.jpg"
                    alt="testimonial image"
                  />
                </div>
                <div className="comment">
                  <h5>“Clean Code”</h5>
                </div>
              </div>
              <div className="wt-content">
                <p>
                  Quis autem veleum iure rerehenderitey qui in ea voluptate
                  velit esse quamessc nihil molestia consequatur velillum qus
                  dolorem eum fugiat quoes.
                </p>
                <div className="quote-title-box">
                  <div className="quote">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="author-title">
                    <h5>Courtney F. Schlem</h5>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp">
              <div className="wt-thumb-box">
                <div className="thumb">
                  <img
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="testimonial image"
                  />
                </div>
                <div className="comment">
                  <h5>“Quality Team”</h5>
                </div>
              </div>
              <div className="wt-content">
                <p>
                  Quis autem veleum iure rerehenderitey qui in ea voluptate
                  velit esse quamessc nihil molestia consequatur velillum qus
                  dolorem eum fugiat quoes.
                </p>
                <div className="quote-title-box">
                  <div className="quote">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="author-title">
                    <h5>Herbert L. McCoy</h5>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp">
              <div className="wt-thumb-box">
                <div className="thumb">
                  <img
                    src="assets/images/testimonial/thumb-4.jpg"
                    alt="testimonial image"
                  />
                </div>
                <div className="comment">
                  <h5>“Quality Team”</h5>
                </div>
              </div>
              <div className="wt-content">
                <p>
                  Quis autem veleum iure rerehenderitey qui in ea voluptate
                  velit esse quamessc nihil molestia consequatur velillum qus
                  dolorem eum fugiat quoes.
                </p>
                <div className="quote-title-box">
                  <div className="quote">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="author-title">
                    <h5>Courtney F. Schlem</h5>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default Service1;
