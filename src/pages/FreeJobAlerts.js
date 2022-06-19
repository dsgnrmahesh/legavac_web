import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AutoSearchInput from "../Commons/AutoSearchInput";
import SectionTitle from "../Commons/SectionTitle";
import {
  IU_Freejobalert,
  getFreejobalertDetailByID,
  getCityForDDL,
  getddlforfreejob,
} from "../config/api";
import Select from "react-select";

export default function FreeJobAlerts(props) {
  const [state, setState] = useState({
    JobalertID: "0",
    Keywords: "",
    CityId: "",
    Workexpinyr: "",
    Workexpinmonth: "",
    Salaryinlakh: "",
    EmailID: "",
    Sendmerelatedjob: "",
    // isContacted:"",
    // ContactedDate:"",
    CreatedBy: "0",
    errors: [],
  });
  const {
    match: { params },
  } = props;
  const { id } = params;
  const [cityddl, setCityddl] = useState([]);
  const [ddlList, setDdlList] = useState([]);
  useEffect(() => {
    BindCityDDL();
    BindddlList();
    if (id !== "" && id !== "0" && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    if (e.target.name === "Sendmerelatedjob") {
      setState({ ...state, [e.target.name]: e.target.checked ? 1 : 0 });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }
  function handlechangekeyword(e) {
    const a = Array.isArray(e) ? e.map(x => x.value) : [];
    setState({ ...state, Keywords: a.toString() });
  }
  async function SaveData() {
    console.log(state);
    if (validate()) {
      await IU_Freejobalert(state)
        .then((response) => {
          if (typeof response[0][0].ID !== "undefined") {
            //alert(response[0][0].ID);
            alert("Data Save Successfully");
            window.location.href = "/";
          }
        })
        .catch((error) => {
          alert(error);
        });
      //     console.log(response.data);
      // });
    }
  }
  async function BindCityDDL() {
    await getCityForDDL()
      .then((response) => {
        setCityddl(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindddlList() {
    await getddlforfreejob()
      .then((response) => {
        setDdlList(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.Keywords) {
      IsValid = false;
      errors["Keywords"] = "Please enter keyword";
    }

    if (!state.CityId) {
      IsValid = false;
      errors["CityId"] = "City is Required";
    }

    if (!state.EmailID) {
      IsValid = false;
      errors["EmailID"] = "Email ID is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  async function UpdateData(id) {
    await getFreejobalertDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  const years = [
    "Select",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];
  const salarys = [
    "Select",
    "0.5",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "55+",
    "60+",
    "65+",
    "70+",
    "75+",
    "80+",
    "85+",
    "90+",
    "95+",
    "100+",
  ];
  const getYear = () => {
    var d = new Date();
    return "Create a Free Job Alert " + d.getFullYear();
  };
  const renderYearsOptions = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));
  const renderSalryOptions = salarys.map((salary) => (
    <option value={salary} key={salary}>
      {salary}
    </option>
  ));
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section">
        <Container>
          <SectionTitle
            title={getYear()}
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Row>
            <Col sm={12} md={8}>
              <div className="pb-0 pt-4 border px-4 mx-2 mb-3 rounded-1">
                <Row>
                  <Col xs={12} md={3}>
                    <label className="frmLabel">Keywords</label>
                  </Col>
                  <Col xs={12} md={9}>
                    <Select
                      name="Keywords"
                      className="basic-multi-select"
                      classNamePrefix="Skills, Designations, Companies"
                      placeholder="Designations, Companies"
                      onChange={handlechangekeyword}
                      //onInputChange={handleInputChange}
                      options={ddlList}
                      value={ddlList.filter(obj => state.Keywords.includes(obj.value))}
                      isMulti
                      isClearable
                    />
                    {/* <AutoSearchInput
                          options={[
                            "Trainee Engineer",
                            "Software Engineer",
                            "System Analyst",
                            "PHP developer",
                            "Android developer",
                            "Project Manager",
                            "General Manager",
                            "Business Development Manager",
                            "Internet Marketing Head",
                            "Content Writter",
                            "System Administrator",
                            "Web Developer",
                            "UI / UX Developer",
                          ]}
                          placeholder="Job title, keywords or company name"
                          name="k"
                        />
                        <Icon path={mdiMagnify} /> */}
                    {state.Keywords ? <div>{state.errors.Keywords}</div> : ""}
                  </Col>

                  <Col xs={12} md={3}>
                    <label className="frmLabel">Location</label>
                  </Col>
                  <Col xs={12} md={9}>
                    <input
                    type="text"
                    placeholder="Enter the cities you want to work in"
                    className="frmInput"
                    name="CityId"
                    value={state.CityId}
                    onChange={handlechange}
                    />
                    {/* <select
                      name="CityId"
                      onChange={handlechange}
                      value={state.CityId}
                      className="frmInput"
                    >
                      <option value="0">Select</option>
                      {cityddl.map((item, index) => {
                        return (
                          <option value={item.CityId}>{item.CityName}</option>
                        );
                      })}
                    </select> */}
                    {state.CityId ? <div>{state.errors.CityId}</div> : ""}
                  </Col>

                  <Col xs={12} md={3}>
                    <label className="frmLabel">Work Experience</label>
                  </Col>
                  <Col xs={12} md={9}>
                    <div className="d-flex mb-2 pb-2">
                      <div className="d-flex align-items-center me-4">
                        <select
                          className="frmInput w-auto mb-0"
                          name="Workexpinyr"
                          value={state.Workexpinyr}
                          onChange={handlechange}
                        >
                          {renderYearsOptions}
                        </select>
                        <p className="frmText mb-0">Year(s)</p>
                      </div>
                      <div className="d-flex align-items-center me-4">
                        <select
                          className="frmInput w-auto mb-0"
                          name="Workexpinmonth"
                          value={state.Workexpinmonth}
                          onChange={handlechange}
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
                    </div>
                  </Col>
                  <Col xs={12} md={3}>
                    <label className="frmLabel">Expected Salary</label>
                  </Col>
                  <Col xs={12} md={9}>
                    <select
                      className="frmInput w-auto"
                      name="Salaryinlakh"
                      value={state.Salaryinlakh}
                      onChange={handlechange}
                    >
                      {renderSalryOptions}
                    </select>
                    <p className="frmText">in Lakhs</p>
                  </Col>

                  <Col xs={12} md={3}>
                    <label className="frmLabel">Email ID</label>
                  </Col>
                  <Col xs={12} md={9}>
                    <input
                      type="text"
                      placeholder="Type or Select the desired category where you want to work"
                      className="frmInput mb-2"
                      name="EmailID"
                      value={state.EmailID}
                      onChange={handlechange}
                    />
                    {state.EmailID ? (
                      <div className="invalid-feedback">
                        {state.errors.EmailID}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col md={{ span: 9, offset: 3 }}>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="Sendmerelatedjob"
                        id="flexCheckDefault"
                        onChange={handlechange}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Also send me jobs closely related to my search terms
                      </label>
                    </div>
                  </Col>
                  <Col md={12} align="center">
                    <button
                      className="btn btn-success rounded-1 mb-4 px-4 py-2"
                      onClick={SaveData}
                    >
                      Create Job Alert
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div
                className="border rounded-1 mx-2 px-3 py-4"
                style={{ height: "100%" }}
              >
                <h2 className="frmSdHeading">
                  Why should you create a free job alert?
                </h2>
                <ul>
                  <li>Get relevant jobs directly in your inbox</li>
                  <li>Stay updated with latest opportunities</li>
                  <li>Be the first one to apply</li>
                  <li>Create up to 5 personalized job alerts</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
