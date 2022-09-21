import Link from "next/link";
import Slider from "react-slick";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";
import Header2 from "../src/layouts/headers/Header2";
import Layout from "../src/layouts/Layout";
import {
  heroTwo,
  portfolioSliderTwo,
  testimonialSliderOne,
} from "../src/sliderProps";

const ItAgency = () => {
  return (
    <Layout noFooter noHeader>
      <Header2 />
      <section className="hero-area hero-wrapper-two">
        <Slider {...heroTwo} className="hero-slider-two">
          <div
            className="single-slider banner-slide-2-1 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-2_1.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="hero-content">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".2s"
                    >
                      professional it solutions
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".4s">
                      Digital Innovation IT Agency
                    </h1>
                    <p data-animation="fadeInDown" data-delay=".5s">
                      Sed perspiciatis unde omnis natus voluptate accusantiuy
                      doloreue laudantium totam rem aperiam
                    </p>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-gradient-blue">
                            get started us
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-1">
                          <a className="main-btn btn-white">How it works</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider banner-slide-2-2 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-2_2.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="hero-content">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".2s"
                    >
                      professional it solutions
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".4s">
                      Digital Innovation IT Agency
                    </h1>
                    <p data-animation="fadeInDown" data-delay=".5s">
                      Sed perspiciatis unde omnis natus voluptate accusantiuy
                      doloreue laudantium totam rem aperiam
                    </p>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-gradient-blue">
                            get started us
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-1">
                          <a className="main-btn btn-white">How it works</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="hero-arrows d-flex" />
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area features-style-two light-gray-bg pt-120 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="text-wrapper mb-50 wow fadeInLeft">
                <span className="sub-title text-underline blue-dark mb-25">
                  who we are
                </span>
                <h3>
                  Important insights that enterprises require to serve customers
                  and make decisions is buried in silos in huge volumes of data
                  like invoices, physical contracts, applications
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-four wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="img">
                  <img src="assets/images/features/img-4.jpg" alt="Image" />
                </div>
                <div className="text text-center">
                  <h3 className="title text-underline">
                    Unlock Trapped Solution
                  </h3>
                  <p>Sedut perspicias unomnis natus sit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-four wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="img">
                  <img src="assets/images/features/img-5.jpg" alt="Image" />
                </div>
                <div className="text text-center">
                  <h3 className="title text-underline">
                    Build Powerful Solutions
                  </h3>
                  <p>Sedut perspicias unomnis natus sit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-four wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="img">
                  <img src="assets/images/features/img-6.jpg" alt="Image" />
                </div>
                <div className="text text-center">
                  <h3 className="title text-underline">
                    Accelerate Enterprise
                  </h3>
                  <p>Sedut perspicias unomnis natus sit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="fancy-about fancy-about-two pt-120 pb-80">
        <div className="about-circle-img wow fadeInLeft">
          <img
            src="assets/images/about/about-7.jpg"
            alt="about image"
            data-wow-delay=".2s"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-holder mb-50 wow fadeInLeft">
                <img
                  src="assets/images/about/img-2.jpg"
                  alt="about image"
                  data-wow-delay=".3s"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title text-underline blue-dark">
                    about muntech
                  </span>
                  <h2>Enterprise Productivity Platform For Complex Data</h2>
                </div>
                <div className="text-box wow fadeInUp">
                  <div className="big-text">W</div>
                  <div className="text">
                    <p>
                      Sed perspiciatis unde omniste natus voluptate accusantiuy
                      doloremque laudantium totam reyap eriam eaque quae
                      ainvtore veritatis quase
                    </p>
                  </div>
                </div>
                <p>
                  Accusantiuy doloremque laudantium totam rem aperiam eaque quae
                  ainvtore veritatis quasi architecto beatae vitae
                </p>
                <ul className="list-style-one list-gradient-blue mb-15 wow fadeInUp">
                  <li>Professional Services</li>
                  <li>Experience Advisors</li>
                  <li>Software Development</li>
                  <li>Product Engineering</li>
                </ul>
                <Link href="/about">
                  <a className="main-btn btn-blue-dark wow fadeInUp">
                    learn more us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Quote Section ======*/}
      <section
        className="quote-area quote-style-one bg_cover pt-40 pb-40"
        style={{ backgroundImage: "url(assets/images/bg/quote-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="quote-content-box d-flex align-items-center wow fadeInUp">
                <div className="thumb">
                  <img src="assets/images/user-1.jpg" alt="user image" />
                  <i className="far fa-envelope" />
                </div>
                <div className="text">
                  <h3 className="text-underline">
                    Full Truckload Planning Reimagined Experts in Security
                    Dynamic Load Planning &amp; Dispatching
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Quote Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-area service-style-two pt-120 pb-70 gradient-bg-blue">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title section-title-white text-center mb-55 wow fadeInUp">
                <span className="sub-title text-white">latest services</span>
                <h2>
                  We Provide Awesome Professional IT &amp; Technology Solutiuons{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-five animate-icon d-flex mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-puzzle-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Infrastructure</a>
                    </Link>
                  </h3>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-five animate-icon d-flex mb-50 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-solution-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">IT Engineering</a>
                    </Link>
                  </h3>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-five animate-icon d-flex mb-50 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-cyber-security" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Cyber Security</a>
                    </Link>
                  </h3>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-five animate-icon d-flex mb-50 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-internet-of-things" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Apps Development</a>
                    </Link>
                  </h3>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-five animate-icon d-flex mb-50 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon">
                  <i className="flaticon-solution-2" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Staff Augmentation</a>
                    </Link>
                  </h3>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-five animate-icon d-flex mb-50 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="icon">
                  <i className="flaticon-blockchain" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Automation Solutions</a>
                    </Link>
                  </h3>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Block Section ======*/}
      <section className="fancy-text-block fancy-text-block-one">
        <div className="img-holder-box">
          <div className="img-holder img-holder-one wow fadeInUp">
            <img src="assets/images/block/gallery-1.jpg" alt="image" />
          </div>
          <div className="img-holder img-holder-two wow fadeInRight">
            <img src="assets/images/block/gallery-2.jpg" alt="image" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-8">
              <div className="text-wrapper">
                <div className="section-title mb-35 wow fadeInUp">
                  <span className="sub-title blue-dark text-underline">
                    why choose us
                  </span>
                  <h2>25 Years Of Experience In IT Solutiuons</h2>
                </div>
                <div
                  className="block-style-six d-flex mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="icon gradient-bg-blue">
                    <i className="flaticon-creative" />
                    <div className="step">01</div>
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      Great Solution For Business
                    </h3>
                    <p>
                      Sed perspiciatis unde omniste natus voluptate accusantiuy
                      doloremque laudantium
                    </p>
                  </div>
                </div>
                <div
                  className="block-style-six d-flex mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon gradient-bg-blue">
                    <i className="flaticon-customer-loyalty" />
                    <div className="step">02</div>
                  </div>
                  <div className="text">
                    <h3 className="text-underline">Customer Saticfations</h3>
                    <p>
                      Sed perspiciatis unde omniste natus voluptate accusantiuy
                      doloremque laudantium
                    </p>
                  </div>
                </div>
                <div
                  className="block-style-six d-flex mb-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="icon gradient-bg-blue">
                    <i className="flaticon-product-development" />
                    <div className="step">03</div>
                  </div>
                  <div className="text">
                    <h3 className="text-underline">Product Development</h3>
                    <p>
                      Sed perspiciatis unde omniste natus voluptate accusantiuy
                      doloremque laudantium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Block Section ======*/}
      {/*====== Start Projects Section ======*/}
      <section className="portfolio-area dark-black-bg pt-120 pb-115">
        <div className="container-fluid pl-70 pr-70">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                <span className="sub-title text-underline text-white">
                  latest projects
                </span>
                <h2>We’ve Successfully 256+ Project Complate</h2>
              </div>
            </div>
          </div>
          <Slider
            {...portfolioSliderTwo}
            className="portfolio-slider-two slider_margin"
          >
            <div className="portfolio-block-two wow fadeInUp">
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-4.jpg"
                  alt="project image"
                />
                <div className="portfolio-overlay">
                  <div className="hover-content">
                    <Link href="/project-1">
                      <a className="main-btn main-btn-sm">Read More</a>
                    </Link>
                    <h3 className="title">
                      <Link href="/project-details">
                        <a className="text-underline">Project Management</a>
                      </Link>
                    </h3>
                    <p className="category">IT Consulting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-block-two wow fadeInUp">
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-5.jpg"
                  alt="project image"
                />
                <div className="portfolio-overlay">
                  <div className="hover-content">
                    <Link href="/project-1">
                      <a className="main-btn main-btn-sm">Read More</a>
                    </Link>
                    <h3 className="title">
                      <Link href="/project-details">
                        <a className="text-underline">Web Development</a>
                      </Link>
                    </h3>
                    <p className="category">IT Consulting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-block-two wow fadeInUp">
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-6.jpg"
                  alt="project image"
                />
                <div className="portfolio-overlay">
                  <div className="hover-content">
                    <Link href="/project-1">
                      <a className="main-btn main-btn-sm">Read More</a>
                    </Link>
                    <h3 className="title">
                      <Link href="/project-details">
                        <a className="text-underline">Product Strategy</a>
                      </Link>
                    </h3>
                    <p className="category">IT Consulting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-block-two wow fadeInUp">
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-7.jpg"
                  alt="project image"
                />
                <div className="portfolio-overlay">
                  <div className="hover-content">
                    <Link href="/project-1">
                      <a className="main-btn main-btn-sm">Read More</a>
                    </Link>
                    <h3 className="title">
                      <Link href="/project-details">
                        <a className="text-underline">Support Engineering</a>
                      </Link>
                    </h3>
                    <p className="category">IT Consulting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-block-two wow fadeInUp">
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-8.jpg"
                  alt="project image"
                />
                <div className="portfolio-overlay">
                  <div className="hover-content">
                    <Link href="/project-1">
                      <a className="main-btn main-btn-sm">Read More</a>
                    </Link>
                    <h3 className="title">
                      <Link href="/project-details">
                        <a className="text-underline">Marketing Strategy</a>
                      </Link>
                    </h3>
                    <p className="category">IT Consulting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-block-two wow fadeInUp">
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-5.jpg"
                  alt="project image"
                />
                <div className="portfolio-overlay">
                  <div className="hover-content">
                    <Link href="/project-1">
                      <a className="main-btn main-btn-sm">Read More</a>
                    </Link>
                    <h3 className="title">
                      <Link href="/project-details">
                        <a className="text-underline">Project Management</a>
                      </Link>
                    </h3>
                    <p className="category">IT Consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Projects Section ======*/}
      {/*====== Start Block Section ======*/}
      <section className="fancy-text-block fancy-text-block-two">
        <div
          className="fancy-bg bg_cover wow fadeInLeft"
          style={{
            backgroundImage: "url(assets/images/block/fancy-bg-1.jpg)",
          }}
        />
        <div className="container">
          <div className="row justify-content-xl-end justify-content-lg-start">
            <div className="col-xl-6 col-lg-10">
              <div className="text-wrapper">
                <div className="section-title mb-45 wow fadeInUp">
                  <span className="sub-title text-underline blue-dark">
                    customer-service
                  </span>
                  <h2>
                    Artificial Intelligence Specifically Product Design Ready to
                    Join Future?
                  </h2>
                </div>
                <div className="block-style-seven animate-icon d-flex wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-link" />
                  </div>
                  <div className="text">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      volupte accusantium doloremque laudantium totam rem
                      aperiams eaque quae abillo
                    </p>
                  </div>
                </div>
                <div className="block-style-seven animate-icon d-flex wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-customer-service" />
                  </div>
                  <div className="text">
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguile and demoralized by the
                      charms of pleasurexs
                    </p>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="main-btn btn-gradient-blue wow fadeInUp">
                    Meet our team
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Block Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section
        className="contact-area contact-style-one bg_cover pt-120 pb-130"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-45 wow fadeInUp">
                <span className="sub-title blue-dark">needs any help ?</span>
                <h2>We’re Ready To Help You! Requst Free Consultations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrapper wow fadeInUp">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
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
                    <div className="col-lg-4 col-md-6 col-sm-12">
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
                    <div className="col-lg-4 col-md-6 col-sm-12">
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
                    <div className="col-lg-4 col-md-6 col-sm-12">
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
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form_group">
                        <select className="wide">
                          <option value={1}>Customer Support</option>
                          <option value={1}>Sales Service</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form_group">
                        <button className="main-btn">send request now</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-area testimonial-style-one bg_cover pt-120 pb-80"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="testimonial-content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-white mb-20">
                  <span className="sub-title text-white">
                    customer feedback
                  </span>
                  <h2>What Our Clients Say About Services</h2>
                </div>
                <p>
                  Consectetur adipiscing elit sed eiusmod tempor incididunt ut
                  labore et dolore magna aipsum spedis se ultrices gravida
                  commodo viverra
                </p>
                <ul className="user-images">
                  <li>
                    <img
                      src="assets/images/testimonial/user-1.jpg"
                      alt="user image"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/testimonial/user-2.jpg"
                      alt="user image"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/testimonial/user-3.jpg"
                      alt="user image"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/testimonial/user-4.jpg"
                      alt="user image"
                    />
                  </li>
                  <li>
                    <a href="#" className="add-icon">
                      <i className="far fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one mb-50 slider_margin"
              >
                <div className="testimonial-item wow fadeInUp">
                  <div className="wt-content">
                    <p>
                      Sed ut persiciatis undente natus error sit voluptatem sant
                      doloremque laudantiume aperi eaque quae abillo inventorecy
                      tatis et quasi architecto beavit dicta sunt explica enime
                    </p>
                    <div className="author-title-thumb">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/user-5.jpg"
                          alt="user image"
                        />
                      </div>
                      <div className="author-title">
                        <h3>Norman E. Beeks</h3>
                        <p className="position">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item wow fadeInUp">
                  <div className="wt-content">
                    <p>
                      Sed ut persiciatis undente natus error sit voluptatem sant
                      doloremque laudantiume aperi eaque quae abillo inventorecy
                      tatis et quasi architecto beavit dicta sunt explica enime
                    </p>
                    <div className="author-title-thumb">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/user-6.jpg"
                          alt="user image"
                        />
                      </div>
                      <div className="author-title">
                        <h3>Lynn M. Sabatine</h3>
                        <p className="position">Senior Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item wow fadeInUp">
                  <div className="wt-content">
                    <p>
                      Sed ut persiciatis undente natus error sit voluptatem sant
                      doloremque laudantiume aperi eaque quae abillo inventorecy
                      tatis et quasi architecto beavit dicta sunt explica enime
                    </p>
                    <div className="author-title-thumb">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/user-5.jpg"
                          alt="user image"
                        />
                      </div>
                      <div className="author-title">
                        <h3>Norman E. Beeks</h3>
                        <p className="position">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area blog-style-two pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title blue-dark">
                  Latest news &amp; Blog
                </span>
                <h2>Get Every Single Update Article &amp; Tipes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="blog-post-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="entry-content">
                  <div className="user-thumb">
                    <img src="assets/images/blog/user-1.jpg" alt="user image" />
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user-alt" />
                          <a href="#">Washington</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 november {new Date().getFullYear()}</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>
                        Build Launch Powerful Responsives Websites With Editor
                        Perfect
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequtur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatuSed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantiums totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis et quasi architecto
                  </p>
                  <Link href="/blog-details">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
              <div
                className="blog-post-item mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="entry-content">
                  <div className="user-thumb">
                    <img src="assets/images/blog/user-1.jpg" alt="user image" />
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user-alt" />
                          <a href="#">Washington</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 november {new Date().getFullYear()}</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>
                        Meet Image Optimization, A New Smashing Book By Addy
                        Osmani
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequtur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatuSed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantiums totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis et quasi architecto
                  </p>
                  <Link href="/blog-details">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
              <div
                className="blog-post-item mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="entry-content">
                  <div className="user-thumb">
                    <img src="assets/images/blog/user-1.jpg" alt="user image" />
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user-alt" />
                          <a href="#">Washington</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 november {new Date().getFullYear()}</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>
                        Why Content Is Such A Fundamental Part Of The Web Design
                        Process
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequtur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatuSed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantiums totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis et quasi architecto
                  </p>
                  <Link href="/blog-details">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
              <div className="button text-center mt-60 wow fadeInDown">
                <Link href="/blog-standard">
                  <a className="filled-btn main-btn">View More News</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter noBg btnColor={"black"} bgColor={"gradient-bg-blue"} />
      <Footer1
        logo={4}
        className="footer-area footer-style-one black-bg footer-map"
      />
    </Layout>
  );
};
export default ItAgency;
