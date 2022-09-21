import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { clientsSliderTwo, testimonialSliderTwo } from "../src/sliderProps";

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About With History"} pageTitle={"About Us"} />
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="fancy-about fancy-about-four pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-content-box mb-50">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    what we offer
                  </span>
                  <h2 className="text-underline">
                    We Care IT Business to Made Great Success{" "}
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis natus voluptate accusantie
                  doloremque laudantium totam rem aperiam eaque quaea vtore
                  eritatis quasi architecto beatae vitae
                </p>
                <blockquote className="quote-content mb-35 wow fadeInUp">
                  Unde omnis natus voluptate accusantie doloremqu dan totam rem
                  aperiam eaque quaea vtore eritatis
                </blockquote>
                <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                  <li>Professional Services</li>
                  <li>Experience Advisors</li>
                  <li>Software Development</li>
                  <li>Product Engineering</li>
                </ul>
                <Link href="/about">
                  <a className="main-btn btn btn-purple wow fadeInUp">
                    learn about more
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img-holder-box mb-50">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="experience-box wow fadeInDown">
                      <div className="year">
                        <h2>25</h2>
                      </div>
                    </div>
                    <div className="img-holder wow fadeInUp">
                      <img
                        src="assets/images/about/about-10.jpg"
                        alt="About Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="img-holder wow fadeInDown">
                      <img
                        src="assets/images/about/about-11.jpg"
                        alt="About Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start History Section ======*/}
      <section className="history-style-one mb-minus-130">
        <div className="container">
          <div className="history-wrapper wow fadeInUp">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div
                  className="history-img bg_cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/features/history-img-1.jpg)",
                  }}
                />
              </div>
              <div className="col-lg-6">
                <div className="history-content-box">
                  <div className="year-box bg_cover">
                    <h3>20 January 1995</h3>
                    <span className="text">When We Start Our Journery</span>
                  </div>
                  <div className="content-box">
                    <blockquote className="quote-content">
                      Complete Guide Accessible Front Floating Labels Lighthouse
                    </blockquote>
                    <div className="history-content-slider">
                      <div className="single-history mb-45">
                        <div className="text">
                          <p>
                            Sed perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium totam
                            aperiam eaquep saquae abillo inventore veritatis et
                            quasi architecto beataey vitae dicta sunt explicabe
                            enim ipsam voluptatem quiase voluptas sit aspernatur
                            autodit aut fugit
                          </p>
                        </div>
                      </div>
                      <div className="single-history mb-45">
                        <div className="text">
                          <p>
                            Sed perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium totam
                            aperiam eaquep saquae abillo inventore veritatis et
                            quasi architecto beataey vitae dicta sunt explicabe
                            enim ipsam voluptatem quiase voluptas sit aspernatur
                            autodit aut fugit
                          </p>
                        </div>
                      </div>
                      <div className="single-history mb-45">
                        <div className="text">
                          <p>
                            Sed perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium totam
                            aperiam eaquep saquae abillo inventore veritatis et
                            quasi architecto beataey vitae dicta sunt explicabe
                            enim ipsam voluptatem quiase voluptas sit aspernatur
                            autodit aut fugit
                          </p>
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
      {/*====== End History Section ======*/}
      {/*====== Start Service Section ======*/}
      <section
        className="service-area service-style-four bg_cover pt-220 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/block-bg-2.png)" }}
      >
        <div className="container">
          <div className="row service-item-wrapper">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div
                className="block-style-seventeen animate-icon text-center blue-light-bg mb-40 wow fadeInUp"
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
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div
                className="block-style-seventeen animate-icon text-center dark-blue-bg mb-40 wow fadeInUp"
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
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div
                className="block-style-seventeen animate-icon text-center dark-yellow-bg mb-40 wow fadeInUp"
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
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div
                className="block-style-seventeen animate-icon text-center dark-green-bg mb-40 wow fadeInUp"
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
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div
                className="block-style-seventeen animate-icon text-center red-dark-bg mb-40 wow fadeInUp"
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
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="clients-area clients-style-two mt-minus-100">
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
      <section className="team-area team-style-two pt-130 pb-100">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="section-title mb-50 wow fadeInLeft">
                <span className="sub-title sub-title-bg blue-light-bg">
                  Team Member
                </span>
                <h2 className="text-underline">
                  Meet Our Professionals Team Member
                </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="button float-md-right mb-50 wow fadeInRight">
                <Link href="/team-details">
                  <a className="main-btn btn-blue-light">Meet our team</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="team-item wow fadeInUp" data-wow-delay=".2s">
                <div className="team-img mb-30">
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
                data-wow-delay=".3s"
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
export default About;
