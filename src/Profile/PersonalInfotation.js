import { mdiDownload } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { getCandidateDetailByID, UpdateCandidate, UploadResume } from "../config/api";
import { ReactSession } from "react-client-session";
import { checkmobile, checkonlyletterandcharacter } from "../config/validate";

export default function PersonalInfotation() {
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
  });
  const [show, setShow] = useState(true);
  const [file_upload_progress, set_file_upload_progress] = useState(0);
  useEffect(() => {
    setState({ ...state, CandidateID: sessionStorage.getItem("CandidateID") });
    setShow(true);
    if (sessionStorage.getItem("CandidateID") !== "0") {
      CandidateDetailByID();
    }
  }, []);
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
  const years = [];
  for (var i = 0; i <= 31; i++) {
    if (i === 0) years.push("select");
    else years.push(i - 1);
  }
  // const handleChange = (e) => {
  //   if (e.target.name === "mobile") {
  //     if (/^\d+$/.test(e.target.value)) {
  //       setState({ ...state, [e.target.name]: e.target.value });
  //     } else {
  //       return false;
  //     }
  //   }
  // };
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
  async function handlechangefile(e) {
    setState({
      ...state,
      [e.target.name]: `LGVC_${sessionStorage.getItem("CandidateID")}_${state.FirstName
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
          alert("Resume Uploaded Successfully");
          //setSubmitAction(false);
        } else {
          alert("Try Again...");
        }
        //alert(response.success);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function handleButtonClick(e) {
    e.preventDefault();
    if (validate()) {
      await UpdateCandidate(state)
        .then((response) => {
          if (response[0].length > 0) {
            setShow(true);
            alert("Upadated Successfully");
            //ResetState();
            //setRedirect(true);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  const renderYearsOptions = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));
  function updatedata() {
    setShow(false);
  }
  return (
    <>
      <div className="profileBoxDetails">
        <div className="profileBoxDetailInner">
          <div className="profileForm">
            <Row className="justify-content-between">
              <Col sm={12} md={5}>
                <div className="mb-3">
                  <label className="frmLabel text-start mb-1 float-none">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="frmInput"
                    name="FirstName"
                    value={state.FirstName}
                    onChange={handleChange}
                    readOnly={show}
                  />
                </div>
              </Col>
              <Col sm={12} md={5}>
                <div className="mb-3">
                  <label className="frmLabel text-start mb-1 float-none">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="frmInput"
                    name="LastName"
                    value={state.LastName}
                    onChange={handleChange}
                    readOnly={show}
                  />
                </div>
              </Col>
              <Col sm={12} md={5}>
                <div className="mb-3">
                  <label className="frmLabel text-start mb-1 float-none">
                    Mobile Number
                  </label>
                  <div className="d-flex">
                    <input
                      type="text"
                      defaultValue="+91"
                      className="frmInput mb-2 me-3"
                      disabled={show}
                      autoComplete="off"
                      style={{
                        width: "70px",
                        textAlign: "right",
                        cursor: "not-allowed",
                      }}
                    />
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Mobile Number"
                      className="frmInput mb-2"
                      name="Mobile"
                      onChange={handleChange}
                      maxLength="10"
                      value={state.Mobile}
                      onChange={handleChange}
                      autoComplete="off"
                      readOnly={show}
                    />
                  </div>
                </div>
              </Col>
              <Col sm={12} md={5}>
                <div className="mb-3">
                  <label className="frmLabel text-start mb-1 float-none">
                    Total Work Experience
                  </label>
                  <div className="d-flex mb-2 pb-1">
                    <div className="d-flex align-items-center me-4">
                      <select
                        className="frmInput w-auto mb-0"
                        name="WorkExpInY"
                        value={state.WorkExpInY}
                        onChange={handleChange}
                        disabled={show}
                      >
                        {renderYearsOptions}
                      </select>
                      <p className="frmText mb-0">Year(s)</p>
                    </div>
                    <div className="d-flex align-items-center me-4">
                      <select
                        className="frmInput w-auto mb-0"
                        name="WorkExpInM"
                        value={state.WorkExpInM}
                        onChange={handleChange}
                        disabled={show}
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
                        <option>12</option>
                      </select>
                      <p className="frmText mb-0">Month(s)</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={5}>
                <div className="mb-3">
                  <label className="frmLabel text-start mb-1 float-none">
                    Resume
                  </label>
                  <div className="uploadedFile">
                    {show ?
                      <>
                        <span className="d-block mb-2">
                          {state.Resumepath}
                        </span>
                        <a
                          href={"https://admin.legavac.com/uploads/resume/" + state.Resumepath}
                          target="_blank"
                          className="btn btn-link border"
                          style={{ textDecoration: 'none' }}
                        >
                          <Icon path={mdiDownload} className="me-2" />
                          Download
                        </a></>
                      :
                      <input
                        type="file"
                        id="uploadResume"
                        name="Resumepath"
                        accept=".doc,.pdf"
                        onChange={handlechangefile}
                      />
                    }
                  </div>
                </div>
              </Col>
              <Col sm={12} md={12}>
                <div class="text-end pt-3">
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
