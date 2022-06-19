import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecruterSearch from "../sections/RecruterSearch";
import RecrutersSearchResults from "../sections/RecrutersSearchResults";

export default function Recruters() {
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5">
        <Container>
          <Row>
            <Col sm={12} md={11}>
              <div className="app__search">
                <RecruterSearch />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="py-3"></div>
        <RecrutersSearchResults />
      </section>
    </>
  );
}
