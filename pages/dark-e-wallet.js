import Parallax from "parallax-js";
import { useEffect } from "react";
import Slider from "react-slick";
import DarkWallet from "../src/components/accordion/DarkWallet";
import Counter from "../src/components/Counter";
import Header7 from "../src/layouts/headers/Header7";
import Layout from "../src/layouts/Layout";
import { clientsSliderTwo, screenshotSlider } from "../src/sliderProps";
import { parallax } from "../src/utils";

const DarkeWallet = () => {
  useEffect(() => {
    parallax(Parallax);
  }, []);

  return (
    <Layout noFooter noHeader>
      <Header7 />
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-seven">
          <div className="shape-icon shape-icon-one scene">
            <span data-depth="0.2">
              <img src="assets/images/icon/shape-7.png" alt="shape" />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Manage Your Online Banking Very Easily
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Sed perspiciatis unde omnis natus voluptate accusant dolore
                    laudantium totarem aperiam eaque quae aitore
                  </p>
                  <ul className="button wow fadeInUp" data-wow-delay=".6s">
                    <li>
                      <a href="#" className="main-btn btn-blue-dark">
                        Apple Store
                        <i className="fab fa-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="main-btn btn-gray-dark">
                        Google Play
                        <i className="fab fa-google-play" />
                      </a>
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-lg-6">
                      <div
                        className="icon-box d-flex align-items-center mt-40 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="icon">
                          <i className="fal fa-cloud-download" />
                        </div>
                        <div className="text">
                          <h5>
                            <Counter end={523560} />
                            <span>K</span>
                          </h5>
                          <p>Download Apps</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="icon-box d-flex align-items-center mt-40 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <div className="icon">
                          <i className="fal fa-shield-check" />
                        </div>
                        <div className="text">
                          <h5>
                            <Counter end={523560} />
                            <span>K</span>
                          </h5>
                          <p>Saticfied Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="hero-img text-center wow fadeInRight"
                  data-wow-delay=".9s"
                >
                  <img
                    src="assets/images/app/hero-mockup-1.png"
                    alt="App Mockup"
                  />
                  <img
                    src="assets/images/app/object-1.png"
                    className="sm-img sm-img-one"
                    alt="small mockup"
                  />
                  <img
                    src="assets/images/app/object-2.png"
                    className="sm-img sm-img-two"
                    alt="small mockup"
                  />
                  <img
                    src="assets/images/app/object-3.png"
                    className="sm-img sm-img-three"
                    alt="small mockup"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Clients Section ======*/}
      <section className="clients-area clients-style-four">
        <div className="container-fluid">
          <div className="clients-wrapper pt-70 pb-75">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb-40 wow fadeInUp">
                    <h4>
                      We Have More Then{" "}
                      <span className="yellow-dark">36254+</span> Golden Trusted
                      Partner
                    </h4>
                  </div>
                </div>
              </div>
              <Slider
                {...clientsSliderTwo}
                className="clients-slider-two wow fadeInUp"
              >
                <div className="client-item">
                  <div className="client-img">
                    <img
                      src="assets/images/clients/12.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="client-img">
                    <img
                      src="assets/images/clients/13.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="client-img">
                    <img
                      src="assets/images/clients/14.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="client-img">
                    <img
                      src="assets/images/clients/15.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="client-img">
                    <img
                      src="assets/images/clients/16.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="client-img">
                    <img
                      src="assets/images/clients/17.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="client-img">
                    <img
                      src="assets/images/clients/19.png"
                      alt="clients image"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Clients Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="fancy-text-block fancy-text-block-nine pt-130 pb-80">
        <div className="shape-icon shape-icon-one scene">
          <span data-depth="0.2">
            <img src="assets/images/icon/shape-7.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="img-holder-box mb-50">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-holder wow fadeInUp">
                      <img src="assets/images/app/mockup-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-holder mt-80 wow fadeInDown">
                      <img src="assets/images/app/mockup-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="text-wrapper mb-50">
                <div className="section-title section-title-white mb-50 wow fadeInUp">
                  <span className="sub-title yellow-dark">
                    What is E-Wallet ?
                  </span>
                  <h2>
                    Earn Money &amp; Get Your Payment Transaction By Digital Way
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="block-style-fifteen d-flex wow fadeInUp">
                      <div className="icon">
                        <i className="far fa-shield-check" />
                      </div>
                      <div className="text">
                        <h5>Make Payment</h5>
                        <p>
                          Unde omnis iste natus error sit voluptatem accusantium
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="block-style-fifteen d-flex wow fadeInUp">
                      <div className="icon">
                        <i className="far fa-usd-circle" />
                      </div>
                      <div className="text">
                        <h5>Earn Moeny</h5>
                        <p>
                          Unde omnis iste natus error sit voluptatem accusantium
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
      {/*====== End Features Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="features-area features-style-three">
        <div className="container-fluid">
          <div className="features-wrapper pt-120 pb-70">
            <div className="shape-icon shape-icon-one scene">
              <span data-depth="0.3">
                <img src="assets/images/icon/shape-8.png" alt="shape" />
              </span>
            </div>
            <div className="shape-icon shape-icon-two scene">
              <span data-depth="0.4">
                <img src="assets/images/icon/shape-9.png" alt="shape" />
              </span>
            </div>
            <div className="shape-icon shape-icon-three scene">
              <span data-depth="0.2">
                <img src="assets/images/icon/shape-10.png" alt="shape" />
              </span>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                    <span className="sub-title yellow-dark">
                      apps Core features
                    </span>
                    <h2>
                      Monetization Opportunities Provided by eWallet
                      Applications
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-4.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Registration</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-5.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Sync Account</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-6.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Add Balance</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-7.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Pay Bills</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-8.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Transfer Cash</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-9.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Payment Status</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-10.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Redeem Points</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="block-style-sixteen animate-icon d-flex mb-50 wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="icon">
                      <img src="assets/images/app/icon-11.png" alt="icon" />
                    </div>
                    <div className="text">
                      <h3>Transaction History</h3>
                      <p>
                        Sed ut perspic undomnis natus error sit volupt atem
                        accus antium dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Faq Section ======*/}
      <section className="faq-area pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-content-box mb-40 wow fadeInLeft">
                <div className="section-title section-title-white mb-30">
                  <span className="sub-title yellow-dark">what we offer</span>
                  <h2>eWallet App That Enables Better Transactions</h2>
                </div>
                <DarkWallet />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-img text-md-right mb-40 wow fadeInRight">
                <img src="assets/images/app/mockup-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Screenshot Section ======*/}
      <section className="screenshot-area pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                <span className="sub-title yellow-dark">App screenshot</span>
                <h2>Let’s See Quality Premium Design Application Screenshot</h2>
              </div>
            </div>
          </div>
          <Slider
            {...screenshotSlider}
            className="screenshot-slider wow fadeInUp"
          >
            <div className="screenshot-item">
              <div className="screenshot-img">
                <img src="assets/images/app/mockup-4.jpg" alt="Image" />
              </div>
            </div>
            <div className="screenshot-item">
              <div className="screenshot-img">
                <img src="assets/images/app/mockup-5.jpg" alt="Image" />
              </div>
            </div>
            <div className="screenshot-item">
              <div className="screenshot-img">
                <img src="assets/images/app/mockup-6.jpg" alt="Image" />
              </div>
            </div>
            <div className="screenshot-item">
              <div className="screenshot-img">
                <img src="assets/images/app/mockup-5.jpg" alt="Image" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Screenshot Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="counter-area counter-style-four">
        <div className="container-fluid">
          <div className="counter-wrapper pt-130 pb-50">
            <div className="shape-icon shape-icon-one scene">
              <span data-depth="0.3">
                <img src="assets/images/icon/shape-8.png" alt="shape" />
              </span>
            </div>
            <div className="shape-icon shape-icon-two scene">
              <span data-depth="0.2">
                <img src="assets/images/icon/shape-9.png" alt="shape" />
              </span>
            </div>
            <div className="shape-icon shape-icon-three scene">
              <span data-depth="0.1">
                <img src="assets/images/icon/shape-10.png" alt="shape" />
              </span>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="counter-content-box mb-50 wow fadeInUp">
                    <div className="section-title section-title-white mb-20">
                      <span className="sub-title yellow-dark">
                        our fun fact
                      </span>
                      <h2>Great Achievement To Your E-Wallet Application</h2>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque quae ab illo inventore veritatis et quasi
                      architecto beatae vitaes dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt.
                    </p>
                    <a href="#" className="main-btn btn-blue-dark">
                      Learn more us
                    </a>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="counter-item-wrap mb-50">
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          className="counter-item text-center mt-80 mb-30 wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          <div className="icon">
                            <img src="assets/images/app/icon-1.png" alt="" />
                          </div>
                          <div className="text">
                            <h2 className="number">
                              <Counter end={896352} />+
                            </h2>
                            <p>Download Our Apps</p>
                          </div>
                        </div>
                        <div
                          className="counter-thumb mb-30 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <img src="assets/images/app/img-1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="counter-item text-center mb-30 wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          <div className="icon">
                            <img src="assets/images/app/icon-2.png" alt="" />
                          </div>
                          <div className="text">
                            <h2 className="number">
                              <Counter end={785630} />+
                            </h2>
                            <p>Saticfied Clients</p>
                          </div>
                        </div>
                        <div
                          className="counter-item text-center mb-30 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="icon">
                            <img src="assets/images/app/icon-3.png" alt="" />
                          </div>
                          <div className="text">
                            <h2 className="number">
                              <Counter end={85634} />+
                            </h2>
                            <p>5 Star Rating</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-area pricing-style-three pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                <span className="sub-title yellow-dark">pricing package</span>
                <h2>We Have Appropriate Pricing Package For Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="pricing-title-price">
                  <div className="pricing-title">
                    <h3 className="title">Basic Plan</h3>
                    <div className="icon">
                      <img
                        src="assets/images/app/card-icon-1.png"
                        className="card-icon"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pricing-price">
                    <h3 className="price">
                      <span className="currency">$</span>29.99
                      <span className="sm-text">/Monthly</span>
                    </h3>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list text-left">
                    <li className="check">Resposive Design</li>
                    <li className="check">Unlimited Entities</li>
                    <li className="uncheck">Premium Quality Support</li>
                    <li className="uncheck">Hosted In The Cloud</li>
                  </ul>
                  <a href="#" className="main-btn btn-gray-dark">
                    choose plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="pricing-title-price">
                  <div className="pricing-title">
                    <h3 className="title">Silver Plan</h3>
                    <div className="icon">
                      <img
                        src="assets/images/app/card-icon-1.png"
                        className="card-icon"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pricing-price">
                    <h3 className="price">
                      <span className="currency">$</span>45.99
                      <span className="sm-text">/Monthly</span>
                    </h3>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list text-left">
                    <li className="check">Resposive Design</li>
                    <li className="check">Unlimited Entities</li>
                    <li className="check">Premium Quality Support</li>
                    <li className="check">Hosted In The Cloud</li>
                  </ul>
                  <a href="#" className="main-btn btn-gray-dark">
                    choose plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="pricing-title-price">
                  <div className="pricing-title">
                    <h3 className="title">Gold Plan</h3>
                    <div className="icon">
                      <img
                        src="assets/images/app/card-icon-1.png"
                        className="card-icon"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pricing-price">
                    <h3 className="price">
                      <span className="currency">$</span>93.99
                      <span className="sm-text">/Monthly</span>
                    </h3>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list text-left">
                    <li className="check">Resposive Design</li>
                    <li className="check">Unlimited Entities</li>
                    <li className="check">Premium Quality Support</li>
                    <li className="check">Hosted In The Cloud</li>
                  </ul>
                  <a href="#" className="main-btn btn-gray-dark">
                    choose plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area cta-style-five pt-90 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-md-12">
              <div className="cta-content-box mb-40 wow fadeInLeft">
                <div className="section-title section-title-white mb-40">
                  <span className="sub-title yellow-dark">
                    Get our e-wallet ?
                  </span>
                  <h2>
                    Ready to Work Digital E-Wallet! Want to Build eWallet
                    Applications ?
                  </h2>
                </div>
                <ul className="button">
                  <li>
                    <a href="#" className="main-btn btn-blue-dark">
                      Apple Store
                      <i className="fab fa-apple" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="main-btn btn-gray-dark">
                      Google Play
                      <i className="fab fa-google-play" />
                    </a>
                  </li>
                </ul>
                <div className="quote-box mt-40 d-flex">
                  <div className="thumb">
                    <img src="assets/images/app/thumb-1.jpg" alt="" />
                  </div>
                  <div className="text">
                    <p>
                      Sed ut perspciatis unde omnis natus errors voluptatem
                      accus dolore mque laudantium totam rem aperiam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-md-12">
              <div className="cta-img text-xl-right text-md-center mb-40 wow fadeInRight">
                <img src="assets/images/app/mockup-7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Footer ======*/}
      <footer className="footer-area footer-style-five pt-70">
        <div className="shape-icon shape-icon-one scene">
          <span data-depth="0.3">
            <img src="assets/images/icon/shape-8.png" alt="shape" />
          </span>
        </div>
        <div className="shape-icon shape-icon-two scene">
          <span data-depth="0.2">
            <img src="assets/images/icon/shape-9.png" alt="shape" />
          </span>
        </div>
        <div className="shape-icon shape-icon-three scene">
          <span data-depth="0.1">
            <img src="assets/images/icon/shape-10.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="footer-widget pb-35">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget about-widget mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="about-content">
                    <h2>We Are Ready To Help You! Contact Us!</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque
                    </p>
                    <h5>
                      <i className="far fa-envelope-open" />
                      <a href="tel:hotlineinfo@gmail.com">
                        hotlineinfo@gmail.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h4 className="widget-title">Solutions</h4>
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
                      <a href="#">Product Enginering</a>
                    </li>
                    <li>
                      <a href="#">Project Management</a>
                    </li>
                    <li>
                      <a href="#">Security Solutions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="widget-title">Resources</h4>
                  <ul className="footer-nav list-style-arrow">
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">Handbook</a>
                    </li>
                    <li>
                      <a href="#">Developers</a>
                    </li>
                    <li>
                      <a href="#">Space Blog</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Free Course</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget contact-info-widget mb-40 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h4 className="widget-title">Contact Us</h4>
                  <p>
                    <i className="far fa-map-marker-alt" />
                    <span>55 Main Street, New York</span>
                  </p>
                  <p>
                    <i className="far fa-phone" />
                    <span>
                      <a href="tel:+01234567899">+012 (345) 67 899</a>
                    </span>
                  </p>
                  <div className="social-box mt-25">
                    <h3>Follow Us</h3>
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
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="text text-md-left text-sm-center">
                  <p>
                    Copyright © {new Date().getFullYear()} <span>MunTech.</span>{" "}
                    All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright-nav float-md-right float-sm-none text-sm-center">
                  <ul>
                    <li>
                      <a href="#">Setting</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
export default DarkeWallet;
