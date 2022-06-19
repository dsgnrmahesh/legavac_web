import React from "react";
import Icon from "@mdi/react";
import {
  mdiArrowUp,
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiMapMarkerOutline,
  mdiTwitter,
  mdiPhoneInTalkOutline,
  mdiEmailOutline,
} from "@mdi/js";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer className="app__footer">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={3} lg={4}>
              <div className="app__footer_widget">
                <a href="/" style={{ textDecoration: "none" }}>
                  <span className="logo">
                    <span>L</span>ega<span>V</span>ac
                  </span>
                </a>

                <div className="app__footer_social">
                  <a href="/" title="" className="fb">
                    <Icon path={mdiFacebook} />
                  </a>
                  <a href="/" title="" className="twtr">
                    <Icon path={mdiTwitter} />
                  </a>
                  <a href="/" title="" className="in">
                    <Icon path={mdiLinkedin} />
                  </a>
                  <a href="/" title="" className="insta">
                    <Icon path={mdiInstagram} />
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={4}>
              <div className="app__footer_widget">
                <h3 className="app__footer-title">Address</h3>
                <span>
                  <Icon path={mdiMapMarkerOutline} />
                  Kharghar, Maharashtra - 411002
                </span>
                <a href="tel:+91 9087 654 321">
                  <Icon path={mdiPhoneInTalkOutline} />
                  +91 9087 654 321
                </a>
                <a href="mailto:info@legavac.com">
                  <Icon path={mdiEmailOutline} />
                  info@legavac.com
                </a>
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={4}>
              <div className="app__footer_widget">
                <h3 className="app__footer-title">Other links</h3>
                <div className="app__footer-link_widgets">
                  <Row>
                    <Col sm={12} md={12}>
                      <a href="/" title="">
                        Privacy &amp; Security
                      </a>
                      <a href="/" title="">
                        Terms of Service
                      </a>
                      <a href="/company/about-us" title="">
                        About Us
                      </a>
                      <a href="/" title="" className="d-none">
                        Contact Us
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            {/* <Col xs={12} sm={12} md={4} lg={3}>
              <div className="app__footer_widget d-none">
                <div className="app__footer-download_widget">
                  <a href="/" title="">
                    <img src="/images/resource/dw1.png" alt="" />
                  </a>
                  <a href="/" title="">
                    <img src="/images/resource/dw2.png" alt="" />
                  </a>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
        <div className="app__footer_bottom-line">
          <span>
            © 2021{" "}
            <span style={{ color: "#9bb1d4", fontWeight: 500 }}>LegaVac</span>{" "}
            All rights reserved. Design &amp; Developed by
            <a
              href="https://dthrill.com"
              target="_blank"
              style={{
                color: "#9bb1d4",
                fontWeight: 500,
                marginLeft: 8,
                textDecoration: "none",
              }}
            >
              DThrill
            </a>
            .
          </span>
          <a href="#scrollup" className="scrollup" title="">
            <Icon path={mdiArrowUp} />
          </a>
        </div>
      </footer>
    </>
  );
}
