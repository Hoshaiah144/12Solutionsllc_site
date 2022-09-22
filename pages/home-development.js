import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import HomeDev from "../src/components/accordion/HomeDev";
import Counter from "../src/components/Counter";
import Header5 from "../src/layouts/headers/Header5";
import Layout from "../src/layouts/Layout";
import { clientsSliderTwo, testimonialSliderFour } from "../src/sliderProps";

const HomeDevelopmentWorkGallery = dynamic(
  () => import("../src/components/HomeDevelopmentWorkGallery"),
  {
    ssr: false,
  }
);

const HomeDevelopment = () => {
  return (
    <Layout noHeader noFooter>
      <Header5 />
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-five">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Web Design &amp; Development Agency
                  </h1>
                  <ul
                    className="list-style-one list-circle-blue-light wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>Creative Team Member</li>
                    <li>Professional Services</li>
                    <li>Co-Working Space</li>
                    <li>Digital Marketing</li>
                  </ul>
                  <ul className="button wow fadeInUp" data-wow-delay=".8s">
                    <li>
                      <Link href="/">
                        <a className="main-btn btn-orange-dark">get started</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a className="main-btn btn-blue-light">explore more</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img wow fadeInRight" data-wow-delay=".9s">
                  <img src="assets/images/hero/hero-5_img-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-area pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-65 wow fadeInUp">
                <span className="sub-title blue-light">what we offer</span>
                <h2>
                  Omnichannel support experience enhanced, with Freshdesk!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="block-style-thirteen animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon dark-green-bg">
                  <i className="far fa-puzzle-piece" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>IT Consulting</a>
                    </Link>
                  </h3>
                  <ul className="list">
                    <li>Customer Experience</li>
                    <li>Information Architecture</li>
                    <li>Content Strategy</li>
                    <li>Operational Workflow</li>
                    <li>Technical Consultation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="block-style-thirteen animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon red-dark-bg">
                  <i className="far fa-bezier-curve" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>Web Design</a>
                    </Link>
                  </h3>
                  <ul className="list">
                    <li>Customer Experience</li>
                    <li>Information Architecture</li>
                    <li>Content Strategy</li>
                    <li>Operational Workflow</li>
                    <li>Technical Consultation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="block-style-thirteen animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon blue-light-bg">
                  <i className="far fa-mobile-alt" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>App Development</a>
                    </Link>
                  </h3>
                  <ul className="list">
                    <li>Android App Development</li>
                    <li>Iphone Development</li>
                    <li>Web &amp; App Solutions</li>
                    <li>Corporate Development</li>
                    <li>Technical Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="block-style-thirteen animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon dark-yellow-bg">
                  <i className="far fa-laptop-code" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </h3>
                  <ul className="list">
                    <li>WordPress Themes</li>
                    <li>Php Advance Support</li>
                    <li>HTML &amp; CSS Coding</li>
                    <li>Web Solutions</li>
                    <li>Technical Supports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="fancy-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-holder wow fadeInLeft">
                <img src="assets/images/about/about-8.png" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title blue-light">about company</span>
                  <h2>We’re Digital Web Design and Development Agency</h2>
                </div>
                <blockquote
                  className="quote-content quote-blue-light mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremue laudantium totam rem aperiam eaque ipsa
                  quaeabe inventore veritatis et quasi architecto beatae vitae
                  dicta sunt
                </blockquote>
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="block-style-twentyThree d-flex mb-40 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <i className="far fa-layer-plus" />
                      </div>
                      <div className="text">
                        <h4>Mission &amp; Vision</h4>
                        <p>
                          Sorem amet conse ctetur adipiscing elitse eiusmotem
                          incididunt labore dolore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="block-style-twentyThree d-flex mb-40 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div className="icon">
                        <i className="far fa-medal" />
                      </div>
                      <div className="text">
                        <h4>Company Goals</h4>
                        <p>
                          Sorem amet conse ctetur adipiscing elitse eiusmotem
                          incididunt labore dolore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="counter-area counter-style-six position-relative">
        <div className="container-1350">
          <div className="counter-wrapper">
            <div className="row">
              <div className="col-lg-5">
                <div className="text-wrapper">
                  <div className="counter-item d-flex mb-50 wow fadeInUp">
                    <div className="icon mr-25">
                      <i className="fal fa-shield-cross" />
                    </div>
                    <div className="text">
                      <h2>
                        <Counter end={3025} />
                        <span className="sign">+</span>
                        <span className="title">Project Complate</span>
                      </h2>
                      <p>
                        Sorem amet conse ctetur adipiscing elitse eiusmotem
                        incididunt labore dolore
                      </p>
                    </div>
                  </div>
                  <div className="counter-item d-flex mb-50 wow fadeInUp">
                    <div className="icon mr-25">
                      <i className="fal fa-user-chart" />
                    </div>
                    <div className="text">
                      <h2>
                        <Counter end={4523} />
                        <span className="sign">+</span>
                        <span className="title">Project Complate</span>
                      </h2>
                      <p>
                        Sorem amet conse ctetur adipiscing elitse eiusmotem
                        incididunt labore dolore
                      </p>
                    </div>
                  </div>
                  <div className="counter-item d-flex mb-50 wow fadeInUp">
                    <div className="icon mr-25">
                      <i className="fal fa-trophy-alt" />
                    </div>
                    <div className="text">
                      <h2>
                        <Counter end={7856} />
                        <span className="sign">+</span>
                        <span className="title">Project Complate</span>
                      </h2>
                      <p>
                        Sorem amet conse ctetur adipiscing elitse eiusmotem
                        incididunt labore dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img-holder wow fadeInRight">
                  <img src="assets/images/features/counter-img-1.jpg" alt="" />
                  <div className="img-overlay" />
                  <div className="play-content">
                    <a
                      href="https://www.youtube.com/watch?v=vTm7t9JBGfM&t=39s"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-area team-style-three pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title blue-light">Meet our teams</span>
                <h2>We’ve Experience Team Member To Provide Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-40 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_15.jpg" alt="Image" />
                  <div className="team-hover">
                    <div className="team-social">
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
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link href="/team-details">Michael C. Skinner Silva</Link>
                  </h3>
                  <p className="position">Sr Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-40 text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_16.jpg" alt="Image" />
                  <div className="team-hover">
                    <div className="team-social">
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
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link href="/team-details">David George N. Butler</Link>
                  </h3>
                  <p className="position">Sr Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-40 text-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_17.jpg" alt="Image" />
                  <div className="team-hover">
                    <div className="team-social">
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
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <Link href="/team-details">Matthew M. Armstead</Link>
                  </h3>
                  <p className="position">Sr Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start portfolio Section ======*/}
      <section className="portfolio-area pt-120 pb-130" id="masonry-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title mb-60 wow fadeInLeft">
                <span className="sub-title blue-light">
                  latest work gallery
                </span>
                <h2>We’ve Done 3625+ Project Let’s See Gallery</h2>
              </div>
            </div>
          </div>
          <HomeDevelopmentWorkGallery />
          <div className="row">
            <div className="col-lg-12">
              <div
                className="button mt-50 text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Link href="/project-1">
                  <a className="main-btn btn-orange-dark">View more gallery</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Projects Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area cta-style-six">
        <div className="container">
          <div className="cta-wrapper">
            <img
              src="assets/images/icon/shape-5.png"
              className="shape-icon shape-icon-one"
              alt=""
            />
            <img
              src="assets/images/icon/shape-6.png"
              className="shape-icon shape-icon-two"
              alt=""
            />
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta-content-box wow fadeInLeft">
                  <div className="section-title section-title-white mb-20">
                    <span className="sub-title text-white">
                      need any Project ?
                    </span>
                    <h2>Ready To Work With Us For Web Solutions ?</h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus erroluptatem accus
                    antium doloremue laudantium totam
                  </p>
                  <Link href="/project-details">
                    <a className="main-btn filled-btn">Get free quote</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-img wow fadeInRight">
                  <img src="assets/images/features/cta-img-1.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start fancy text block Section ======*/}
      <section className="fancy-text-block fancy-text-block-six pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-holder mb-40 wow fadeInLeft">
                <img src="assets/images/block/gallery-7.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-40">
                <div className="section-title mb-45 wow fadeInUp">
                  <span className="sub-title blue-light">Manage solutions</span>
                  <h2>
                    Simple Solutions For All Kinds Of Web Design Development
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accus antium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-6">
                    <div className="fancy-box-item bg-one wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-curve" />
                      </div>
                      <div className="text">
                        <h5>Web Design</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6">
                    <div className="fancy-box-item bg-two wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-coding" />
                      </div>
                      <div className="text">
                        <h5>Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6">
                    <div className="fancy-box-item bg-three wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-cyber-security-1" />
                      </div>
                      <div className="text">
                        <h5>Cyber Security</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End fancy text block Section ======*/}
      {/*====== Start FAQS Section ======*/}
      <section className="faq-area pt-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-content-box mb-50">
                <div className="section-title mb-50 wow fadeInUp">
                  <span className="sub-title blue-light">
                    Have Any questions ?
                  </span>
                  <h2>Have Any Question On Mind! Asked Questions ?</h2>
                </div>
                <HomeDev />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-img text-lg-right text-sm-center mb-50 wow fadeInRight">
                <img src="assets/images/features/faq-1.png" alt="Faq Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End FAQS Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <div className="testimonial-style-four position-relative pt-120">
        <div className="container">
          <div className="section-title section-title-white wow fadeInUp">
            <span className="sub-title text-white">Clients testimonials</span>
            <h2>
              What Our Clients Say <br />
              About Solutions
            </h2>
          </div>
        </div>
        <div className="testimonial-wrapper d-flex align-items-center">
          <div className="img-holder wow fadeInUp">
            <img src="assets/images/bg/testimonial-bg-4.jpg" alt="" />
          </div>
          <div className="text-wrapper wow fadeInRight">
            <Slider
              {...testimonialSliderFour}
              className="testimonial-slider-four"
            >
              <div className="testimonial-item mb-50">
                <div className="wt-content">
                  <p>
                    Sed ut persiciatis undente natus error sit voluptatem sant
                    doloremque laudantiu aperi eaque quae inventorecy tatis
                    quasi architecto beavit dicta explica enime
                  </p>
                </div>
                <div className="author-title-thumb d-flex mt-30">
                  <div className="author-thumb mr-20">
                    <img
                      src="assets/images/testimonial/thumb-3.jpg"
                      alt="user image"
                    />
                  </div>
                  <div className="author-title flex-grow-1">
                    <h3>Norman E. Beeks</h3>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item mb-50">
                <div className="wt-content">
                  <p>
                    Sed ut persiciatis undente natus error sit voluptatem sant
                    doloremque laudantiu aperi eaque quae inventorecy tatis
                    quasi architecto beavit dicta explica enime
                  </p>
                </div>
                <div className="author-title-thumb d-flex mt-30">
                  <div className="author-thumb mr-20">
                    <img
                      src="assets/images/testimonial/thumb-4.jpg"
                      alt="user image"
                    />
                  </div>
                  <div className="author-title flex-grow-1">
                    <h3>Walter G. Edmond</h3>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item mb-50">
                <div className="wt-content">
                  <p>
                    Sed ut persiciatis undente natus error sit voluptatem sant
                    doloremque laudantiu aperi eaque quae inventorecy tatis
                    quasi architecto beavit dicta explica enime
                  </p>
                </div>
                <div className="author-title-thumb d-flex mt-30">
                  <div className="author-thumb mr-20">
                    <img
                      src="assets/images/testimonial/thumb-5.jpg"
                      alt="user image"
                    />
                  </div>
                  <div className="author-title flex-grow-1">
                    <h3>Francisco D. Ramirez</h3>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item mb-50">
                <div className="wt-content">
                  <p>
                    Sed ut persiciatis undente natus error sit voluptatem sant
                    doloremque laudantiu aperi eaque quae inventorecy tatis
                    quasi architecto beavit dicta explica enime
                  </p>
                </div>
                <div className="author-title-thumb d-flex mt-30">
                  <div className="author-thumb mr-20">
                    <img
                      src="assets/images/testimonial/thumb-4.jpg"
                      alt="user image"
                    />
                  </div>
                  <div className="author-title flex-grow-1">
                    <h3>Walter G. Edmond</h3>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area blog-style-three pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center mb-50">
            <div className="col-lg-6">
              <div className="section-title text-center wow fadeInUp">
                <span className="sub-title blue-light">
                  Latest news &amp; blog
                </span>
                <h2>Get Every Single Updates Articles &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          <a href="#">Patrick Hopson</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>How To Port Your Web App To Microsoft</a>
                    </Link>
                  </h3>
                  <p>
                    Consectetur adipiscing elsed do eiusmod tempor incididunt
                    labore et dolore magna
                  </p>
                  <Link href="/blog-details">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          <a href="#">Patrick Hopson</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Wall Papers For Bruary Little Creativity</a>
                    </Link>
                  </h3>
                  <p>
                    Consectetur adipiscing elsed do eiusmod tempor incididunt
                    labore et dolore magna
                  </p>
                  <Link href="/blog-details">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          <a href="#">Patrick Hopson</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Designing Better Tools For Mobile User</a>
                    </Link>
                  </h3>
                  <p>
                    Consectetur adipiscing elsed do eiusmod tempor incididunt
                    labore et dolore magna
                  </p>
                  <Link href="/blog-details">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          <a href="#">Patrick Hopson</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>{`Team’s Comm Uniction Age Remote Work`}</a>
                    </Link>
                  </h3>
                  <p>
                    Consectetur adipiscing elsed do eiusmod tempor incididunt
                    labore et dolore magna
                  </p>
                  <Link href="/blog-details">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Clients Section ======*/}
      <section className="clients-area clients-style-three pt-65 pb-65">
        <div className="container">
          <Slider
            {...clientsSliderTwo}
            className="clients-slider-two wow fadeInUp slider_margin"
          >
            <div className="client-item">
              <div className="client-img">
                <img src="assets/images/clients/20.png" alt="clients image" />
              </div>
            </div>
            <div className="client-item">
              <div className="client-img">
                <img src="assets/images/clients/21.png" alt="clients image" />
              </div>
            </div>
            <div className="client-item">
              <div className="client-img">
                <img src="assets/images/clients/22.png" alt="clients image" />
              </div>
            </div>
            <div className="client-item">
              <div className="client-img">
                <img src="assets/images/clients/23.png" alt="clients image" />
              </div>
            </div>
            <div className="client-item">
              <div className="client-img">
                <img src="assets/images/clients/24.png" alt="clients image" />
              </div>
            </div>
            <div className="client-item">
              <div className="client-img">
                <img src="assets/images/clients/23.png" alt="clients image" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Clients Section ======*/}
      {/*====== Start Footer ======*/}
      <footer className="footer-area footer-style-four">
        <div className="container">
          <div className="footer-widget pb-20 pt-70">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="newsletter-content">
                    <h3>Get Every Solutions To Subscribe Our Newsletter </h3>
                    <p>25 Years Of Experience In Development Services</p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="mb-30"
                    >
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                        <button className="main-btn">Subscribe</button>
                      </div>
                    </form>
                    <ul className="social-link">
                      <li>
                        <span className="social-title">Follow Us</span>
                      </li>
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
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h4 className="widget-title">Services</h4>
                  <ul className="footer-nav list-style-arrow">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Apps Development</a>
                    </li>
                    <li>
                      <a href="#">Php Advance</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="widget-title">Supports</h4>
                  <ul className="footer-nav list-style-arrow">
                    <li>
                      <a href="#">Web Help Desk</a>
                    </li>
                    <li>
                      <a href="#">Help Desk App</a>
                    </li>
                    <li>
                      <a href="#">Online Help Desk</a>
                    </li>
                    <li>
                      <a href="#">SaaS Help Desk</a>
                    </li>
                    <li>
                      <a href="#">Cloud Help Desk</a>
                    </li>
                    <li>
                      <a href="#">Help Desk Software</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper wow fadeInUp" data-wow-delay=".5s">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="information-item mb-30">
                  <div className="icon icon-bg-one">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <span className="title">Email Address</span>
                    <h3>
                      <a href="mailto:hotline@gmail.com">hotline@gmail.com</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="information-item mb-30">
                  <div className="icon icon-bg-two">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <span className="title">Office Address</span>
                    <h3>55 Main Street, New York</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="information-item mb-30">
                  <div className="icon icon-bg-three">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <span className="title">Hotline</span>
                    <h3>
                      <a href="tel:+012(345)678">+012 (345) 678</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text text-center">
                  <p>
                    Copyright © {new Date().getFullYear()} MunTech. All Right
                    Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
export default HomeDevelopment;
