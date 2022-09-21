import dynamic from "next/dynamic";
import Link from "next/link";
import Counter from "../src/components/Counter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const TeamDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Team Details"} />
      <section className="team-details-section pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12">
              <div className="team-content mb-50 wow fadeInLeft">
                <div className="member-info">
                  <h3>Shane D. Farrelly</h3>
                  <p className="position">Web Developer</p>
                  <p>
                    Sed perspiciatis unde omnis natus volue accusantie
                    doloremque laudantium totam rem aperiam eaque quaea vtore
                    eritatis quasi architecto beatae vitae
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
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="member-img">
                  <img
                    src="assets/images/team/team-single-1.jpg"
                    alt="Member Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12">
              <div className="counter-style-three mb-50">
                <div className="counter-item wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-document" />
                  </div>
                  <div className="text">
                    <h2 className="number">
                      <Counter end={25630} />+
                    </h2>
                    <p>Happy Customer</p>
                  </div>
                </div>
                <div className="counter-item wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-rating" />
                  </div>
                  <div className="text">
                    <h2 className="number">
                      <Counter end={75646} />+
                    </h2>
                    <p>Star Work Reviews</p>
                  </div>
                </div>
                <div className="counter-item wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-dashboard-1" />
                  </div>
                  <div className="text">
                    <h2 className="number">
                      <Counter end={89634} />+
                    </h2>
                    <p>Project Complate</p>
                  </div>
                </div>
                <div className="counter-item wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-trophy" />
                  </div>
                  <div className="text">
                    <h2 className="number">
                      <Counter end={96325} />+
                    </h2>
                    <p>Win Of Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Details Section ======*/}
      {/*====== Start Skill Section ======*/}
      <section className="skill-area skill-style-two pt-80 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="skill-content-box wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="section-title mb-40">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    latest skills
                  </span>
                  <h2 className="text-underline">
                    Our Professional IT Service Skills
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="skill-item mb-40 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="skill-bar mb-20">
                      {/* <div
                        className="circle"
                        data-donutty=""
                        data-thickness={10}
                        data-value={89}
                        data-bg="rgba(67, 186, 255, 0.1)"
                        data-round="false"
                        data-color="#43baff"
                      /> */}
                      <DonutChart
                        value={89}
                        color={"#43baff"}
                        background={"rgba(67, 186, 255, 0.1)"}
                      />
                      <h2 className="number">
                        <span className="count">89</span>%
                      </h2>
                    </div>
                    <div className="text">
                      <h3 className="title">IT Consulting</h3>
                      <p>Sed perspic unde omnise voluptate accusantie</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="skill-item mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="skill-bar mb-20">
                      {/* <div
                        className="circle"
                        data-donutty=""
                        data-thickness={10}
                        data-value={67}
                        data-bg="rgba(113, 65, 177, 0.1)"
                        data-round="false"
                        data-color="#7141b1"
                      /> */}
                      <DonutChart
                        value={67}
                        color={"#7141b1"}
                        background={"rgba(113, 65, 177, 0.1)"}
                      />
                      <h2 className="number">
                        <span className="count">67</span>%
                      </h2>
                    </div>
                    <div className="text">
                      <h3 className="title">Management</h3>
                      <p>Sed perspic unde omnise voluptate accusantie</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="skill-item mb-40 wow fadeInUp"
                    data-wow-delay=".5"
                  >
                    <div className="skill-bar mb-20">
                      {/* <div
                        className="circle"
                        data-donutty=""
                        data-thickness={10}
                        data-value={53}
                        data-bg="rgba(253, 74, 24, 0.1)"
                        data-round="false"
                        data-color="#fd4a18"
                      /> */}
                      <DonutChart
                        value={53}
                        color={"#fd4a18"}
                        background={"rgba(253, 74, 24, 0.1)"}
                      />
                      <h2 className="number">
                        <span className="count">53</span>%
                      </h2>
                    </div>
                    <div className="text">
                      <h3 className="title">UX/UI Strategy</h3>
                      <p>Sed perspic unde omnise voluptate accusantie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skill Section ======*/}
      {/*====== Start Fancy Block Section ======*/}
      <section className="fancy-text-block fancy-text-block-twelve light-gray-bg pt-120 pb-130">
        <div className="container">
          <div className="fancy-block-wrapper">
            <div className="row align-items-center no-gutters">
              <div className="col-lg-6">
                <div className="img-holder wow fadeInLeft">
                  <img src="assets/images/block/gallery-12.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-wrapper wow fadeInRight">
                  <div className="section-title mb-25">
                    <span className="sub-title sub-title-bg btn-blue-light">
                      Service &amp; solutions
                    </span>
                    <h2 className="text-underline">
                      We’re Very Professional &amp; Experience Agency{" "}
                    </h2>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment so blinded
                  </p>
                  <Link href="/service-2">
                    <a className="main-btn btn-purple">Get our services</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fancy Block Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-area cta-style-four bg_cover pt-70 pb-70"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="cta-content wow fadeInLeft">
                <h3>
                  Full Truckload Planning Reimagined Experts in Security Dynamic
                  Load Planning &amp; Dispatching
                </h3>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="button float-lg-right wow fadeInRight">
                <Link href="/contact">
                  <a className="main-btn btn-blue-light">{` Let’s meet us`}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section
        className="contact-area contact-style-three bg_cover pt-130 pb-80"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-section-box mb-50 wow fadeInLeft">
                <div className="section-title mb-25">
                  <span className="sub-title sub-title-bg btn-blue-light">
                    Need help ?
                  </span>
                  <h2 className="text-underline">
                    Let’s Talk About IT Solutions
                  </h2>
                </div>
                <p>
                  On the other hand denounce righteous indige ation and dislike
                  men who are so beguiled and demoralized by the charms of
                  pleasure of the moment blinded by desire
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
                      <i className="fab fa-linkedin" />
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
            <div className="col-lg-7">
              <div className="contact-wrapper mb-50 wow fadeInRight">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
                      <div className="form_group">
                        <select className="wide">
                          <option value={1}>Customer Support</option>
                          <option value={1}>Customer Support</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message"
                          name="message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <div className="col-lg-12">
                          <button className="main-btn btn-purple">
                            Get free consultations
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default TeamDetails;
