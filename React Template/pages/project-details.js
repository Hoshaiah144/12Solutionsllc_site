import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectSlider } from "../src/sliderProps";

const ProjectDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Portfolio Details"} />
      <section className="portfolio-details-area pt-130 pb-80">
        <div className="container">
          <div className="portfolio-details-wrapper wow fadeInUp">
            <div className="portfolio-img">
              <div className="row">
                <div className="col-lg-7">
                  <img
                    src="assets/images/projects/project-single-1.jpg"
                    className="mb-30"
                    alt=""
                  />
                </div>
                <div className="col-lg-5">
                  <img
                    src="assets/images/projects/project-single-2.jpg"
                    className="mb-30"
                    alt=""
                  />
                  <img
                    src="assets/images/projects/project-single-3.jpg"
                    className="mb-30"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="portfolio-content mt-30">
              <div className="row">
                <div className="col-lg-8">
                  <div className="content">
                    <h3 className="title">Software Development</h3>
                    <div className="text-box">
                      <div className="big-text">M</div>
                      <div className="box-text">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque lau dantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatu aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequines ciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">{`Client's Needs`}</h4>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatu aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequines ciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet Quis
                      autem vel eum iure reprehenderit qui in ea voluptate
                    </p>
                    <ul className="list">
                      <li>
                        Choosing A New Serverless Database Technology At An
                        Agency (Case Study)
                      </li>
                      <li>
                        Growing UX Maturity: Knowledge Sharing And Mentorship
                        (Part 2)
                      </li>
                      <li>How To Boost Media Performance On A Budget</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="project-info">
                    <h3>Project Details</h3>
                    <ul className="list">
                      <li>
                        <span className="title">Project Name</span>
                        <span className="text">Software Development</span>
                      </li>
                      <li>
                        <span className="title">Clients Name</span>
                        <span className="text">Infra IT Company</span>
                      </li>
                      <li>
                        <span className="title">Category</span>
                        <span className="text">IT Solutions</span>
                      </li>
                      <li>
                        <span className="title">Project Date</span>
                        <span className="text">
                          25 November {new Date().getFullYear()}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h4 className="title">Working Process</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet
                </p>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-step-box">
                      <div className="icon">
                        <i className="flaticon-creative" />
                        <span className="step-count">01</span>
                      </div>
                      <div className="text">
                        <h3>Select Category</h3>
                        <p>
                          Sed perspiciatis omnis tenatus voluptate accusa
                          dolorem laudantiue
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-step-box">
                      <div className="icon">
                        <i className="flaticon-growth" />
                        <span className="step-count">02</span>
                      </div>
                      <div className="text">
                        <h3>Project Research</h3>
                        <p>
                          Sed perspiciatis omnis tenatus voluptate accusa
                          dolorem laudantiue
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-step-box">
                      <div className="icon">
                        <i className="flaticon-analysis" />
                        <span className="step-count">03</span>
                      </div>
                      <div className="text">
                        <h3>Project Analysis</h3>
                        <p>
                          Sed perspiciatis omnis tenatus voluptate accusa
                          dolorem laudantiue
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-step-box">
                      <div className="icon">
                        <i className="flaticon-solution-3" />
                        <span className="step-count">04</span>
                      </div>
                      <div className="text">
                        <h3>Got Final Results</h3>
                        <p>
                          Sed perspiciatis omnis tenatus voluptate accusa
                          dolorem laudantiue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="title">Results</h4>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.{" "}
                    </p>
                    <h6 className="roboto-italic">
                      No one rejects, dislikes, or avoids pleasure itself,
                      because it is pleasure, but because those who do not know
                      how to pursue pleasure rationally encounter consequences
                      that are extremely painful.
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    <div className="img-box text-lg-right">
                      <img
                        src="assets/images/projects/project-single-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Project-Details  Section ======*/}
      {/*====== Start Recent Portfolio Section ======*/}
      <section className="recent-portfolio light-gray-bg pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title mb-45 text-center wow fadeInUp">
                <span className="sub-title sub-title-bg blue-light-bg">
                  latest project
                </span>
                <h2 className="text-underline">
                  {` We’ve Successfully 256+ Project Complate`}
                </h2>
              </div>
            </div>
          </div>
          <Slider
            {...projectSlider}
            className="recent-portfolio-slider slider_margin"
          >
            <div
              className="portfolio-block-seven wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="portfolio-img">
                <img src="assets/images/projects/project-17.jpg" alt="Image" />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Web Development</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Services</a>
                </Link>
              </div>
            </div>
            <div
              className="portfolio-block-seven wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="portfolio-img">
                <img src="assets/images/projects/project-18.jpg" alt="Image" />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">IT Solutions Consultations</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Services</a>
                </Link>
              </div>
            </div>
            <div
              className="portfolio-block-seven wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="portfolio-img">
                <img src="assets/images/projects/project-19.jpg" alt="Image" />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Product Engineering</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Services</a>
                </Link>
              </div>
            </div>
            <div
              className="portfolio-block-seven wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="portfolio-img">
                <img src="assets/images/projects/project-20.jpg" alt="Image" />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">IT Solutions Consultations</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Services</a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default ProjectDetails;
