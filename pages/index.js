import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";
import Header1 from "../src/layouts/headers/Header1";
import Layout from "../src/layouts/Layout";
import {
  clientssliderone,
  heroOne,
  portfoliosliderone,
} from "../src/sliderProps";

const Index = () => {
  return (
    <Layout noHeader noFooter>
      <Header1 />
      <section className="hero-area">
        <Slider {...heroOne} className="hero-wrapper-one hero-slider-one">
          <div
            className="single-slider banner-slide-1 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-1_1.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8">
                  <div className="hero-content">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      professional it solutions
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                      Architecting, developing and deploying enterprise IT
                      solutions
                    </h1>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-red-dark">
                            get started now
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-details">
                          <a className="main-btn btn-white">explore more</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider banner-slide-2 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-1_2.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="hero-content text-center">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      professional it solutions
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                      Architecting, developing and deploying enterprise IT
                      solutions
                    </h1>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-red-dark">
                            get started now
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-details">
                          <a className="main-btn btn-white">explore more</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider banner-slide-3 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-1_3.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-8">
                  <div className="hero-content text-right">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      professional it solutions
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                      Architecting, developing and deploying enterprise IT
                      solutions
                    </h1>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-red-dark">
                            get started now
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-details">
                          <a className="main-btn btn-white">explore more</a>
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
      {/*====== Start Features Section ======*/}
      <section className="fancy-features">
        <div className="continer-fluid p-0">
          <div className="features-style-one pt-70 pb-30">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title text-center mb-45 wow fadeInUp">
                    <span className="sub-title red-dark text-underline">
                      great journey for it solutions
                    </span>
                    <h2 className="text-uppercase">
                      specializes in building Services
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-project-management" />
                    </div>
                    <div className="text">
                      <h3 className="title text-underline">
                        Professional Service
                      </h3>
                      <p>
                        Sedut perspicias unde omnis natus error sit voluptatem
                        accusanti remqu laudantium totam rem aperiam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-social-care" />
                    </div>
                    <div className="text">
                      <h3 className="title text-underline">Experience Team</h3>
                      <p>
                        Sedut perspicias unde omnis natus error sit voluptatem
                        accusanti remqu laudantium totam rem aperiam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-compliant" />
                    </div>
                    <div className="text">
                      <h3 className="title text-underline">
                        Best IT Solutions
                      </h3>
                      <p>
                        Sedut perspicias unde omnis natus error sit voluptatem
                        accusanti remqu laudantium totam rem aperiam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="fancy-about fancy-about-one pt-130 position-relative pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-img-box mb-50 wow fadeInLeft">
                <img src="assets/images/about/about-1.jpg" alt="About image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-wrapper mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <span className="sub-title red-dark text-underline">
                    who we are
                  </span>
                  <h2 className="text-transform">
                    The Enterprise Productivity Platform for Complex Data
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis iste natus voluptate accusantiuy
                  doloremque laudantium totam rem aperiam eaque quae ainvtore
                  veritatis quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia consequuntur magni dolores eos ratione
                  volupta seque nesciunt porro quisquam doloremdolor site
                </p>
                <Link href="/about">
                  <a className="main-btn">learn more us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="fancy-features light-gray-bg pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-45 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  what we do
                </span>
                <h2 className="text-uppercase">
                  Solutions Customers Have Built with Instabase
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-two animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Unlock trapped information</h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-two animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">Build powerful solutions</h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-two animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">
                    Accelerate at enterprise scale
                  </h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="block-style-two animate-icon mb-40 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-4.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">
                    Product &amp; design enginering
                  </h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
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
        className="cta-area cta-style-one bg_cover pt-70 pb-40"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="cta-content mb-30 wow fadeInLeft">
                <h3 className="text-underline">
                  Full Truckload Planning Reimagined Experts in Security Dynamic
                  Load Planning &amp; Dispatching
                </h3>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="button float-lg-right float-md-none mb-30 wow fadeInRight">
                <Link href="/about">
                  <a className="main-btn">{`Let’s meet us`}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Projects Section ======*/}
      <section className="portfolio-area pt-120 pb-125">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-45 wow fadeInUp">
                <span className="sub-title red-dark">latest Case Studies</span>
                <h2 className="text-uppercase">
                  over 15 years, customers have Come to IT solutions.
                </h2>
              </div>
            </div>
          </div>
          <Slider {...portfoliosliderone} className="portfolio-slider-one">
            <div
              className="portfolio-block-one wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-1.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn">product design</a>
                </Link>
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">
                      STP Geospatial Engineers Helped Secure the Nation’s
                      Borders
                    </a>
                  </Link>
                </h3>
                <p>
                  Quis autem veleum sure reprehenderit quiine voluptate velit
                  esse quam molestiae
                </p>
                <Link href="/project-details">
                  <a className="btn-link">continue reading</a>
                </Link>
              </div>
            </div>
            <div
              className="portfolio-block-one wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-2.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn">product design</a>
                </Link>
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">
                      Deploying Experts from OtherS Projects to Fill Skill Gaps
                    </a>
                  </Link>
                </h3>
                <p>
                  Quis autem veleum sure reprehenderit quiine voluptate velit
                  esse quam molestiae
                </p>
                <Link href="/project-details">
                  <a className="btn-link">continue reading</a>
                </Link>
              </div>
            </div>
            <div
              className="portfolio-block-one wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-3.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn">product design</a>
                </Link>
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">
                      Providing Expertise to Keep Critical Systems Operational
                    </a>
                  </Link>
                </h3>
                <p>
                  Quis autem veleum sure reprehenderit quiine voluptate velit
                  esse quam molestiae
                </p>
                <Link href="/project-details">
                  <a className="btn-link">continue reading</a>
                </Link>
              </div>
            </div>
            <div
              className="portfolio-block-one wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-2.jpg"
                  alt="project image"
                />
              </div>
              <div className="portfolio-content">
                <Link href="/project-1">
                  <a className="cat-btn">product design</a>
                </Link>
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">
                      Deploying Experts from OtherS Projects to Fill Skill Gaps
                    </a>
                  </Link>
                </h3>
                <p>
                  Quis autem veleum sure reprehenderit quiine voluptate velit
                  esse quam molestiae
                </p>
                <Link href="/project-details">
                  <a className="btn-link">continue reading</a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Projects Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="clients-area clients-style-one light-gray-bg pt-70 pb-80 clients-map">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-45 wow fadeInUp">
                <span className="sub-title red-dark">popular partners</span>
                <h2 className="text-uppercase">
                  We have <span className="red-dark">2563+</span> world wide
                  clients
                </h2>
              </div>
            </div>
          </div>
          <div className="clients-wrapper">
            <Slider
              {...clientssliderone}
              className="clients-slider-one wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/01.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/02.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/03.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/04.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/05.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/06.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/03.png" alt="clients image" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-area dark-black-bg pt-130 pb-130">
        <div className="container">
          <div className="row align-items-center service-style-one">
            <div className="col-lg-4">
              <div className="text-wrapper mb-40 wow fadeInLeft">
                <div className="section-title section-title-white mb-20">
                  <span className="sub-title red-dark text-underline">
                    Our popular services
                  </span>
                  <h2 className="text-uppercase">
                    Best Professional IT Solutiuons
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omniste natus voluptate accusantiuy
                  doloremque laudantium totam aperm eaque quae ainvtore
                  veritatis architecto
                </p>
                <Link href="/service-1">
                  <a className="main-btn">explore more services</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon border-right-1 wow fadeInUp"
                      data-wow-delay=".3s"
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
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon pr-lg-0 wow fadeInUp"
                      data-wow-delay=".5s"
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
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon border-right-1 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="icon">
                        <i className="flaticon-cyber-security" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link href="/service-details">
                            <a className="text-underline">cyber security</a>
                          </Link>
                        </h3>
                        <p>
                          But I must explain to you how all this mistaken ideofe
                          denouncing pleasure
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon pr-lg-0 wow fadeInUp"
                      data-wow-delay=".9s"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-area team-style-one pb-130 pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-45 wow fadeInUp">
                <span className="sub-title text-underline red-dark">
                  meet our team
                </span>
                <h2 className="text-uppercase">
                  let’s talk our professional team members
                </h2>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_1.jpg" alt="Team img" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h6 className="title">
                        <Link href="/team-details">
                          <a>James E. Villegas</a>
                        </Link>
                      </h6>
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
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_2.jpg" alt="Team img" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h6 className="title">
                        <Link href="/team-details">
                          <a>Timothy B. Garcia</a>
                        </Link>
                      </h6>
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
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_3.jpg" alt="Team img" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h6 className="title">
                        <Link href="/team-details">
                          <a>Brian H. Rodriguez</a>
                        </Link>
                      </h6>
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
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_4.jpg" alt="Team img" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h6 className="title">
                        <Link href="/team-details">Donald N. Souciee</Link>
                      </h6>
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
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_5.jpg" alt="Team img" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h6 className="title">
                        <Link href="/team-details">Morris A. Savador</Link>
                      </h6>
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
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_6.jpg" alt="Team img" />
                  <div className="team-overlay">
                    <div className="team-content">
                      <h6 className="title">
                        <Link href="/team-details">
                          <a>James E. Villegas</a>
                        </Link>
                      </h6>
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
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="notification-box wow fadeInUp">
                <h5>
                  <span>
                    <img
                      src="assets/images/notification.png"
                      alt="Bell Image"
                    />
                  </span>{" "}
                  Become a Team Member With Our Company
                </h5>
                <a href="#" className="main-btn main-btn-sm">
                  join with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section
        className="counter-area counter-style-one bg_cover pt-80 pb-30"
        style={{ backgroundImage: "url(assets/images/bg/counter-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-document" />
                </div>
                <h2 className="number">
                  <Counter end={25630} /> +
                </h2>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-rating" />
                </div>
                <h2 className="number">
                  <Counter end={75646} />+
                </h2>
                <p>Star Work Reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-dashboard-1" />
                </div>
                <h2 className="number">
                  <Counter end={89634} />+
                </h2>
                <p>Project Complate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-trophy" />
                </div>
                <h2 className="number">
                  <Counter end={96325} />+
                </h2>
                <p>Win Of Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-area pricing-style-one light-gray-bg pt-120 pb-80">
        <div className="container">
          <Tab.Container defaultActiveKey={"monthly"}>
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="section-title mb-55 wow fadeInLeft">
                  <span className="sub-title red-dark text-underline">
                    Awesome pricing plan
                  </span>
                  <h2 className="text-uppercase">
                    we provide an smart pricing package for it solutions
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-nav float-lg-right mb-65 wow fadeInRight">
                  <Nav as={"ul"} className="nav nav-tabs">
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        as={"a"}
                        eventKey={"monthly"}
                        className="nav-link"
                        data-toggle="tab"
                        href="#monthly"
                      >
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        as={"a"}
                        eventKey={"yearly"}
                        className="nav-link"
                        data-toggle="tab"
                        href="#yearly"
                      >
                        Yearly
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
            <Tab.Content className="tab-content">
              <Tab.Pane
                eventKey={"monthly"}
                className="tab-pane fade"
                id="monthly"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="pricing-item mb-60 wow fadeInUp">
                      <div className="pricing-title-price">
                        <div className="pricing-title">
                          <h3 className="title">Basic Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>19.99
                            <span className="sm-text">for Monthly</span>
                          </h3>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <p>
                          Take a trivial example which of us ever undertakes
                          laborious physical exercise On the other hand
                        </p>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Synced To Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Social Media Integration</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                        <Link href="/pricing">
                          <a className="main-btn">Choose this pricing</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="pricing-item mb-60 wow fadeInUp">
                      <div className="pricing-title-price">
                        <div className="pricing-title">
                          <h3 className="title">Regular Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>39.99
                            <span className="sm-text">for Monthly</span>
                          </h3>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <p>
                          Take a trivial example which of us ever undertakes
                          laborious physical exercise On the other hand
                        </p>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Synced To Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="check">10 Hours Of Support</li>
                          <li className="check">Social Media Integration</li>
                          <li className="check">Unlimited Features</li>
                        </ul>
                        <Link href="/pricing">
                          <a className="main-btn">Choose this pricing</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="pricing-item mb-60 wow fadeInUp">
                      <div className="pricing-title-price">
                        <div className="pricing-title">
                          <h3 className="title">Silver Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>99.99
                            <span className="sm-text">for Monthly</span>
                          </h3>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <p>
                          Take a trivial example which of us ever undertakes
                          laborious physical exercise On the other hand
                        </p>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Synced To Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="check">10 Hours Of Support</li>
                          <li className="check">Social Media Integration</li>
                          <li className="check">Unlimited Features</li>
                        </ul>
                        <Link href="/pricing">
                          <a className="main-btn">Choose this pricing</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={"yearly"} className="tab-pane" id="yearly">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="pricing-item mb-60 wow fadeInUp">
                      <div className="pricing-title-price">
                        <div className="pricing-title">
                          <h3 className="title">Basic Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>19.99
                            <span className="sm-text">for Monthly</span>
                          </h3>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <p>
                          Take a trivial example which of us ever undertakes
                          laborious physical exercise On the other hand
                        </p>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Synced To Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Social Media Integration</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                        <Link href="/pricing">
                          <a className="main-btn">Choose this pricing</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="pricing-item mb-60 wow fadeInUp">
                      <div className="pricing-title-price">
                        <div className="pricing-title">
                          <h3 className="title">Regular Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>39.99
                            <span className="sm-text">for Monthly</span>
                          </h3>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <p>
                          Take a trivial example which of us ever undertakes
                          laborious physical exercise On the other hand
                        </p>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Synced To Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="check">10 Hours Of Support</li>
                          <li className="check">Social Media Integration</li>
                          <li className="check">Unlimited Features</li>
                        </ul>
                        <Link href="/pricing">
                          <a className="main-btn">Choose this pricing</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="pricing-item mb-60 wow fadeInUp">
                      <div className="pricing-title-price">
                        <div className="pricing-title">
                          <h3 className="title">Silver Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>99.99
                            <span className="sm-text">for Monthly</span>
                          </h3>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <p>
                          Take a trivial example which of us ever undertakes
                          laborious physical exercise On the other hand
                        </p>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Synced To Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="check">10 Hours Of Support</li>
                          <li className="check">Social Media Integration</li>
                          <li className="check">Unlimited Features</li>
                        </ul>
                        <Link href="/pricing">
                          <a className="main-btn">Choose this pricing</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area blog-style-one pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title text-underline red-dark">
                  Latest news &amp; Blog
                </span>
                <h2 className="text-uppercase">
                  Get every single update article &amp; tipes
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/1.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="b-user-admin d-flex justify-content-end">
                    <a href="#" className="d-inline-flex align-items-center">
                      <div className="thumb">
                        <img
                          src="assets/images/blog/user-1.jpg"
                          alt="USer Image"
                        />
                      </div>
                      <span>Washington</span>
                    </a>
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 November {new Date().getFullYear()}</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a className="text-underline">
                        Build Launch Powerful Responsives Websites With Editor
                        Perfect
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnsiste natus errors voluptatem
                    accusantium doloremque laudatium totae rem aperiam eaque
                    quae abillo
                  </p>
                  <Link href="/blog-details">
                    <a className="main-btn filled-btn">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/2.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="b-user-admin d-flex justify-content-end">
                    <a href="#" className="d-inline-flex align-items-center">
                      <div className="thumb">
                        <img
                          src="assets/images/blog/user-2.jpg"
                          alt="USer Image"
                        />
                      </div>
                      <span>Washington</span>
                    </a>
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 November {new Date().getFullYear()}</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a className="text-underline">
                        Smashing Podcast Episode 36 With Miriam Suzanne Is
                        Future
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnsiste natus errors voluptatem
                    accusantium doloremque laudatium totae rem aperiam eaque
                    quae abillo
                  </p>
                  <Link href="/blog-details">
                    <a className="main-btn filled-btn">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/3.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="b-user-admin d-flex justify-content-end">
                    <a href="#" className="d-inline-flex align-items-center">
                      <div className="thumb">
                        <img
                          src="assets/images/blog/user-3.jpg"
                          alt="USer Image"
                        />
                      </div>
                      <span>Washington</span>
                    </a>
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 November {new Date().getFullYear()}</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a className="text-underline">
                        Meet Image Optimization New Smhing Book By Addy Osmanie
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnsiste natus errors voluptatem
                    accusantium doloremque laudatium totae rem aperiam eaque
                    quae abillo
                  </p>
                  <Link href="/blog-details">
                    <a className="main-btn filled-btn">read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter bg={1} btnColor={"black"} />
      <Footer1 />
    </Layout>
  );
};
export default Index;
