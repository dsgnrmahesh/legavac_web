import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompanySearch from "../sections/CompanySearch";
import CompanySearchResults from "../sections/CompanySearchResults";
export default function Companies() {
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5">
        <Container>
          <Row>
            <Col sm={12} md={11}>
              <div className="app__search">
                <CompanySearch />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="py-3"></div>
        <CompanySearchResults />
      </section>
    </>
  );
}
