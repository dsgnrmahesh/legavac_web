import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
import { getPostedJobFilterList } from "../config/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick-theme.css";

export default function CompaniesWeHelpedComponent() {
  const [companyname, setCompanyName] = useState([]);
  const [imgCount, setImgCount] = useState(0);
  const [jobtid, setJobtid] = useState(0);
  // useEffect(() => {
  //   BindFilterData();
  // }, [])
  // async function BindFilterData() {
  //   await getPostedJobFilterList({ JobTitleId: jobtid })
  //     .then((response) => {
  //       setCompanyName(response[3]);
  //     }).catch((error) => {
  //       alert(error);
  //     });
  // }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const companyname = [
  //   "/images/company/lexschool.jpeg",
  //   "/images/company/lexcare.jpeg",
  //   "/images/company/dhage-associates.jpeg",
  //   "/images/company/jusoculus.jpeg",
  //   "/images/company/ms-associates.jpeg",
  //   "/images/company/piyushchobe.jpeg",
  // ];

  const settings = {
    className: "",
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}, `);
    },
  };
  return (
    <>
      <section className="app__section border-bottom">
        <Container>
          <SectionTitle
            title="Companies We've Helped"
            subTitle="Some of the companies we've helped recruit excellent applicants over the years."
          />
          {/* <div className="app__compWeHelpd">
            {companyname.map((item, index) => (
              <div className="app__comp-img" key={index}>
                <a href={"/jobs?cn="}>
                  <img src={item.logo} alt="" style={{ maxHeight: 80 }} />
                </a>
              </div>
            ))}
          </div> */}
          <Marquee direction-scroll speed={100} delay={5}>
            {/* <Slider {...settings}> */}
            <div>
              <img src="/images/company/Abv-Company-Logo.jpg" alt="" />
            </div>
            <div>
              <img src="/images/company/Haribhakti-Logo.jpg" alt="" />
            </div>
            <div>
              <img src="/images/company/Unison-Logo.jpg" alt="" />
            </div>
            <div>
              <img src="/images/company/jusoculus.jpeg" alt="" />
            </div>
            <div>
              <img src="/images/company/conneqtcorp.jpg" alt="" />
            </div>
            <div>
              <img src="/images/company/taxpert Logo.jpg" alt="" />
            </div>
            <div>
              <img src="/images/company/supersystems logo.jpg" alt="" />
            </div>
          </Marquee>
        </Container>
      </section>
    </>
  );
}
