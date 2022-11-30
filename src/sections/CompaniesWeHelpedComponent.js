import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
import { getPostedJobFilterList } from "../config/api";

export default function CompaniesWeHelpedComponent() {
  // const [companyname, setCompanyName] = useState([]);
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
  const comnamefirst = [
    "/images/company/lexschool.jpeg",
    "/images/company/lexcare.jpeg",
    "/images/company/dhage-associates.jpeg",
    "/images/company/jusoculus.jpeg",
    "/images/company/ms-associates.jpeg",
  ];
  const comnamesecond = [
    "/images/company/piyushchobe.jpeg",
    "/images/company/lexschool.jpeg",
    "/images/company/lexcare.jpeg",
    "/images/company/dhage-associates.jpeg",
    "/images/company/jusoculus.jpeg",
  ];
  return (
    <>
      <section className="app__section border-bottom">
        <Container fluid>
          <SectionTitle
            title="Companies We've Helped"
            subTitle="Some of the companies we've helped recruit excellent applicants over the years."
          />
          <div className="app__compWeHelpd">
            {/* {companyname.map((item, index) => (
              <div className="app__comp-img" key={index}>
                <a href={"/jobs?cn="}>
                  <img src={item} alt="" style={{ maxHeight: 80 }} />
                </a>
              </div>
            ))} */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="app__compWeHelpd">
                {comnamefirst.map((item, index) => (
                  <div className="app__comp-img" key={index}>
                    <a href={"/jobs?cn="}>
                      <img src={item} alt="" style={{ maxHeight: 80 }} />
                    </a>
                  </div>
                ))}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="app__compWeHelpd">
                {comnamesecond.map((item, index) => (
                  <div className="app__comp-img" key={index}>
                    <a href={"/jobs?cn="}>
                      <img src={item} alt="" style={{ maxHeight: 80 }} />
                    </a>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
          </div>
          
        </Container>
      </section>
    </>
  );
}
