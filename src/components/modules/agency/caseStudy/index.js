import React from "react"

//TODO: Replace this with the reusable component
const Testimonials = () => (
  <section class="section_testimonial">
    <div class="container">
      <div class="blockWrapper">
        <div class="testimonialWrapper">
          <p class="testimonialContent">
            "I was using Yext and switched to Synup. The services and features
            offered by Synup are more convenient and easy to use and the support
            team with Synup helped me set up all locations with ease. Their
            system has more features in comparison to other competitors and
            their cost is much cheaper."
          </p>
          <div class="testimonialAuthor">
            <div class="testimonialAuthor_img">
              <figure>
                <img src="images/author.jpg" class="avartar-img" alt="" />
              </figure>
            </div>
            <div class="testimonialAuthor_details">
              <h6 class="testimonialAuthor_name">Ziad Rawashdeh</h6>
              <p class="testimonialAuthor_position">
                CEO, RAWA Law Group APC &amp; SmartCPA
              </p>
            </div>
          </div>
        </div>
        <div class="testimonial_wrapperCard">
          <div class="va_list">
            <div class="va_set">
              <a href="#">
                <img src="images/svg/v-icon.svg" class="img_fluid" alt="" />
              </a>
              <p class="va_text">
                increased client leads by <span class="primary_text">200%</span>
              </p>
            </div>
            <div class="va_set">
              <a href="#">
                <img src="images/svg/v-icon.svg" class="img_fluid" alt="" />
              </a>
              <p class="va_text">
                increased client leads by <span class="primary_text">200%</span>
              </p>
            </div>
          </div>
          <button class="btn btn_outlineTransparent  btn_arrow">
            <span class="btn_textSpan">
              LEARN MORE
              <svg
                width="15px"
                height="19px"
                viewBox="0 0 15 19"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns
                xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="UI/Components/button/SecondaryBig/hover"
                    transform="translate(-119.000000, -18.000000)"
                    fill="#4865FF"
                  >
                    <g
                      id="Group-Copy-2"
                      transform="translate(119.000000, 18.000000)"
                    >
                      <polygon
                        id="Rectangle-Copy-2"
                        opacity="0.305966332"
                        points="0 0 9.64285714 9.10714286 0 18.2142857"
                      />
                      <polygon
                        id="Rectangle-Copy-3"
                        points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials
