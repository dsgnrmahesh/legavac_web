import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { UpdateCandidateLooking, getCandidateDetailByID } from "../config/api";

export default function WhatAreYouCurrentlyLookingFor() {
  const [status, setStatus] = useState({
    CandidateID: sessionStorage.getItem("CandidateID"),
    LookingFor: "",
  });
  const [redirect, setRedirect] = useState(false);
  const handleChage = (e) => {
    setStatus({ ...status, LookingFor: e.target.value });
  };
  useEffect(() => {
    setStatus({
      ...status,
      CandidateID: sessionStorage.getItem("CandidateID"),
    });
    if (sessionStorage.getItem("CandidateID") !== "0") {
      CandidateDetailByID();
    }
  }, []);
  async function handleButtonClick(e) {
    e.preventDefault();

    await UpdateCandidateLooking(status)
      .then((response) => {
        if (response[0].length > 0) {
          //alert(response[0][0].ID);

          setRedirect(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function CandidateDetailByID() {
    await getCandidateDetailByID(sessionStorage.getItem("CandidateID"))
      .then((response) => {
        if (response[0].length > 0) {
          setStatus({
            CandidateID: response[0][0].CandidateID,
            LookingFor: response[0][0].LookingFor,
          });
          //alert(response[0][0]);
          //ResetState();
          //setRedirect(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  //console.log(status);
  if (redirect) {
    window.location.href =
      "/auth/" + status.LookingFor + "/personal-information";
    //return <Redirect to={"/auth/"+ status.LookingFor + "/personal-information"}/>
  }
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section form-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={10} lg={8}>
              <Card>
                <Card.Body className="px-4 py-4">
                  <div className="formBody pt-3">
                    <h4 align="center" className="formQue">
                      What are you currently looking for?
                    </h4>
                    <ul className="formSelectionList">
                      <li>
                        <input
                          type="radio"
                          name="workStatus"
                          id="workStatus_1"
                          value="intern"
                          checked={status.LookingFor === "intern"}
                          onChange={handleChage}
                        />
                        <img src="/images/user-student.png" alt="" />
                        <label htmlFor="workStatus_1">
                          <span>Internships</span>
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="workStatus"
                          id="workStatus_2"
                          value="professional"
                          checked={status.LookingFor === "professional"}
                          onChange={handleChage}
                        />
                        <img src="/images/user-exprienced.png" alt="" />
                        <label htmlFor="workStatus_2">
                          <span>Fresher jobs</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  {status === "" ? (
                    ""
                  ) : (
                    <div className="formFooter" align="right">
                      <button
                        className="app__button text-capitalize"
                        onClick={handleButtonClick}
                      >
                        <span>submit &amp; next</span>
                      </button>
                      {/* <a
                        href={"/auth/" + status + "/personal-information"}
                        className="formButton theme"
                      >
                        <span>submit &amp; next</span>
                      </a> */}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
