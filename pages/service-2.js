import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { testimonialSliderTwo } from "../src/sliderProps";

const Service2 = () => {
  return (
    <Layout>
      <PageBanner pageName={"Cyber Security"} />
      <section className="fancy-text-block fancy-text-block-ten pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-25">
                  <span className="sub-title sub-title-bg blue-light-bg wow fadeInUp">
                    why we offer
                  </span>
                  <h2 className="text-underline">
                    Cyber Security Information Manager Certified
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicaboenim ipsam voluptatem quia
                  voluptasy sit aspernatur aused quia consequuntur magne
                </p>
                <Link href="/contact">
                  <a className="main-btn btn-purple wow fadeInUp">
                    Get started us
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img-holder mb-50 wow fadeInRight">
                <img src="assets/images/block/gallery-8.jpg" alt="Image" />
                <div className="play-content">
                  <a
                    href="https://www.youtube.com/watch?v=AT6oSIDbGkw"
                    className="video-popup"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fancy Block Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="counter-area counter-style-two pb-130">
        <div className="container">
          <div className="counter-wrapper wow fadeInUp">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div className="counter-item text-center">
                  <div className="icon">
                    <i className="flaticon-document" />
                  </div>
                  <h2 className="number">
                    <Counter end={25630} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div className="counter-item text-center">
                  <div className="icon">
                    <i className="flaticon-rating" />
                  </div>
                  <h2 className="number">
                    <Counter end={75646} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div className="counter-item text-center">
                  <div className="icon">
                    <i className="flaticon-dashboard-1" />
                  </div>
                  <h2 className="number">
                    <Counter end={89634} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div className="counter-item text-center">
                  <div className="icon">
                    <i className="flaticon-trophy" />
                  </div>
                  <h2 className="number">
                    <Counter end={96325} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
      {/*====== Start Service Section ======*/}
      <section
        className="service-area bg_cover pt-130 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/block-bg-2.png)" }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7 col-md-8">
              <div className="section-title section-title-white mb-90 mb-sm-40 wow fadeInLeft">
                <span className="sub-title sub-title-bg blue-light-bg">
                  Cyber security
                </span>
                <h2 className="text-underline">
                  Digital Innovative Solutions For Cyber Security
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="button float-md-right mb-100 wow fadeInRight">
                <Link href="/service-2">
                  <a className="main-btn btn-purple">View more services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-nineteen animate-icon mb-80 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon blue-light-bg">
                  <i className="flaticon-cyber-security-2" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">
                        Information Security Governance
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed perspiciatis unde oms natus sit voluptate accusate
                    doloremque laudantium
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-nineteen animate-icon mb-80 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon red-dark-bg">
                  <i className="flaticon-padlock" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">
                        Defense and Forensics Cyber Analyst
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed perspiciatis unde oms natus sit voluptate accusate
                    doloremque laudantium
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-nineteen animate-icon mb-80 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon purple-blue-bg">
                  <i className="flaticon-cyber-security-3" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">
                        Information Security Development
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed perspiciatis unde oms natus sit voluptate accusate
                    doloremque laudantium
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-nineteen animate-icons mb-80 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon dark-blue-bg">
                  <i className="flaticon-cyber-security-4" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">
                        Reliable Multi - function Technology
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed perspiciatis unde oms natus sit voluptate accusate
                    doloremque laudantium
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
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
              <div className="section-title text-center mb-50">
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
export default Service2;
