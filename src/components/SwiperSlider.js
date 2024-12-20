import React from 'react'

const SwiperSlider = (props) => {
  return (
    <>
      <div className="swiper-slide">
                <figure className="overlay caption caption-overlay rounded mb-0"><a href="#"> <img src={props.cardImage} alt="" /></a>
                  <figcaption>
                    <span className="badge badge-lg bg-white text-uppercase mb-3">{props.cardTag}</span>
                    <h2 className="post-title h3 mt-1 mb-3"><a href="./blog-post.html">{props.title}</a></h2>
                    {/* <ul className="post-meta text-white mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>8 Aug 2022</span></li>
                      <li className="post-author"><a href="#"><i className="uil uil-user"></i><span>By Sandbox</span></a></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>3<span> Comments</span></a></li>
                    </ul> */}
                  </figcaption>
                </figure>
              </div>
    </>
  )
}

export default SwiperSlider
