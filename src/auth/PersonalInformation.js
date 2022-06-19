import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiTextBoxPlusOutline } from "@mdi/js";
import { Container, Col, Row, Card } from "react-bootstrap";
import FormHeader from "../layout/FormHeader";
import { ReactSession } from "react-client-session";
import {
  UpdateCandidate,
  UploadResume,
  getCandidateDetailByID,
} from "../config/api";
import { checkmobile, checkonlyletterandcharacter } from "../config/validate";
import { height } from "dom-helpers";

export default function PersonalInformation({ match: { params } }) {
  const [state, setState] = useState({
    CandidateID: "0",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Mobile: "",
    EmailID: "",
    Password: "",
    Dateofbirth: "",
    GenderID: "",
    Gender: "",
    Hometown: "",
    Pincode: "",
    WorkpermitforUSA: "",
    Workpermitforothercountry: "",
    CommunityID: "",
    Resumepath: "",
    WorkExpInY: "0",
    WorkExpInM: "0",
    errors: [],
  });
  const [termCondition, setTermCondition] = useState(0);
  const [tmc_flag, set_tmc_flag] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [submitAction, setSubmitAction] = useState(true);
  const [file_upload_progress, set_file_upload_progress] = useState(0);
  const years = [];
  for (var i = 0; i <= 31; i++) {
    if (i === 0) years.push("select");
    else years.push(i - 1);
  }
  const handleChange = (e) => {
    let errors = {};
    if (e.target.name === "Mobile") {
      if (!checkmobile(e.target.value)) {
        errors["Mobile"] = "Enter Valid Mobile";
      } else {
        errors["Mobile"] = "";
      }
      setState({ ...state, [e.target.name]: e.target.value, errors: errors });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  const handleChangechk = (e) => {
    if (e.target.checked) {
      setTermCondition(1);
      set_tmc_flag(true);
    } else {
      setTermCondition(0);
      set_tmc_flag(false);
    }
  };
  useEffect(() => {
    setState({ ...state, CandidateID: sessionStorage.getItem("CandidateID") });
    if (sessionStorage.getItem("CandidateID") !== "0") {
      CandidateDetailByID();
    }
  }, []);
  async function handleButtonClick(e) {
    e.preventDefault();
    if (validate()) {
      if (termCondition === 1) {
        await UpdateCandidate(state)
          .then((response) => {
            if (response[0].length > 0) {
              //alert(response[0][0].ID);
              //ResetState();
              setRedirect(true);
            }
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        set_tmc_flag(false);
      }
    }
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.FirstName) {
      IsValid = false;
      errors["FirstName"] = "First Name is Required";
    } else {
      if (!checkonlyletterandcharacter(state.FirstName)) {
        IsValid = false;
        errors["Title"] = "Only letter and character allowed";
      }
    }
    if (!state.LastName) {
      IsValid = false;
      errors["LastName"] = "Last Name is Required";
    } else {
      if (!checkonlyletterandcharacter(state.LastName)) {
        IsValid = false;
        errors["Title"] = "Only letter and character allowed";
      }
    }
    if (!state.Mobile) {
      IsValid = false;
      errors["Mobile"] = "Mobile is Required";
    } else {
      if (!checkmobile(state.Mobile)) {
        IsValid = false;
        errors["Mobile"] = "Enter correct mobile";
      }
    }
    if (!state.Resumepath) {
      IsValid = false;
      errors["Resumepath"] = "Resume is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }
  async function CandidateDetailByID() {
    await getCandidateDetailByID(sessionStorage.getItem("CandidateID"))
      .then((response) => {
        if (response[0].length > 0) {
          setState(response[0][0]);
        }
        //alert(response[0][0]);
        //ResetState();
        //setRedirect(true);
      })
      .catch((error) => {
        alert(error);
      });
  }
  if (redirect) {
    if (params.status === "intern") {
      window.location.href = "/auth/" + params.status + "/education-details";
      //return <Redirect to={ "/auth/" + params.status + "/education-details"}/>;
    } else {
      window.location.href = "/auth/" + params.status + "/employment-details";
      //return <Redirect to={ "/auth/" + params.status + "/employment-details"}/>;
    }
    // params.status === "intern"
    //                       ?(<> return <Redirect to={"/auth/" + params.status + "/education-details"}/></>)
    //                       :(<> return <Redirect to={ "/auth/" + params.status + "/employment-details"}/></>)
  }
  const renderYearsOptions = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));
  async function handlechangefile(e) {
    setState({
      ...state,
      [e.target.name]: `LGVC_${sessionStorage.getItem("CandidateID")}_${
        state.FirstName
      }_${state.LastName}.${e.target.files[0].name.split(".")[1]}`,
    });
    const formData = new FormData();
    formData.append(
      "file",
      e.target.files[0],
      sessionStorage.getItem("CandidateID") +
        "_" +
        e.target.files[0].name.split(".")[0] +
        "." +
        e.target.files[0].name.split(".")[1]
    );
    const config = {
      onUploadProgress: function (progressEvent) {
        set_file_upload_progress(
          progressEvent.status
            ? progressEvent.status
            : Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
      },
    };
    await UploadResume(formData, config)
      .then((response) => {
        if (response.success) {
          //alert("Resume Uploaded Successfully");
          setSubmitAction(false);
        } else {
          alert("Try Again...");
        }
        //alert(response.success);
      })
      .catch((error) => {
        alert(error);
      });
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
                    active="personal"
                    complete={{
                      personal: false,
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
                              First Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your first name"
                              className="frmInput mb-2"
                              autoComplete="off"
                              name="FirstName"
                              value={state.FirstName}
                              onChange={handleChange}
                            />
                            {state.errors ? (
                              <div className="invalid-feedback">
                                {state.errors.FirstName}
                              </div>
                            ) : (
                              ""
                            )}
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Last Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your last name"
                              className="frmInput mb-2"
                              autoComplete="off"
                              name="LastName"
                              value={state.LastName}
                              onChange={handleChange}
                            />
                            {state.errors ? (
                              <div className="invalid-feedback">
                                {state.errors.LastName}
                              </div>
                            ) : (
                              ""
                            )}
                          </Col>
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Mobile Number
                            </label>
                            <div className="d-flex">
                              <input
                                type="text"
                                defaultValue="+91"
                                className="frmInput mb-2 me-3"
                                disabled
                                autoComplete="off"
                                style={{
                                  width: "70px",
                                  textAlign: "right",
                                  cursor: "not-allowed",
                                }}
                              />
                              <input
                                type="text"
                                name="Mobile"
                                placeholder="Enter Mobile Number"
                                className="frmInput mb-2"
                                onChange={handleChange}
                                maxLength="10"
                                value={state.Mobile}
                                autoComplete="off"
                              />
                            </div>
                            {state.errors ? (
                              <div className="invalid-feedback">
                                {state.errors.Mobile}
                              </div>
                            ) : (
                              ""
                            )}
                          </Col>
                          {params.status === "professional" ? (
                            <Col xs={12} md={7}>
                              <label className="frmLabel text-start mb-1 float-none">
                                Total Work Experience
                              </label>
                              <div className="d-flex mb-2 pb-1">
                                <div className="d-flex align-items-center me-4">
                                  <select
                                    name="WorkExpInY"
                                    className="frmInput w-auto mb-0"
                                    value={state.WorkExpInY}
                                    onChange={handleChange}
                                  >
                                    {renderYearsOptions}
                                  </select>
                                  <p className="frmText mb-0">Year(s)</p>
                                </div>
                                {state.errors ? (
                                  <div className="invalid-feedback">
                                    {state.errors.WorkExpInY}
                                  </div>
                                ) : (
                                  ""
                                )}
                                <div className="d-flex align-items-center me-4">
                                  <select
                                    name="WorkExpInM"
                                    className="frmInput w-auto mb-0"
                                    value={state.WorkExpInM}
                                    onChange={handleChange}
                                  >
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                  </select>
                                  <p className="frmText mb-0">Month(s)</p>
                                </div>
                                {state.errors ? (
                                  <div className="invalid-feedback">
                                    {state.errors.WorkExpInM}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Col>
                          ) : (
                            ""
                          )}
                          <Col xs={12} md={7}>
                            <label className="frmLabel text-start mb-1 float-none">
                              Upload Resume
                            </label>
                            {file_upload_progress ? (
                              <div className="progress-div mb-3">
                                <div className="d-flex justify-content-between pb-2">
                                  <span
                                    style={{
                                      color:
                                        file_upload_progress < 0 &&
                                        file_upload_progress > 100
                                          ? "#ff9800"
                                          : "#4caf50",
                                    }}
                                  >
                                    {state.Resumepath}
                                  </span>
                                  <span
                                    style={{
                                      color: "#0d6efd",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {file_upload_progress}%
                                  </span>
                                </div>
                                <div
                                  class="progress rounded"
                                  style={{ height: 3 }}
                                >
                                  <div
                                    class="progress-bar rounded"
                                    role="progressbar"
                                    style={{
                                      width: file_upload_progress + "%",
                                    }}
                                    aria-valuenow={file_upload_progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <div className="pt-2">
                                  <label
                                    htmlFor="uploadResume"
                                    style={{
                                      color: "#3f51b5",
                                      fontWeight: 500,
                                    }}
                                  >
                                    edit
                                  </label>
                                  <input
                                    type="file"
                                    id="uploadResume"
                                    name="Resumepath"
                                    accept=".doc,.pdf"
                                    style={{
                                      position: "absolute",
                                      left: "-99999999%",
                                    }}
                                    onChange={handlechangefile}
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="formFileBox">
                                <input
                                  type="file"
                                  id="uploadResume"
                                  name="Resumepath"
                                  accept=".doc,.pdf"
                                  onChange={handlechangefile}
                                />
                                <label htmlFor="uploadResume">
                                  <Icon path={mdiTextBoxPlusOutline} />
                                  <span>doc, docx, rtf, pdf - 2MB max</span>
                                  <b>upload resume</b>
                                </label>
                              </div>
                            )}
                            {state.errors ? (
                              <div className="invalid-feedback">
                                {state.errors.Resumepath}
                              </div>
                            ) : (
                              ""
                            )}
                          </Col>
                          <Col xs={12} md={7}>
                            <div className="formDeclare">
                              <input
                                type="checkbox"
                                name="termCondition"
                                id="termCondition"
                                onChange={handleChangechk}
                              />
                              <label
                                htmlFor="termCondition"
                                style={{ color: !tmc_flag ? "#dc3545" : "" }}
                              >
                                I agree to the Terms and Conditions and Privacy
                                Policy governing the use of{" "}
                                <span
                                  style={{ color: tmc_flag ? "#3f51b5" : "" }}
                                >
                                  legavac.com
                                </span>
                                .
                              </label>
                            </div>
                            {state.errors ? (
                              <div className="invalid-feedback">
                                {state.errors.termCondition}
                              </div>
                            ) : (
                              ""
                            )}
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
                      href={"/auth/what-are-you-currently-looking-for"}
                      className="formButton theme2 outline"
                    >
                      <Icon path={mdiChevronLeft} />
                      <span>back</span>
                    </a>
                    {submitAction ? (
                      <button className="formButton theme" disabled>
                        <span>submit &amp; next</span>
                      </button>
                    ) : (
                      <a
                        href=""
                        onClick={handleButtonClick}
                        className="formButton theme"
                      >
                        <span>submit &amp; next</span>
                      </a>
                    )}
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
