import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Footer4 from "../src/layouts/footers/Footer4";
import Header4 from "../src/layouts/headers/Header4";
import Layout from "../src/layouts/Layout";
import { testimonialSliderThree } from "../src/sliderProps";

const HelpDesk = () => {
  return (
    <Layout noFooter noHeader>
      <Header4 />
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-four">
          <div className="shape-icon shape-icon-one scene">
            <span data-depth={2}>
              <img src="assets/images/icon/icon-16.png" alt="shape" />
            </span>
          </div>
          <div className="shape-icon shape-icon-two scene">
            <span data-depth={4}>
              <img src="assets/images/icon/icon-15.png" alt="shape" />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-first">
                <div className="hero-content">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    Support across all channels
                  </span>
                  <h1 className="wow fadeInDown" data-wow-delay=".4s">
                    Choose The Best Support Ticketing
                  </h1>
                  <p>
                    Sed perspiciatis unde omnis natus voluptate accusantiuy
                    doloreue laudantium totam rem aperiam eaque quae aitore
                    veritatis quasi architecto beatae vitae
                  </p>
                  <ul className="button wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <Link href="/about">
                        <a className="main-btn btn-blue-dark">get started</a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=vTm7t9JBGfM&t=39s"
                        className="video-popup"
                      >
                        <div className="icon">
                          <i className="fas fa-play" />
                        </div>
                        <span>How it works</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 order-lg-last">
                <div className="hero-img wow fadeInRight" data-wow-delay=".9s">
                  <img
                    src="assets/images/hero/hero-4_img-1.png"
                    alt="Hero Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area light-gray-bg pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title blue-dark">why choose us</span>
                <h2>
                  Omnichannel support experience enhanced, with Freshdesk!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-customer-service-1" />
                </div>
                <div className="text">
                  <h4>Support All Channels</h4>
                  <p>
                    Sed ut perspiciatis unde oniste atus error volutatem accusu
                    dolore lauda
                  </p>
                  <Link href="/service-1">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-interactive" />
                </div>
                <div className="text">
                  <h4>Faster Resolution</h4>
                  <p>
                    Sed ut perspiciatis unde oniste atus error volutatem accusu
                    dolore lauda
                  </p>
                  <Link href="/service-1">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-search" />
                </div>
                <div className="text">
                  <h4>Context Touchpoint</h4>
                  <p>
                    Sed ut perspiciatis unde oniste atus error volutatem accusu
                    dolore lauda
                  </p>
                  <Link href="/service-1">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-24-hours" />
                </div>
                <div className="text">
                  <h4>Omniroute Lifting</h4>
                  <p>
                    Sed ut perspiciatis unde oniste atus error volutatem accusu
                    dolore lauda
                  </p>
                  <Link href="/service-1">
                    <a className="btn-link">read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Fancy Text block Section ======*/}
      <section className="fancy-text-block fancy-text-block-four pt-130 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="img-holder mb-50 wow fadeInLeft">
                <img src="assets/images/block/gallery-3.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-20 wow fadeInUp">
                  <span className="sub-title blue-dark">
                    Designed to boost{" "}
                  </span>
                  <h2>What Customers Think About Of HelpDesk</h2>
                </div>
                <div className="block-style-eleven wow fadeInUp">
                  <div className="text">
                    <h5>Tracking Made Easy</h5>
                    <p>
                      Sed ut perspiciatis unde oniste atus errorvo lutatem
                      accusu dolore lauda
                    </p>
                  </div>
                </div>
                <div className="block-style-eleven wow fadeInUp">
                  <div className="text">
                    <h5>Support Portal Refelts Business</h5>
                    <p>
                      Sed ut perspiciatis unde oniste atus errorvo lutatem
                      accusu dolore lauda
                    </p>
                  </div>
                </div>
                <div className="block-style-eleven wow fadeInUp">
                  <div className="text">
                    <h5>Collaborate Effectively</h5>
                    <p>
                      Sed ut perspiciatis unde oniste atus errorvo lutatem
                      accusu dolore lauda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fancy Text block Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area cta-style-two pb-130">
        <div className="container">
          <div className="cta-wrapper">
            <div className="shape-icon shape-icon-one scene">
              <span data-depth={2}>
                <img src="assets/images/icon/shape-1.png" alt="shape" />
              </span>
            </div>
            <div className="shape-icon shape-icon-two scene">
              <span data-depth={4}>
                <img src="assets/images/icon/shape-2.png" alt="sahpe" />
              </span>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="cta-content-box wow fadeInLeft">
                  <div className="section-title mb-15">
                    <span className="sub-title blue-dark">
                      Designed to boost
                    </span>
                    <h2>Collaboration With Live Chat to Muntech</h2>
                  </div>
                  <p>
                    Sed perspiciatis unde omnis natus voluptate accusantiuy
                    doloreue laudantium totam aperiam eaque
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                      <button className="main-btn">sign up</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cta-img wow fadeInRight">
                  <img src="assets/images/block/gallery-4.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Fancy Text block Section ======*/}
      <section className="fancy-text-block fancy-text-block-five pb-80">
        <div className="container">
          <div className="row fancy-block-wrapper align-items-center">
            <div className="col-lg-7">
              <div className="img-holder mb-50 wow fadeInLeft">
                <img src="assets/images/block/gallery-5.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title blue-dark">
                    What you can we do
                  </span>
                  <h2>Manage Your Email &amp; Data Communication Tasks</h2>
                </div>
                <div className="block-style-twelve animate-icon d-flex mb-35 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-online-chat" />
                  </div>
                  <div className="text">
                    <h5>Make Better Decisions Based on Data</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudan totam rem
                      aperiam, eaque ipsa quae abillo
                    </p>
                  </div>
                </div>
                <div className="block-style-twelve animate-icon d-flex mb-35 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-meeting" />
                  </div>
                  <div className="text">
                    <h5>Make Better Decisions Based on Data</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudan totam rem
                      aperiam, eaque ipsa quae abillo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row fancy-block-wrapper align-items-center">
            <div className="col-lg-7">
              <div className="img-holder mb-50 wow fadeInRight">
                <img src="assets/images/block/gallery-6.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title blue-dark">
                    What you can we do
                  </span>
                  <h2>Manage Your Email &amp; Data Communication Tasks</h2>
                </div>
                <div className="block-style-twelve animate-icon d-flex mb-35 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-online-chat" />
                  </div>
                  <div className="text">
                    <h5>Automate Repetitive Tasks</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudan totam rem
                      aperiam, eaque ipsa quae abillo
                    </p>
                  </div>
                </div>
                <div className="block-style-twelve animate-icon d-flex mb-35 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-meeting" />
                  </div>
                  <div className="text">
                    <h5>Customize Your Address &amp; Dashboard</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudan totam rem
                      aperiam, eaque ipsa quae abillo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fancy Text block Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="counter-area counter-style-two pb-130">
        <div className="container">
          <div className="counter-wrapper wow fadeInDown">
            <div className="shape-icon shape-icon-one scene">
              <span data-depth={2}>
                <img src="assets/images/icon/shape-3.png" alt="shape" />
              </span>
            </div>
            <div className="shape-icon shape-icon-two scene">
              <span data-depth={3}>
                <img src="assets/images/icon/shape-4.png" alt="shape" />
              </span>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
                <div className="counter-item text-center">
                  <div className="icon">
                    <i className="flaticon-document" />
                  </div>
                  <h2 className="number">
                    <Counter end={25630} /> +
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
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-style-three position-relative bg_cover"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div
          className="testimonial-bg bg_cover wow fadeInLeft"
          style={{
            backgroundImage: "url(assets/images/bg/testimonial-bg-3.jpg)",
          }}
        />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="text-wrapper pt-120 pb-130">
                <div className="section-title mb-45 wow fadeInUp">
                  <span className="sub-title blue-dark">Clients feedback</span>
                  <h2>What Clients Say About Muntech Supports</h2>
                </div>
                <Slider
                  className="testimonial-slider-three wow fadeInDown"
                  {...testimonialSliderThree}
                >
                  <div className="testimonial-item">
                    <div className="wt-content">
                      <p>
                        On the other hand we denounce withs righteous
                        indignation and dislike meny who are so beguile and
                        demoralized by the charms of pleasure moment so blin ded
                        desire that they cannot foresee the pain and trouble
                        that are bounde
                      </p>
                    </div>
                    <div className="author-title-thumb d-flex mt-30">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/user-5.jpg"
                          alt="user image"
                        />
                      </div>
                      <div className="author-title flex-grow-1">
                        <h3>Norman E. Beeks</h3>
                        <p className="position">Web Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="wt-content">
                      <p>
                        On the other hand we denounce withs righteous
                        indignation and dislike meny who are so beguile and
                        demoralized by the charms of pleasure moment so blin ded
                        desire that they cannot foresee the pain and trouble
                        that are bounde
                      </p>
                    </div>
                    <div className="author-title-thumb d-flex mt-30">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/user-5.jpg"
                          alt="user image"
                        />
                      </div>
                      <div className="author-title flex-grow-1">
                        <h3>Norman E. Beeks</h3>
                        <p className="position">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="testimonial-arrows fadeInUp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Testimonial Section ======*/}
      {/*====== Start Clients Section ======*/}
      <section className="clients-area clients-style-four  pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-65 wow fadeInUp">
                <span className="sub-title blue-dark">popular clients</span>
                <h2>
                  We Have More Then <span className="red-dark">36254+</span>
                  Golden Trusted Partner
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/12.png" alt="clients image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/13.png" alt="clients image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/14.png" alt="clients image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/15.png" alt="clients image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/16.png" alt="clients image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/17.png" alt="clients image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/18.png" alt="clients image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div
                className="client-item mb-80 text-center wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="client-img">
                  <img src="assets/images/clients/19.png" alt="clients image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Clients Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area newsletter-style-two pt-45 pb-130">
        <div className="container">
          <div className="newsletter-wrapper">
            <svg id="curve-one" width="154px" height="304px">
              <path
                fillRule="evenodd"
                d="M0.363,304.009 C0.363,304.009 117.617,244.396 79.923,186.243 C44.967,132.313 85.753,91.775 115.187,87.772 C144.891,83.731 177.949,28.953 127.828,1.277 C77.708,1.588 0.082,0.612 0.082,0.612 L0.363,304.009 Z"
              />
            </svg>
            <svg id="curve-two" width="456px" height="231px">
              <path
                fillRule="evenodd"
                d="M-0.000,3.000 C-0.000,3.000 89.597,176.653 177.000,120.000 C258.056,67.461 318.982,128.761 325.000,173.000 C331.073,217.644 413.403,267.330 455.000,192.000 C454.532,116.670 456.000,-0.000 456.000,-0.000 L-0.000,3.000 Z"
              />
            </svg>
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title wow fadeInLeft">
                  <span className="sub-title blue-dark">
                    Subscribe newsletters
                  </span>
                  <h2>Get Every Single Update Join and Subscribe</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="newsletter-content-box wow fadeInRight">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit ptatem
                    accusantium doloremque totam
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                      <button className="main-btn">sign up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Footer Section ======*/}
      <Footer4 />
    </Layout>
  );
};
export default HelpDesk;
