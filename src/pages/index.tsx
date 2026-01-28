import { generateNextSeo } from "next-seo/pages";
import Head from "next/head";
import { address, email, tel } from "@/constant";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import 'swiper/css/pagination';

const slides = [
  {
    title: "Inspection toiture",
    subtitle: "Inspection",
    src: "/roof/images/inspection.jpg",
    alt: "Inspection toiture image",
    icon: "flaticon-roof-4",
  },
  {
    title: "Revêtement toiture",
    subtitle: "Revêtement",
    src: "/roof/images/roof_window.jpg",
    alt: "Revêtement toiture image",
    icon: "flaticon-roof",
  },
  {
    title: "Remplacement toiture",
    subtitle: "Remplacement",
    src: "/roof/images/roof_repare.jpg",
    alt: "Remplacement toiture image",
    icon: "flaticon-roof-1",
  },
  {
    title: "Isolation toiture",
    subtitle: "Isolation",
    src: "/roof/img/slider/slide1-4.jpg",
    alt: "Isolation toiture image",
    icon: "flaticon-roof-3",
  },
  {
    title: "Gouttière",
    subtitle: "Gouttière",
    src: "/roof/img/slider/slide1-5.jpg",
    alt: "Gouttière image",
    icon: "flaticon-roof-2",
  },
  {
    title: "Réparation toiture",
    subtitle: "Réparation",
    src: "/roof/img/slider/slide1-6.jpg",
    alt: "Réparation toiture image",
    icon: "flaticon-broken-house",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Page d'accueil",
          description: "Bienvenue sur notre site",
          canonical: "https://exemple.com",
          openGraph: {
            url: "https://exemple.com",
            title: "Page d'accueil",
            description: "Bienvenue sur notre site",
            images: [{ url: "/image.jpg" }],
          },
        })}
      </Head>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination]}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const item = slides[index];
            return `<div class="nav-item ${className}">
                  <div class="item-icon">
                    <i class="${item.icon}"></i>
                  </div>
                  <h4 class="item-title ">${item.subtitle}</h4>
                </div>`;
          },
        }}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.title} >
            <div className="item-img">
              <img src={item.src} alt={item.alt} />
              <div className="item-content">
                <div className="big-text">{item.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <section className="slick-slider-wrap-layout1">
        <div className="slick-slider-layout1">
          <Slider
            ref={(slider) => (sliderRef1.current = slider)}
            className="slick-carousel slick-content"
            {...{
              slidesToShow: 1,
              slidesToShowTab: 1,
              slidesToShowMobile: 1,
              slidesToShowMobiles: 1,
              slidesToScroll: 1,
              speed: 1000,
              autoplaySpeed: 2000,
              dots: false,
              arrows: false,
              lazyLoad: "progressive",
              pauseOnHover: true,
              autoplay: true,
              centerMode: true,
              adaptiveHeight: false,
              rtl: false,
              asNavFor: nav2,
            }}
          >
            {/* <div
            className="slick-carousel slick-content"
            data-slick='{
                    "slidesToShow": 1,
                    "slidesToShowTab": 1,
                    "slidesToShowMobile": 1,
                    "slidesToShowMobiles": 1,
                    "slidesToScroll": 1,
                    "speed": 1000,
                    "autoplaySpeed": 2000,
                    "dots": false,
                    "arrows": false,
                    "lazyLoad": "progressive",
                    "pauseOnHover": true,
                    "autoplay": true,
                    "centerMode": true,
                    "adaptiveHeight": false,
                    "rtl": false,
                    "asNavFor": ".slick-nav"
                    }'
          >
            <div className="slick-slider">
              <div className="item-img">
                <img src="/images/inspection.jpg" alt="slide" />
                <div className="item-content">
                  <div className="big-text">Inspection toiture</div>
                </div>
              </div>
            </div>
            <div className="slick-slider">
              <div className="item-img">
                <img src="/images/roof_window.jpg" alt="slide" />
                <div className="item-content">
                  <div className="big-text">Revêtement toiture</div>
                </div>
              </div>
            </div>
            <div className="slick-slider">
              <div className="item-img">
                <img src="/images/roof_repare.jpg" alt="slide" />
                <div className="item-content">
                  <div className="big-text">Remplacement toiture</div>
                </div>
              </div>
            </div>
            <div className="slick-slider">
              <div className="item-img">
                <img src="/img/slider/slide1-4.jpg" alt="slide" />
                <div className="item-content">
                  <div className="big-text">Isolation toiture</div>
                </div>
              </div>
            </div>
            <div className="slick-slider">
              <div className="item-img">
                <img src="/img/slider/slide1-5.jpg" alt="slide" />
                <div className="item-content">
                  <div className="big-text">Gouttière</div>
                </div>
              </div>
            </div>
            <div className="slick-slider">
              <div className="item-img">
                <img src="/img/slider/slide1-6.jpg" alt="slide" />
                <div className="item-content">
                  <div className="big-text">Réparation toiture</div>
                </div>
              </div>
            </div>
            {/* </div>
          </Slider>
          <div className="slick-nav-wrap">
            <div className="container">
              <Slider
                className="slick-carousel slick-nav"
                asNavFor={nav1}
                ref={(slider) => (sliderRef2.current = slider)}
                {...{
                  slidesToShow: 6,
                  slidesToShowTab: 5,
                  slidesToShowMobile: 3,
                  slidesToShowMobiles: 2,
                  slidesToScroll: 1,
                  speed: 1000,
                  autoplaySpeed: 2000,
                  dots: false,
                  arrows: false,
                  lazyLoad: "progressive",
                  pauseOnHover: true,
                  autoplay: true,
                  focusOnSelect: true,
                  centerMode: false,
                  adaptiveHeight: false,
                  rtl: false,
                  asNavFor: ".slick-content",
                  prevArrow:
                    '<span class="slick-prev slick-navigation"><i class="flaticon-back"></i></span>',
                  nextArrow:
                    '<span class="slick-next slick-navigation"><i class="flaticon-next"></i></span>',
                }}
              ></Slider>
              {/* <div
                className="slick-carousel slick-nav"
                data-slick='{
                            "slidesToShow": 6,
                            "slidesToShowTab": 5,
                            "slidesToShowMobile": 3,
                            "slidesToShowMobiles": 2,
                            "slidesToScroll": 1,
                            "speed": 1000,
                            "autoplaySpeed": 2000,
                            "dots": false,
                            "arrows": false,
                            "lazyLoad": "progressive",
                            "pauseOnHover": true,
                            "autoplay": true,
                            "focusOnSelect": true,
                            "centerMode": false,
                            "adaptiveHeight": false,
                            "rtl": false,
                            "asNavFor": ".slick-content",
                            "prevArrow": "<span class=\"slick-prev slick-navigation\"><i class=\"flaticon-back\"></i></span>",
                            "nextArrow": "<span class=\"slick-next slick-navigation\"><i class=\"flaticon-next\"></i></span>"
                            }'
              >
                <div className="nav-item">
                  <div className="item-icon">
                    <i className="flaticon-roof-4"></i>
                  </div>
                  <h4 className="item-title ">Inspection</h4>
                </div>
                <div className="nav-item">
                  <div className="item-icon">
                    <i className="flaticon-roof"></i>
                  </div>
                  <h4 className="item-title">Revêtement</h4>
                </div>
                <div className="nav-item">
                  <div className="item-icon">
                    <i className="flaticon-roof-1"></i>
                  </div>
                  <h4 className="item-title">Remplacement</h4>
                </div>
                <div className="nav-item">
                  <div className="item-icon">
                    <i className="flaticon-roof-3"></i>
                  </div>
                  <h4 className="item-title">Isolation</h4>
                </div>
                <div className="nav-item">
                  <div className="item-icon">
                    <i className="flaticon-roof-2"></i>
                  </div>
                  <h4 className="item-title">Gouttière</h4>
                </div>
                <div className="nav-item">
                  <div className="item-icon">
                    <i className="flaticon-broken-house"></i>
                  </div>
                  <h4 className="item-title">Réparation</h4>
                </div>
              </div>
            </div>
          {/* </div>
        </div>
      </section> */}
      <section className="about-wrap-layout2 bg-shape-2">
        <div className="container">
          <div className="row">
            <div className="about-box-layout2">
              <div className="item-subtitle">Qui sommes nous ?</div>
              <h2 className="item-title">
                The Right Choice for Quality Home Improvement for More Than 70
                Years
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elitwesed
                diam nonummconsectetuer adipiscing euismod tinciduntrem ipsum
                dolor sit amet, consecteturm ipsum dolor.Dorem ipsum dolor sit
                amet, consectetuer adipiscing elitwesed diam nonummconsectetuer
                adipiscing euismod tinciduntrem ipsum dolor sit amet,
                consecteturm ipsum dolor.Dorem ipsum dolor sit amet,
                consectetuer adipiscing elitwesed diam nonummer.
              </p>
              <div className="item-award">
                <div className="row">
                  <div className="col-4">
                    <div className="item-img">
                      <img src="/img/about/award.png" alt="Photo" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="item-img">
                      <img src="/img/about/award1.png" alt="Photo" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="item-img">
                      <img src="/img/about/award2.png" alt="Photo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-wrap-layout3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-box-layout4">
                <div className="about-box-img">
                  <div className="item-img">
                    <img src="/img/about/about1.jpg" alt="about" />
                  </div>
                  <div className="sl-number">01</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-box-layout4">
                <div className="about-box-content">
                  <h2 className="item-title">
                    Une entreprise expérimentée en solutions de toiture
                  </h2>
                  <div className="item-subtitle">
                    With More Than Half a Century of Experience And thousands of
                    Innovative
                  </div>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet they consec tetur, adipisci velit, sed quia non numquam
                    eius modi tempora incidunt ut labore et dolore magnam
                    aliquam quaerat voluptatemo qui quia dolor sit amedipisci
                    develit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="about-box-layout5">
                <div className="about-box-img">
                  <div className="item-img">
                    <img src="/img/about/about2.jpg" alt="about" />
                    <div className="item-icon">
                      <a
                        className="play-btn popup-youtube"
                        href="https://www.youtube.com/watch?v=1iIZeIy7TqM"
                      >
                        <i className="flaticon-play-arrow"></i>
                      </a>
                    </div>
                  </div>
                  <div className="sl-number">02</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="about-box-layout5">
                <div className="about-box-content">
                  <h2 className="item-title">
                    We Strive To Be a Level Above The Competition Work
                  </h2>
                  <div className="item-subtitle">
                    With More Than Half a Century of Experience And thousands of
                    Innovative
                  </div>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet they consec tetur, adipisci velit, sed quia non numquam
                    eius modi tempora incidunt ut labore et dolore magnam
                    aliquam quaerat voluptatemo qui quia dolor sit amedipisci
                    develit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="service-wrap-layout1 bg-accent bg-common"
        data-bg-image="img/figure/banner-shape1.png"
      >
        <div className="container">
          <div className="heading-layout1 heading-light">
            <div className="item-subtitle">Behind The Story</div>
            <h2>Our Working Process</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img src="/img/service/service1.jpg" alt="service" />
                  <div className="sl-number">01</div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-service1.html">Schedule Estimate</a>
                  </h3>
                  <p>Horem ipsum dolor sitter amete consectetuer adiplit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img src="/img/service/service2.jpg" alt="service" />
                  <div className="sl-number">02</div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-service1.html">Pick Material Color</a>
                  </h3>
                  <p>Horem ipsum dolor sitter amete consectetuer adiplit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img src="/img/service/service3.jpg" alt="service" />
                  <div className="sl-number">03</div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-service1.html">Install New Roof</a>
                  </h3>
                  <p>Horem ipsum dolor sitter amete consectetuer adiplit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img src="/img/service/service4.jpg" alt="service" />
                  <div className="sl-number">04</div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-service1.html">Enjoy Peace Of Mind</a>
                  </h3>
                  <p>Horem ipsum dolor sitter amete consectetuer adiplit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="project-wrap-layout1 bg-common"
        data-bg-image="img/project/project-bg.jpg"
      >
        <div className="container">
          <div className="heading-layout1">
            <div className="item-subtitle">Working Projects</div>
            <h2>Our Latest Projects</h2>
          </div>
          <div className="row gutters-15">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-box-layout1">
                <div className="item-img">
                  <img src="/img/project/project1.jpg" alt="project" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-project1.html">Residential Roofing</a>
                  </h3>
                  <a href="single-project1.html" className="item-btn">
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-box-layout1">
                <div className="item-img">
                  <img src="/img/project/project2.jpg" alt="project" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-project1.html">Residential Roofing</a>
                  </h3>
                  <a href="single-project1.html" className="item-btn">
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-box-layout1">
                <div className="item-img">
                  <img src="/img/project/project3.jpg" alt="project" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-project1.html">Residential Roofing</a>
                  </h3>
                  <a href="single-project1.html" className="item-btn">
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-box-layout1">
                <div className="item-img">
                  <img src="/img/project/project4.jpg" alt="project" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-project1.html">Residential Roofing</a>
                  </h3>
                  <a href="single-project1.html" className="item-btn">
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-box-layout1">
                <div className="item-img">
                  <img src="/img/project/project5.jpg" alt="project" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-project1.html">Residential Roofing</a>
                  </h3>
                  <a href="single-project1.html" className="item-btn">
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-box-layout1">
                <div className="item-img">
                  <img src="/img/project/project6.jpg" alt="project" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-project1.html">Residential Roofing</a>
                  </h3>
                  <a href="single-project1.html" className="item-btn">
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-wrap-layout1">
        <div className="about-box-layout1">
          <div className="about-box-content">
            <div className="item-header">
              <div className="experience-year">25</div>
              <ul className="item-title">
                <li>Years Of</li>
                <li>
                  Working <span>Experience</span>
                </li>
              </ul>
            </div>
            <p>
              Rake a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting emaining
              essentially unchanged.
            </p>
            <a href="#" className="btn-fill-xl bg-textprimary text-primarytext">
              READ MORE<i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section
        className="progress-wrap-layout1 bg-common"
        data-bg-image="img/figure/banner-shape1.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="progress-box-layout1">
                <div className="progress-content">
                  <div className="item-icon">
                    <i className="flaticon-apartment"></i>
                  </div>
                  <div className="item-content">
                    <div className="counter count-number" data-num="1050">
                      1050
                    </div>
                    <div className="count-title">Residential Projects Done</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="progress-box-layout1">
                <div className="progress-content">
                  <div className="item-icon">
                    <i className="flaticon-industry"></i>
                  </div>
                  <div className="item-content">
                    <div className="counter count-number" data-num="1250">
                      1250
                    </div>
                    <div className="count-title">Commertial Projects</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="progress-box-layout1">
                <div className="progress-content">
                  <div className="item-icon">
                    <i className="flaticon-helmet"></i>
                  </div>
                  <div className="item-content">
                    <div className="counter count-number" data-num="650">
                      650
                    </div>
                    <div className="count-title">Hard Working People</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="progress-box-layout1">
                <div className="progress-content">
                  <div className="item-icon">
                    <i className="flaticon-happy"></i>
                  </div>
                  <div className="item-content">
                    <div className="counter count-number" data-num="3659">
                      3659
                    </div>
                    <div className="count-title">Our Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-wrap-layout1">
        <div
          id="googleMap"
          className="google-map"
          style={{ width: "100%", height: 360, borderRadius: 0 }}
        ></div>
        <div className="contact-box-layout1">
          <h3 className="item-title">Contact Information</h3>
          <div className="media">
            <div className="item-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="media-body space-md">
              <ul>
                <li>{address.address}</li>
                <li>
                  {address.zipCode} {address.city}
                </li>
              </ul>
            </div>
          </div>
          <div className="media">
            <div className="item-icon">
              <i className="fas fa-phone-volume"></i>
            </div>
            <div className="media-body space-md">
              <ul>
                <li>{tel}</li>
              </ul>
            </div>
          </div>
          <div className="media">
            <div className="item-icon">
              <i className="far fa-envelope"></i>
            </div>
            <div className="media-body space-md">
              <ul>
                <li>{email}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
