import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { Container, Col, Row, Card } from "react-bootstrap";
import FormHeader from "../layout/FormHeader";
import { ReactSession } from "react-client-session";
import {
  CandidateEmployment,
  getCandidateEmploymentDetailByID,
} from "../config/api";
import { Redirect } from "react-router-dom";
export default function EmploymentDetails({ match: { params } }) {
  let years = [];
  for (var i = new Date().getFullYear(); i >= 1970; i--) {
    years.push(i);
  }
  const renderYearsOptions = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));
  const [state, setState] = useState({
    CandidateemploymentID: "",
    CandidateID: "",
    Companyname: "",
    JobTitle: "",
    AnnualSalaryInLakh: "",
    AnnualSalaryInThousand: "",
    JoiningDateInY: "",
    JoiningDateInM: "",
    RelivingDateInY: "",
    RelivingDateInM: "",
    City: "",
    NoticePeriod: "",
  });
  const [redirect, setRedirect] = useState(false);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setState({ ...state, CandidateID: sessionStorage.getItem("CandidateID") });
    if (sessionStorage.getItem("CandidateID") !== "0") {
      CandidateEmploymentDetailByID();
    }
  }, []);
  async function CandidateEmploymentDetailByID() {
    await getCandidateEmploymentDetailByID(
      sessionStorage.getItem("CandidateID")
    )
      .then((response) => {
        if (response[0].length > 0) {
          setState(response[0][0]);
          //alert(response[0][0]);
          //ResetState();
          //setRedirect(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function handleButtonClick(e) {
    e.preventDefault();

    await CandidateEmployment(state)
      .then((response) => {
        //alert(response[0][0].ID);
        //ResetState();
        setRedirect(true);
      })
      .catch((error) => {
        alert(error);
      });
  }
  if (redirect) {
    window.location.href = "/auth/" + params.status + "/education-details";
    //return <Redirect to={ "/auth/" + params.status + "/education-details"}/>;
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
                  <FormHeader
                    status={params.status}
                    active="employment"
                    complete={{
                      personal: true,
                      employment: false,
                      education: false,
                    }}
                  />
                  <div className="formBody">
                    <Row>
                      <Col sm={12} md={12}>
                        <Row className="justify-content-center">
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Current Designation
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your job title"
                              className="frmInput mb-2"
                              autoComplete="off"
                              name="JobTitle"
                              onChange={handleChange}
                              value={state.JobTitle}
                            />
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Current Company
                            </label>
                            <input
                              type="text"
                              placeholder="Where you are currently working"
                              className="frmInput mb-2"
                              autoComplete="off"
                              name="Companyname"
                              onChange={handleChange}
                              value={state.Companyname}
                            />
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Annual Salary
                            </label>
                            <div className="d-flex mb-2 pb-1">
                              <div
                                className="d-flex align-items-center"
                                style={{ maxWidth: "50%", flex: "1 0 50%" }}
                              >
                                <input
                                  type="text"
                                  className="frmInput mb-0 text-end"
                                  style={{ width: 70, padding: 8 }}
                                  name="AnnualSalaryInLakh"
                                  onChange={handleChange}
                                  value={state.AnnualSalaryInLakh}
                                />
                                <p className="frmText mb-0 text-nowrap">
                                  (₹) Lakhs
                                </p>
                              </div>
                              <div
                                className="d-flex align-items-center"
                                style={{ maxWidth: "50%", flex: "1 0 50%" }}
                              >
                                <input
                                  type="text"
                                  className="frmInput mb-0 text-end"
                                  style={{ width: 70, padding: 8 }}
                                  name="AnnualSalaryInThousand"
                                  onChange={handleChange}
                                  value={state.AnnualSalaryInThousand}
                                />
                                <p className="frmText mb-0 text-nowrap">
                                  (₹) Thousand
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Joining Date
                            </label>
                            <div className="d-flex mb-2 pb-1">
                              <div
                                className="d-flex align-items-center"
                                style={{ maxWidth: "50%", flex: "1 0 50%" }}
                              >
                                <select
                                  className="frmInput w-auto mb-0"
                                  name="JoiningDateInY"
                                  onChange={handleChange}
                                  value={state.JoiningDateInY}
                                >
                                  <option>Select</option>
                                  {renderYearsOptions}
                                </select>
                                <p className="frmText mb-0 text-nowrap">
                                  Year(s)
                                </p>
                              </div>
                              <div
                                className="d-flex align-items-center"
                                style={{ maxWidth: "50%", flex: "1 0 50%" }}
                              >
                                <select
                                  className="frmInput w-auto mb-0"
                                  name="JoiningDateInM"
                                  onChange={handleChange}
                                  value={state.JoiningDateInM}
                                >
                                  <option value="0">Select</option>
                                  <option value="1">Jan</option>
                                  <option value="2">Feb</option>
                                  <option value="3">Mar</option>
                                  <option value="4">Apr</option>
                                  <option value="5">May</option>
                                  <option value="6">Jun</option>
                                  <option value="7">Jul</option>
                                  <option value="8">Aug</option>
                                  <option value="9">Sept</option>
                                  <option value="10">Oct</option>
                                  <option value="11">Nov</option>
                                  <option value="12">Dec</option>
                                </select>
                                <p className="frmText mb-0 text-nowrap">
                                  Month(s)
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Reliving Date
                            </label>
                            <div className="d-flex mb-2 pb-1">
                              <div
                                className="d-flex align-items-center"
                                style={{ maxWidth: "50%", flex: "1 0 50%" }}
                              >
                                <select
                                  className="frmInput w-auto mb-0"
                                  name="RelivingDateInY"
                                  onChange={handleChange}
                                  value={state.RelivingDateInY}
                                >
                                  <option>Select</option>
                                  {renderYearsOptions}
                                </select>
                                <p className="frmText mb-0 text-nowrap">
                                  Year(s)
                                </p>
                              </div>
                              <div
                                className="d-flex align-items-center"
                                style={{ maxWidth: "50%", flex: "1 0 50%" }}
                              >
                                <select
                                  className="frmInput w-auto mb-0"
                                  name="RelivingDateInM"
                                  onChange={handleChange}
                                  value={state.RelivingDateInM}
                                >
                                  <option value="0">Select</option>
                                  <option value="1">Jan</option>
                                  <option value="2">Feb</option>
                                  <option value="3">Mar</option>
                                  <option value="4">Apr</option>
                                  <option value="5">May</option>
                                  <option value="6">Jun</option>
                                  <option value="7">Jul</option>
                                  <option value="8">Aug</option>
                                  <option value="9">Sept</option>
                                  <option value="10">Oct</option>
                                  <option value="11">Nov</option>
                                  <option value="12">Dec</option>
                                </select>
                                <p className="frmText mb-0 text-nowrap">
                                  Month(s)
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Current City
                            </label>
                            <input
                              type="text"
                              placeholder="Your current city"
                              className="frmInput mb-2"
                              autoComplete="off"
                              name="City"
                              onChange={handleChange}
                              value={state.City}
                            />
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Duration of Notice Period
                            </label>
                            <select
                              className="frmInput mb-0"
                              name="NoticePeriod"
                              onChange={handleChange}
                              value={state.NoticePeriod}
                            >
                              <option>Select Duration of Notice Period</option>
                              <option>15 Days or less</option>
                              <option>1 Months</option>
                              <option>2 Months</option>
                              <option>3 Months</option>
                              <option>More than 3 Months</option>
                            </select>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div
                    className="formFooter pt-3 mt-4 border-top"
                    align="right"
                  >
                    <a
                      href={"/auth/" + params.status + "/personal-information"}
                      className="formButton theme2 outline"
                    >
                      <Icon path={mdiChevronLeft} />
                      <span>back</span>
                    </a>
                    <a
                      href=""
                      className="formButton theme"
                      onClick={handleButtonClick}
                    >
                      <span>submit &amp; next</span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
