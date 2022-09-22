import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import Header3 from "../src/layouts/headers/Header3";
import Layout from "../src/layouts/Layout";
import {
  clientsSliderTwo,
  heroTwo,
  portfolioSliderThree,
  serviceSliderOne,
  testimonialSliderTwo,
} from "../src/sliderProps";
const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const ItCompany = () => {
  return (
    <Layout noHeader>
      <Header3 />
      <section className="hero-area">
        <Slider {...heroTwo} className="hero-wrapper-three hero-slider-three">
          <div
            className="single-slider banner_slider_3_1 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-3_1.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="hero-content text-center">
                    <span
                      className="sub-title"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      professional it solutions
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                      Digital Software Company
                    </h1>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-blue-light">
                            get started now
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-1">
                          <a className="main-btn btn-gray-light">
                            explore more
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider banner_slider_3_2 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-3_2.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="hero-content text-center">
                    <span
                      className="sub-title"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      professional it solutions
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                      Digital Software Company
                    </h1>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-blue-light">
                            get started now
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-1">
                          <a className="main-btn btn-gray-light">
                            explore more
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== End About Section ======*/}
      <section className="fancy-about fancy-about-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    what we offer
                  </span>
                  <h2 className="text-underline">
                    Best Categoris For Your Software Solutions
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis natus voluptate accusantie
                  doloremque laudantium totam rem aperiam eaque quaea vtore
                  eritatis quasi architecto beatae vitae
                </p>
                <div className="experience-box wow fadeInDown">
                  <div className="year">
                    <h2>25</h2>
                  </div>
                  <div className="text">
                    <h4>Years Of Experience We Provides</h4>
                    <p>
                      Perspiciatis unde onatus voluptate dolore laudantie totam
                      rem aperiam
                    </p>
                  </div>
                </div>
                <ul className="button wow fadeInUp">
                  <li>
                    <Link href="/service-1">
                      <a className="main-btn">Get our services</a>
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+01234567899" className="support">
                      <div className="icon">
                        <i className="flaticon-customer-service" />
                      </div>
                      <div className="info">
                        <span className="span">any support?</span>
                        <h5>+012 (345) 678 99</h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="img-holder mb-50 wow fadeInRight">
                <img src="assets/images/about/img-3.jpg" alt="Image" />
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
                className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInDown"
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
                className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInDown"
                data-wow-delay=".4s"
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
                className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInDown"
                data-wow-delay=".5s"
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
      {/*====== Start Text Block Section ======*/}
      <section
        className="fancy-text-block fancy-text-block-three bg_cover pt-220 pb-280"
        style={{ backgroundImage: "url(assets/images/bg/block-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-holder mb-50 wow fadeInLeft">
                <img src="assets/images/block/gallery-1.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50">
                <div className="section-title section-title-white mb-30 wow fadeInUp">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    why choose us
                  </span>
                  <h2 className="text-underline">
                    We Offer Best Features For Software Solutions
                  </h2>
                </div>
                <div className="block-style-twentyOne d-flex block-white wow fadeInUp">
                  <div className="icon blue-light-bg">
                    <i className="flaticon-development" />
                  </div>
                  <div className="content">
                    <h4>Trusted Solutions Agency</h4>
                    <p>
                      Sed perspiciatis unde omnis voluptate accusantie
                      doloremque laudantium totam rem aperiam
                    </p>
                  </div>
                </div>
                <div className="block-style-twentyOne d-flex block-white wow fadeInUp">
                  <div className="icon purple-blue-bg">
                    <i className="flaticon-iso" />
                  </div>
                  <div className="content">
                    <h4>ISO Certified Company</h4>
                    <p>
                      Sed perspiciatis unde omnis voluptate accusantie
                      doloremque laudantium totam rem aperiam
                    </p>
                  </div>
                </div>
                <div className="block-style-twentyOne d-flex block-white wow fadeInUp">
                  <div className="icon blue-light-bg">
                    <i className="flaticon-web-design" />
                  </div>
                  <div className="content">
                    <h4>Product Marketing Strategy</h4>
                    <p>
                      Sed perspiciatis unde omnis voluptate accusantie
                      doloremque laudantium totam rem aperiam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Text Block Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-area service-style-three">
        <div className="container">
          <div className="service-wrapper">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="section-title mb-50 wow fadeInLeft">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    our services
                  </span>
                  <h2 className="text-underline">
                    Innovative Solutions For Software Development
                  </h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-arrows mb-60 wow fadeInRight" />
              </div>
            </div>
            <Slider
              {...serviceSliderOne}
              className="service-slider-one slider_margin_5"
            >
              <div
                className="block-style-nine animate-icon bg-one text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-web-design-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Web Design</a>
                    </Link>
                  </h3>
                  <p>Sed perspiatis unde omna volu tate</p>
                </div>
              </div>
              <div
                className="block-style-nine animate-icon bg-two text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-mobile-app" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Mobile Apps</a>
                    </Link>
                  </h3>
                  <p>Sed perspiatis unde omna volu tate</p>
                </div>
              </div>
              <div
                className="block-style-nine animate-icon bg-three text-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-cyber-security-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Cyber Security</a>
                    </Link>
                  </h3>
                  <p>Sed perspiatis unde omna volu tate</p>
                </div>
              </div>
              <div
                className="block-style-nine animate-icon bg-four text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-product" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Product Strategy</a>
                    </Link>
                  </h3>
                  <p>Sed perspiatis unde omna volu tate</p>
                </div>
              </div>
              <div
                className="block-style-nine animate-icon bg-five text-center wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">QA &amp; Tasting</a>
                    </Link>
                  </h3>
                  <p>Sed perspiatis unde omna volu tate</p>
                </div>
              </div>
              <div
                className="block-style-nine animate-icon bg-three text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon">
                  <i className="flaticon-product" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a className="text-underline">Product Strategy</a>
                    </Link>
                  </h3>
                  <p>Sed perspiatis unde omna volu tate</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Projects Section ======*/}
      <section className="portfolio-area portfolio-style-one pt-130 pb-130">
        <div className="container-fluid">
          <Slider {...portfolioSliderThree} className="portfolio-slider-three">
            <div
              className="portfolio-block-three wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-9.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn purple-blue-bg">product design</a>
                </Link>
                <h3 className="title">
                  <a href="#" className="text-underline">
                    STP Geospatial Engineers Helped Secure the Nation’s Borders
                  </a>
                </h3>
              </div>
            </div>
            <div
              className="portfolio-block-three wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="project-img">
                <img
                  src="assets/images/projects/project-10.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn red-dark-bg">product design</a>
                </Link>
                <h3 className="title">
                  <a href="#" className="text-underline">
                    Deploying Experts from OtherS Projects to Fill Skill Gaps
                  </a>
                </h3>
              </div>
            </div>
            <div
              className="portfolio-block-three wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-11.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn blue-light-bg">product design</a>
                </Link>
                <h3 className="title">
                  <a href="#" className="text-underline">
                    Providing Expertise to Keep Critical Systems Operational
                  </a>
                </h3>
              </div>
            </div>
            <div
              className="portfolio-block-three wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-12.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn dark-green-bg">product design</a>
                </Link>
                <h3 className="title">
                  <a href="#" className="text-underline">
                    Deploying Experts from OtherS Projects to Fill Skill Gaps
                  </a>
                </h3>
              </div>
            </div>
            <div
              className="portfolio-block-three wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-11.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn dark-yellow-bg">product design</a>
                </Link>
                <h3 className="title">
                  <a href="#" className="text-underline">
                    Deploying Experts from OtherS Projects to Fill Skill Gaps
                  </a>
                </h3>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Projects Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="clients-area clients-style-two mb-minus-75">
        <div className="container">
          <div
            className="clients-wrapper bg_cover wow fadeInDown"
            style={{
              backgroundImage: "url(assets/images/bg/sponsor-bg-2.jpg)",
            }}
          >
            <Slider {...clientsSliderTwo} className="clients-slider-two">
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/07.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/08.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/09.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/10.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/11.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/08.png" alt="clients image" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Team Section ======*/}
      <section
        className="team-area team-style-two team-style-two-bg bg_cover pt-205 pb-100"
        style={{ backgroundImage: "url(assets/images/bg/team-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_8.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>James E. Villegas</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_9.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>Paul C. McPherson</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_10.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>James E. Villegas</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_11.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>Paul C. McPherson</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_12.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>James E. Villegas</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_13.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>Paul C. McPherson</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_14.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>James E. Villegas</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team-item mb-30 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_7.jpg" alt="team image" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h3 className="title">
                        <Link href="/team-details">
                          <a>Paul C. McPherson</a>
                        </Link>
                      </h3>
                      <p className="position">Senior Engineer</p>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Skill Section ======*/}
      <section className="skill-area skill-style-one pt-130 pb-70">
        <div className="objects">
          <img
            src="assets/images/objects/object-5.png"
            className="img-1"
            alt="object image"
          />
          <img
            src="assets/images/objects/object-6.png"
            className="img-2"
            alt="object image"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="skill-img-box mb-60">
                <div className="shape">
                  <img
                    src="assets/images/objects/object-7.png"
                    className="img-1"
                    alt="object image"
                  />
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="skill-img wow fadeInUp">
                      <img src="assets/images/skill/img-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="skill-img mt-60 wow fadeInDown">
                      <img src="assets/images/skill/img-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="skill-content-box mb-60">
                <div className="section-title section-title-two mb-35">
                  <span className="sub-title sub-title-bg blue-light-bg wow fadeInUp">
                    latest skills
                  </span>
                  <h2 className="text-underline">
                    We’re Very Professional &amp; Experience Agency{" "}
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis natus voluptate accusantie
                  doloremque laudantium totam rem aperiam eaque quaea vtore
                  eritatis quasi architecto beatae vitae
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="skill-item wow fadeInUp">
                      <div className="skill-bar">
                        {/* <div
                          className="circle"
                          data-donutty=""
                          data-thickness={10}
                          data-padding={0}
                          data-value={89}
                          data-bg="rgba(67, 186, 255, 0.1)"
                          data-round="false"
                          data-color="#43baff"
                        /> */}
                        <DonutChart value={89} color={"#43baff"} />
                        <h2 className="number">
                          89<span className="sign">%</span>
                        </h2>
                      </div>
                      <div className="text">
                        <h3>IT Consulting</h3>
                        <p>Sed perspic unde omnise voluptate accusantie</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill-item wow fadeInDown">
                      <div className="skill-bar">
                        {/* <div
                          className="circle"
                          data-donutty=""
                          data-thickness={10}
                          data-padding={0}
                          data-value={89}
                          data-bg="rgba(67, 186, 255, 0.1)"
                          data-round="false"
                          data-color="#7141B1"
                        /> */}
                        <DonutChart value={67} color={"#7141B1"} />
                        <h2 className="number">
                          67<span className="sign">%</span>
                        </h2>
                      </div>
                      <div className="text">
                        <h3>Management</h3>
                        <p>Sed perspic unde omnise voluptate accusantie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skill Section ======*/}
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
              <div className="section-title section-title-two text-center mb-50 wow fadeInUp">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".2s">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".3s">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".4s">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".5s">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".2s">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".3s">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".4s">
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
            <div className="testimonial-item wow fadeInUp" data-wow-delay=".5s">
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
export default ItCompany;
