import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Details"} />
      <section className="blog-details-style pt-130 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details-wrapper mb-35">
                <div className="blog-post-item wow fadeInUp">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-single-1.jpg"
                      alt="blog image"
                    />
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
                            <a href="#">
                              25 november {new Date().getFullYear()}
                            </a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="far fa-comments" />
                            <a href="#">comments (05)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      Build And Launch Powerful Responsive Websites With Editor
                      Perfect Patterns For Screen Reader
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus errorsit
                      voluptatem accusantium doloremque laudantium totae rem
                      aperiam, eaque ipsa quae abillo inventore veritatis
                      etquasi architecto beatae vitae dicta sunt explicabo. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt.{" "}
                    </p>
                    <blockquote>
                      <div className="thumb">
                        <img src="assets/images/blog/user-4.jpg" alt="" />
                      </div>
                      <div className="content">
                        <h4>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit sed do eiusmod tempor incididunts labore dolore
                          magna aliqua suspendisse ultrices gravida
                        </h4>
                        <h5>William K. Parker</h5>
                      </div>
                    </blockquote>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis suscipit laboriosam
                    </p>
                    <div className="post-share-tag">
                      <div className="post-tag-cloud">
                        <ul>
                          <li className="item-heading">Popular Tags :</li>
                          <li>
                            <a href="#">IT Service</a>
                          </li>
                          <li>
                            <a href="#">Technology</a>
                          </li>
                          <li>
                            <a href="#">Corporate</a>
                          </li>
                        </ul>
                      </div>
                      <div className="social-share">
                        <ul className="social-link">
                          <li className="item-heading">Share News :</li>
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
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-author-box mt-60 mb-60 wow fadeInUp">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/post-author.jpg"
                      alt="post author"
                    />
                  </div>
                  <div className="author-content">
                    <h4>Shawn B. Bailey</h4>
                    <p>
                      Quis autem veleum iure reprehenderit quinea voluptate esse
                      quam molestiae consequatu velillum dolorem fugiat quo
                      voluptas nulla pariano one rejects dislikes
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
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-navigation wow fadeInUp">
                  <div className="row justify-content-between">
                    <div className="col-md-6">
                      <div className="prev-post post-nav-item">
                        <div className="thumb">
                          <img
                            src="assets/images/blog/prev-post.jpg"
                            alt="Post Thumb"
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <Link href="/blog-details">
                              <a>Bake Layers Accesilitye Testing Supporte</a>
                            </Link>
                          </h6>
                          <span className="post-date">
                            <a href="#">
                              <i className="far fa-calendar-alt" />
                              25 May {new Date().getFullYear()}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="next-post post-nav-item">
                        <div className="thumb">
                          <img
                            src="assets/images/blog/next-post.jpg"
                            alt="Post Thumb"
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <Link href="/blog-details">
                              <a>Bake Layers Accesilitye Testing Supporte</a>
                            </Link>
                          </h6>
                          <span className="post-date">
                            <a href="#">
                              <i className="far fa-calendar-alt" />
                              25 May {new Date().getFullYear()}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments-area mb-70 wow fadeInUp">
                  <h4 className="comments-title">Popular Comments (5)</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                  <ul className="comments-list">
                    <li className="comment">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-avatar-1.jpg"
                          alt="comment author two"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Randal L. Tomas
                            <span className="date">
                              25 novermber {new Date().getFullYear()}
                            </span>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <a href="#comment-respond" className="reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-avatar-2.jpg"
                          alt="comment author two"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Randal L. Tomas
                            <span className="date">
                              25 novermber {new Date().getFullYear()}
                            </span>
                          </span>
                          <p>
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida. Risus commodo
                          </p>
                          <a href="#comment-respond" className="reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-avatar-3.jpg"
                          alt="comment author two"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Randal L. Tomas
                            <span className="date">
                              25 novermber {new Date().getFullYear()}
                            </span>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                          <a href="#comment-respond" className="reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="comments-respond mb-35 wow fadeInUp"
                  id="comment-respond"
                >
                  <h4 className="comments-heading">Leave a Comments</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Your Full Name"
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
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="url"
                            className="form_control"
                            placeholder="Website"
                            name="url"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn btn-purple">
                            Send your comments
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-35 wow fadeInUp">
                  <h4 className="widget-title">
                    Search <span className="line" />
                  </h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required=""
                      />
                      <i className="fas fa-search" />
                    </div>
                  </form>
                </div>
                <div className="widget recent-post-widget mb-35 wow fadeInUp">
                  <h4 className="widget-title">
                    Recent News <span className="line" />
                  </h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/widget/post-thumb-1.jpg"
                        alt="post image"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link href="/blog-details">
                            <a>Bake Layers Accesilitye Testing Supporte</a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 november {new Date().getFullYear()}</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/widget/post-thumb-2.jpg"
                        alt="post image"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link href="/blog-details">
                            <a>Bake Layers Accesilitye Testing Supporte</a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 november {new Date().getFullYear()}</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/widget/post-thumb-3.jpg"
                        alt="post image"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link href="/blog-details">
                            <a>Bake Layers Accesilitye Testing Supporte</a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 november {new Date().getFullYear()}</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/widget/post-thumb-4.jpg"
                        alt="post image"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link href="/blog-details">
                            <a>Bake Layers Accesilitye Testing Supporte</a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 november {new Date().getFullYear()}</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-banner mb-35 wow fadeInUp">
                  <div
                    className="banner-content bg_cover"
                    style={{
                      backgroundImage: "url(assets/images/widget/banner-1.jpg)",
                    }}
                  >
                    <h3>Ready To Get Expert Our IT Services</h3>
                    <a href="#" className="main-btn main-btn-sm main-btn-blue">
                      conatct Us
                    </a>
                  </div>
                </div>
                <div className="widget widget-tag-cloud mb-35 wow fadeInUp">
                  <h4 className="widget-title">
                    Best Tags
                    <span className="line" />
                  </h4>
                  <a href="#">Technology</a>
                  <a href="#">service</a>
                  <a href="#">team</a>
                  <a href="#">solutions</a>
                  <a href="#">consultancy</a>
                  <a href="#">It Company</a>
                  <a href="#">agency</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
