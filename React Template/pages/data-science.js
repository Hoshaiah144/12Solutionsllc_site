import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import DataScience from "../src/components/accordion/DataScience";
import Counter from "../src/components/Counter";
import Header6 from "../src/layouts/headers/Header6";
import Layout from "../src/layouts/Layout";
import { clientsSliderThree } from "../src/sliderProps";

const DataScience_ = () => {
  return (
    <Layout noFooter noHeader>
      <Header6 />
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-six">
          <div className="hero-bg">
            <img src="assets/images/hero/hero-6_bg-1.png" alt="" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <span
                    className="sub-title blue-dark wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Business Inteligence
                  </span>
                  <h1 className="wow fadeInUp" data-wow-delay=".5s">
                    Big Data Solutions For Everyone.
                  </h1>
                  <p>
                    {`This Specialization covers the concepts and tools you'll
                      need throughout the entire data science pipeline`}
                  </p>
                  <ul className="button wow fadeInUp" data-wow-delay=".6s">
                    <li>
                      <a href="#" className="main-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="main-btn filled-btn">
                        Contact Us
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-img wow fadeInRight" data-wow-delay=".7s">
                  <img
                    src="assets/images/hero/hero-seven_img-1.png"
                    alt="Hero Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen mb-30 d-flex wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-11.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>Individual Analyst</a>
                    </Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen mb-30 d-flex wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-12.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>Teams & Organizations</a>
                    </Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen mb-30 d-flex wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-13.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>Embedded Analytics</a>
                    </Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details">
                    <a className="btn-link">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen mb-30 d-flex wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-14.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details">
                      <a>Epic Apex Legends</a>
                    </Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
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
      {/*====== Start Features Section ======*/}
      <section className="fancy-text-block fancy-text-block-eight pb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="fancy-img mb-50 wow fadeInLeft">
                <img src="assets/images/block/gallery-13.png" alt="Gallery" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50">
                <div
                  className="section-title mb-15 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span className="sub-title blue-dark">Core Features</span>
                  <h2>Streaming Matrix An Digital Binary Code</h2>
                </div>
                <p>
                  Refers to the simulation of human intelligence in machines
                  that are programmed to think like humans and mimic their
                  actions.
                </p>
                <ul className="list wow fadeInUp" data-wow-delay=".3s">
                  <li>
                    <i className="fal fa-robot" />
                    Robotics
                  </li>
                  <li>
                    <i className="fal fa-code" />
                    Testing Code
                  </li>
                  <li>
                    <i className="fal fa-print-search" />
                    Real Time Tracking
                  </li>
                  <li>
                    <i className="fal fa-globe" />
                    Multi Matrix Code
                  </li>
                </ul>
                <div
                  className="user-box d-flex align-items-center mt-50 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="thumb">
                    <img src="assets/images/user-2.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h3>Rosalina D. William</h3>
                    <p className="position">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Clients Section ======*/}
      <section className="clients-area clients-style-five">
        <div className="container">
          <div className="clients-wrapper wow fadeInUp">
            <Slider {...clientsSliderThree} className="clients-slider-three">
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/25.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/26.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/27.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/28.png" alt="clients image" />
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <img src="assets/images/clients/26.png" alt="clients image" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/*====== End Clients Section ======*/}
      {/*====== Start FAQ Section ======*/}
      <section className="faq-area pb-80 pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-content-box faq-content-box-two mb-50 wow fadeInLeft">
                <div className="section-title mb-40">
                  <span className="sub-title blue-dark">Core Features</span>
                  <h2>Get Tips & Tricks on How To Skyrocket</h2>
                </div>
                <DataScience />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-img faq-img-one mb-50 wow fadeInRight">
                <img src="assets/images/features/faq-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End FAQ Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="counter-area counter-style-five light-gray-bg pt-80 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 d-flex wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-document" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={300} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 d-flex wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-rating" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={20} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 d-flex wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-dashboard-1" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={233} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="counter-item mb-40 d-flex wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-trophy" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={1} />k
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
      {/*====== Start Fancy Block Section ======*/}
      <section className="fancy-text-block fancy-text-block-seven pt-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="fancy-img mb-50 wow fadeInLeft">
                <img src="assets/images/block/gallery-15.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-20 wow fadeInUp">
                  <span className="sub-title">Core Features</span>
                  <h2>We Provide Realtime Data Solutions.</h2>
                </div>
                <p>
                  {`This Specialization covers the concepts and tools you'll need
                  throughout the entire data science pipeline`}
                </p>
                <div className="content-box wow fadeInUp">
                  <Tab.Container defaultActiveKey={"mission"}>
                    <div className="content-tab-list mb-30">
                      <Nav as={"ul"} className="nav nav-tabs">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            eventKey={"mission"}
                            className="nav-link"
                            data-toggle="tab"
                            href="#mission"
                          >
                            Our Mission
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            eventKey={"vision"}
                            className="nav-link"
                            data-toggle="tab"
                            href="#vision"
                          >
                            Our Vision
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            eventKey={"values"}
                            className="nav-link"
                            data-toggle="tab"
                            href="#values"
                          >
                            Values
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content">
                      <Tab.Pane
                        eventKey={"mission"}
                        className="tab-pane fade"
                        id="mission"
                      >
                        <div className="fancy-box-item d-flex">
                          <div className="icon">
                            <img
                              src="assets/images/block/thumb-1.png"
                              alt="Icon Image"
                            />
                          </div>
                          <div className="text">
                            <p>
                              This article is intended to help define the data
                              scientist role, including typical skills,
                              qualifications, education, experience, and
                              responsibilities.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey={"vision"}
                        className="tab-pane fade"
                        id="vision"
                      >
                        <div className="fancy-box-item d-flex">
                          <div className="icon">
                            <img
                              src="assets/images/block/thumb-1.png"
                              alt="Icon Image"
                            />
                          </div>
                          <div className="text">
                            <p>
                              This article is intended to help define the data
                              scientist role, including typical skills,
                              qualifications, education, experience, and
                              responsibilities.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey={"values"}
                        className="tab-pane fade"
                        id="values"
                      >
                        <div className="fancy-box-item d-flex">
                          <div className="icon">
                            <img
                              src="assets/images/block/thumb-1.png"
                              alt="Icon Image"
                            />
                          </div>
                          <div className="text">
                            <p>
                              This article is intended to help define the data
                              scientist role, including typical skills,
                              qualifications, education, experience, and
                              responsibilities.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fancy Block Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area blog-style-four pt-120 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-40 wow fadeInUp">
                <span className="sub-title blue-dark">News Feeds</span>
                <h2>Get Update Insights</h2>
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
                  <img src="assets/images/blog/4.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="fal fa-user" />
                          <a href="#">Mark W.</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-tag" />
                          <a href="#">Mechine AI</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>This definition can be further confused by the fact</a>
                    </Link>
                  </h3>
                  <p>
                    This definition can be further confused by the fact that
                    there are other roles sometimes thought.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/5.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="fal fa-user" />
                          <a href="#">Mark W.</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-tag" />
                          <a href="#">Mechine AI</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>This definition can be further confused by the fact</a>
                    </Link>
                  </h3>
                  <p>
                    This definition can be further confused by the fact that
                    there are other roles sometimes thought.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="post-thumbnail">
                  <img src="assets/images/blog/6.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="fal fa-user" />
                          <a href="#">Mark W.</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-tag" />
                          <a href="#">Mechine AI</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>This definition can be further confused by the fact</a>
                    </Link>
                  </h3>
                  <p>
                    This definition can be further confused by the fact that
                    there are other roles sometimes thought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area newsletter-style-four">
        <div className="container">
          <div className="newsletter-wrapper wow fadeInDown">
            <div className="row">
              <div className="col-lg-6">
                <div className="newsletter-content-box">
                  <div className="section-title">
                    <span className="sub-title blue-dark">Call To Action</span>
                    <h2>Get Every Weeks Newsletter</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="newsletter-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter Address"
                        name="email"
                        required=""
                      />
                      <button className="main-btn">
                        <i className="far fa-envelope-open" />
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Footer ======*/}
      <footer className="footer-area footer-style-six">
        <div className="container">
          <div className="footer-widget pt-100 pb-40">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget about-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="logo mb-30">
                    <img
                      src="assets/images/logo/logo-3.png"
                      alt="Footer Logo"
                    />
                  </div>
                  <div className="about-content">
                    <p>
                      Free CRM system for your sales team with all the essential
                      tools sales funnel, pipeline management, sales reports,
                      360-degree customer view, support for repeat sales
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
                          <i className="fab fa-behance" />
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
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h4 className="widget-title">About</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Help Desk App</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="#">Customer Spotlight</a>
                    </li>
                    <li>
                      <a href="#">Reseller Program</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="widget-title">Services</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Sales Management</a>
                    </li>
                    <li>
                      <a href="#">Contact Management</a>
                    </li>
                    <li>
                      <a href="#">Project Management</a>
                    </li>
                    <li>
                      <a href="#">HR Management</a>
                    </li>
                    <li>
                      <a href="#">Integrations and API</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h4 className="widget-title">Support</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Knowledge Base</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Developer API</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                  <ul className="button mt-10">
                    <li>
                      <a href="#">
                        <img src="assets/images/android.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/images/apple.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text text-center">
                  <p>
                    Copyright © {new Date().getFullYear()} <span>MunTech.</span>{" "}
                    All Right Reserved
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
export default DataScience_;
