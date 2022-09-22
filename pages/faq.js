import Faq from "../src/components/accordion/Faq";
import HomeDev from "../src/components/accordion/HomeDev";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Faqs = () => {
  return (
    <Layout>
      <PageBanner pageName={"Faqs "} />
      <section className="faq-area pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img mb-50 wow fadeInLeft">
                <img src="assets/images/features/faq-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-box faq-content-box-one mb-50">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    Asked questions
                  </span>
                  <h2 className="text-underline">
                    Any Questions On Mind? Asked Questions
                  </h2>
                </div>
                <HomeDev extraFaq />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End FAQ Section ======*/}
      {/*====== Start FAQ Section ======*/}
      <section
        className="faq-area bg_cover pt-120 pb-130"
        style={{ backgroundImage: "url(assets/images/bg/block-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                <span className="sub-title blue-light-bg sub-title-bg">
                  Asked questions
                </span>
                <h2 className="text-underline">
                  Any Questions On Mind? Asked Questions
                </h2>
              </div>
            </div>
          </div>
          <Faq />
        </div>
      </section>
      {/*====== End FAQ Section ======*/}
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
                  <span className="sub-title sub-title-bg blue-light-bg">
                    Need help ?
                  </span>
                  <h2>Let’s Talk About IT Solutions</h2>
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
export default Faqs;
