import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { CandidateEmployment, getCandidateEmploymentDetailByID } from "../config/api";
export default function EmploymentDetails() {
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
  const [show, setShow] = useState(true);
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
    await getCandidateEmploymentDetailByID(sessionStorage.getItem("CandidateID"))
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
  let years = [];
  for (var i = new Date().getFullYear(); i >= 1970; i--) {
    years.push(i);
  }
  const renderYearsOptions = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));
  function updatedata() {
    setShow(false);
  }
  async function handleButtonClick(e) {
    e.preventDefault();

    await CandidateEmployment(state)
      .then((response) => {
        setShow(true);
        alert("Upadated Successfully");
        //ResetState();
        //setRedirect(true);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <div className="profileBoxDetails">
        <div className="profileBoxDetailInner">
          <div className="profileForm">
            <Row>
              <Col sm={12} md={12}>
                <Row className="justify-content-between">
                  <Col xs={12} md={5}>
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
                      disabled={show}
                    />
                  </Col>
                  <Col xs={12} md={5}>
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
                      disabled={show}
                    />
                  </Col>
                  <Col xs={12} md={6}>
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
                          style={{ width: 100 }}
                          name="AnnualSalaryInLakh"
                          onChange={handleChange}
                          value={state.AnnualSalaryInLakh}
                          disabled={show}
                        />
                        <p className="frmText mb-0 text-nowrap">(₹) Lakhs</p>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ maxWidth: "50%", flex: "1 0 50%" }}
                      >
                        <input
                          type="text"
                          className="frmInput mb-0 text-end"
                          style={{ width: 100 }}
                          name="AnnualSalaryInThousand"
                          onChange={handleChange}
                          value={state.AnnualSalaryInThousand}
                          disabled={show}
                        />
                        <p className="frmText mb-0 text-nowrap">(₹) Thousand</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={5}>
                    <label className="frmLabel text-start mb-1 float-none">
                      Joining Date
                    </label>
                    <div className="d-flex mb-2 pb-1">
                      <div
                        className="d-flex align-items-center"
                        style={{ maxWidth: "50%", flex: "1 0 50%" }}
                        disabled={show}
                      >
                        <select
                          className="frmInput w-auto mb-0"
                          name="JoiningDateInY"
                          onChange={handleChange}
                          value={state.JoiningDateInY}
                          disabled={show}
                        >
                          <option>Select</option>
                          {renderYearsOptions}
                        </select>
                        <p className="frmText mb-0 text-nowrap">Year(s)</p>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ maxWidth: "50%", flex: "1 0 50%" }}
                        disabled={show}
                      >
                        <select
                          className="frmInput w-auto mb-0"
                          name="JoiningDateInM"
                          onChange={handleChange}
                          value={state.JoiningDateInM}
                          disabled={show}
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
                        <p className="frmText mb-0 text-nowrap">Month(s)</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={5}>
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
                          disabled={show}>
                          <option>Select</option>
                          {renderYearsOptions}
                        </select>
                        <p className="frmText mb-0 text-nowrap">Year(s)</p>
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
                          disabled={show}
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
                        <p className="frmText mb-0 text-nowrap">Month(s)</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={5}>
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
                      disabled={show}
                    />
                  </Col>
                  <Col xs={12} md={5}>
                    <label className="frmLabel text-start mb-1 float-none">
                      Duration of Notice Period
                    </label>
                    <select
                      className="frmInput mb-0"
                      disabled={show}
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
              <Col sm={12} md={12}>
                <div className="text-end pt-3">
                  {show ?
                    <button onClick={() => updatedata()} className="btn btn-success px-4">Edit</button>
                    :
                    <button onClick={handleButtonClick} className="btn btn-success">Update</button>
                  }
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
