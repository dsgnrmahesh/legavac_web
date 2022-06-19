import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
import { getTestimonialDetailForHome } from "../config/api";
import ReviewSlideSingle from "../components/ReviewSlideSingle";

export default function ReviewsSlidesComponent() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    slide: "div",
    fade: false,
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          centerMode: true,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };
  useEffect(() => {
    bindData();
  }, []);
  const [reviews, setReview] = useState([]);
  async function bindData() {
    await getTestimonialDetailForHome()
      .then((response) => {
        setReview(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  const renderSlides =
    reviews.length > 0
      ? reviews.map((review, index) => (
        <ReviewSlideSingle review={review} key={index} />
      ))
      : "";
  if (reviews.length > 0) return (
    <>
      <section
        className="app__section app__section-bgImg"
        style={{
          backgroundImage: "url(images/parallax2.jpg)",
        }}
      >
        <Container fluid>
          <SectionTitle
            title="Kind Words From Happy Candidates"
            subTitle="What other people thought about the service provided by LegaVac"
          />
          <div className="app__reviews">
            <Slider {...settings}>
              {renderSlides}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
  else return <></>
}
