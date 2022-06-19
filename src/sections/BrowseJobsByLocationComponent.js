import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
import { getPostedJobFilterList } from "../config/api";

export default function BrowseJobsByLocationComponent() {
  const [city, setCity] = useState([]);
  const [jobtid, setJobtid] = useState(0);
  useEffect(() => {
    BindFilterData();
  }, [])
  async function BindFilterData() {
    await getPostedJobFilterList({ JobTitleId: jobtid })
      .then((response) => {
        setCity(response[2]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <section className="app__section border-bottom">
        <Container fluid>
          <SectionTitle
            title="Browse Jobs by Locations"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Row className="app__browseJobsLocation justify-content-center">
            {
              city.map((item, index) => {
                let _item = null;
                if (index < 6) {
                  _item = (<Col sm={6} md={2} className="app__browseJobsLocation-item" key={index}>
                    <a href={"/jobs?c=" + item.name}>
                      <img src="images/resource/gate.png" alt="" />
                      <span>Jobs in {item.name}</span>
                    </a>
                  </Col>);
                } else {
                  return true;
                }
                return _item;
              })
            }
            {/* <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Pune</span>
              </a>
            </Col>
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Kolkata</span>
              </a>
            </Col>
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Ahmedabad</span>
              </a>
            </Col>
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Bengaluru</span>
              </a>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}
