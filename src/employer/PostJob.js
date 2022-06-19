import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function PostJob() {
  return (
    <>
      <div className="app__spacer"></div>
      <section
        className="app__section form-section py-5"
        style={{ background: "#f7f7f7" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={7} lg={5}>
              <Card>
                <Card.Body className="px-4 py-4">
                  <Card.Title className="mb-4">
                    Let's create your account
                  </Card.Title>
                  <form autoComplete="off" className="login-form">
                    <div className="w-100">
                      <div className="form-group">
                        <label className="control-label">Company name</label>
                        <input
                          type="text"
                          name="CompanyName"
                          placeholder="Enter Company name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                          type="text"
                          name="Email"
                          placeholder="example@gmail.com"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="w-100">
                      <button className="app__button">
                        <span>Sign In</span>
                      </button>
                    </div>
                    <div className="w-100 text-center pt-4">
                      Already have an account?
                      <a
                        href="/employer/post-job"
                        className="link-small-bold text-decoration-none ms-2"
                      >
                        Sign In
                      </a>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
