import React from "react";
import { Col, Row, Container } from "react-bootstrap";
export default function AboutCompany() {
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5 mb-5">
        <Container>
          <div className="about-title mb-5 text-center">
            <h2>About Us</h2>
            <div className="about-stitle">
              Welcome to{" "}
              <span
                style={{
                  fontFamily: '"Quicksand", serif',
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: 19,
                  color: "#eb8a00",
                }}
              >
                <span style={{ color: "#001ba1" }}>L</span>ega
                <span style={{ color: "#001ba1" }}>V</span>ac
              </span>
            </div>
          </div>
          <Row>
            <Col sm={12} md={6}>

            </Col>
            <Col sm={12} md={12}>
              <div className="about-content">
                <div className="about-image-block" style={{ float: 'left' }}>
                  <img
                    src="https://dthrill.com/images/resource/featured-image-3.jpg"
                    alt=""
                  />
                </div>
                <p style={{ textIndent: 30, fontSize: 17 }}>
                  LegaVac resources pvt ltd headquarter at Kharghar, Navi Mumbai. LegaVac.com is the top most innovative online job portal present in India. Founded in 2013 and converted into as a Private Limited Company since 2021.
                  We at LegaVac Job Fair bring potential and deserving candidates and top employers under one roof.
                </p>
                <p style={{ textIndent: 30, fontSize: 17 }}>
                  LegaVac connects Law students, Lawyers and CS and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced 2-way matching technology. LegaVac works closely to bridge the gap between talent & opportunities and offers end-to-end recruitment solutions. LegaVac is changing the way people think about work, and we're helping them actively improve their lives and their workforce performance with new technology, tools, and practices.
                </p>
                <p style={{ textIndent: 30, fontSize: 17 }}>
                  A LegaVac has a Purpose
                  for betterment for the bright future of the Law students and Lawyers and Company secretary making it easy for them to find a desirable career.
                </p>
                <p style={{ textIndent: 30, fontSize: 17 }}>
                  A LegaVac Vision
                  Create a bridge between Lawyers, Company Secretary and Corporates.
                </p>
                <p style={{ textIndent: 30, fontSize: 17 }}>A LegaVac mission
                  LegaVac creates and delivers the best-recruiting media, technologies, and platforms for connecting jobs and potential candidates. LegaVac strives every day to help our top employers hire and help people find job opportunities of their dreams.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
