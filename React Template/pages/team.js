import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Team = () => {
  return (
    <Layout>
      <PageBanner pageName={"Team Member"} />
      <section className="team-area team-style-four pt-130 pb-70">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-8">
              <div className="section-title mb-50 wow fadeInLeft">
                <span className="sub-title sub-title-bg blue-light-bg">
                  Team Member
                </span>
                <h2 className="text-underline">
                  Meet Our Professionals Team Member
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="button float-md-right mb-60 wow fadeInRight">
                <Link href="/team">
                  <a className="main-btn btn-blue-light">Meet our team</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_18.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">
                      <a>Zachary M. Hammel</a>
                    </Link>
                  </h3>
                  <p className="position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_19.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">Shane D. Farrelly</Link>
                  </h3>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_20.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">Roger C. Brunson</Link>
                  </h3>
                  <p className="position">Junior Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_21.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">Steven M. Fournier</Link>
                  </h3>
                  <p className="position">Junior Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_22.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">Eric L. Maldonado</Link>
                  </h3>
                  <p className="position">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".45s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_23.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">Tobias R. Marshall</Link>
                  </h3>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_24.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">Alexander T. Drake</Link>
                  </h3>
                  <p className="position">Junior Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".55s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_25.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">James M. Hadley</Link>
                  </h3>
                  <p className="position">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item mb-50 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="team-img">
                  <img src="assets/images/team/img_26.jpg" alt="Team Image" />
                  <div className="team-overlay">
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
                </div>
                <div className="team-content text-center">
                  <h3 className="title">
                    <Link href="/team-details">David I. McDaniel</Link>
                  </h3>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
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
                  <span className="sub-title blue-light-bg sub-title-bg">
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
export default Team;
