import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const BlogStandard = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post-item", sort, active);
    let list = document.querySelectorAll(".blog-post-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout>
      <PageBanner pageName={"Blog Standard"} />
      <section className="blog-area blog-standard-style pt-130 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-standard-wrapper">
                <div
                  className="blog-post-item mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-standard-1.jpg"
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
                      <Link href="/blog-details">
                        <a>
                          Build And Launch Powerful Responsive Websites With
                          Editor Perfect Patterns For Screen Reader
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus errorsit
                      voluptatem accusantium doloremque laudantium totae rem
                      aperiam, eaque ipsa quae abillo inventore veritatis
                      etquasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      oditau
                    </p>
                    <Link href="/blog-details">
                      <a className="main-btn filled-btn">Read More</a>
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-post-item blog-post-with-video mb-50 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-standard-1.jpg"
                      alt="blog image"
                    />
                    <div className="play-content">
                      <a
                        href="https://www.youtube.com/watch?v=AT6oSIDbGkw"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
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
                      <Link href="/blog-details">
                        <a>
                          Build And Launch Powerful Responsive Websites With
                          Editor Perfect Patterns For Screen Reader
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus errorsit
                      voluptatem accusantium doloremque laudantium totae rem
                      aperiam, eaque ipsa quae abillo inventore veritatis
                      etquasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      oditau
                    </p>
                    <Link href="/blog-details">
                      <a className="main-btn filled-btn">Read More</a>
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-post-item blog-post-with-content mb-50 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="entry-content">
                    <h3 className="title">
                      <Link href="/blog-details">
                        <a>
                          Organize Product Related Collaborate Bettere Meet
                          Image Optimization Smashing Book Addy Osmani Easing
                          Functions Animations
                        </a>
                      </Link>
                    </h3>
                    <div className="user-admin d-flex align-items-center">
                      <div className="thumb">
                        <img
                          src="assets/images/blog/user-2.jpg"
                          alt="USer Image"
                        />
                      </div>
                      <Link href="/blog-details">
                        <a className="cat-link">Justin N. Thomas</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-post-item blog-post-with-bg bg_cover mb-50 wow fadeInUp"
                  style={{
                    backgroundImage:
                      "url(assets/images//blog/blog-standard-3.jpg)",
                  }}
                  data-wow-delay=".5s"
                >
                  <div className="entry-content">
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
                      <Link href="/blog-details">
                        <a>
                          Organize Product Related Collaborate Bettere Meet
                          Image Optimization Smashing Book Addy Osmani Easing
                          Functions Animations
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus errorsit
                      voluptatem accusantium doloremque laudantium totae rem
                      aperiam eaque ipsa quae abillo inventore veritatis etquasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem
                    </p>
                    <Link href="/blog-details">
                      <a className="main-btn filled-btn">Read More</a>
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-post-item mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-standard-1.jpg"
                      alt="blog image"
                    />
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
                  </div>
                  <div className="entry-content">
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
                      <Link href="/blog-details">
                        <a>
                          Build And Launch Powerful Responsive Websites With
                          Editor Perfect Patterns For Screen Reader
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus errorsit
                      voluptatem accusantium doloremque laudantium totae rem
                      aperiam, eaque ipsa quae abillo inventore veritatis
                      etquasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      oditau
                    </p>
                    <Link href="/blog-details">
                      <a className="main-btn filled-btn">Read More</a>
                    </Link>
                  </div>
                </div>
                <div
                  className="page-pagination mb-35 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(active === 1 ? 1 : active - 1);
                        }}
                      >
                        <i className="far fa-angle-left" />
                      </a>
                    </li>
                    {state &&
                      state.map((s, i) => (
                        <li
                          key={i}
                          className={` ${active === s ? "active" : ""}`}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(s);
                            }}
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(
                            active === state.length ? state.length : active + 1
                          );
                        }}
                      >
                        <i className="far fa-angle-right" />
                      </a>
                    </li>
                  </ul>
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
export default BlogStandard;
