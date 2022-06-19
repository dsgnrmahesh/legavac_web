import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiMagnify, mdiMapMarkerOutline } from "@mdi/js";
import { Col, Container, Row } from "react-bootstrap";
import AutoSearchInput from "../Commons/AutoSearchInput";
import { getPostedJobFilterList } from "../config/api";

export default function MainSearchComponent() {
  const [jobtitle, setJobTitle] = useState([]);
  const [subjobtitle, setSubJobTitle] = useState([]);
  const [city, setCity] = useState([]);
  const [companyname, setCompanyName] = useState([]);
  const [jobtid, setJobtid] = useState(0);
  const [show, setShow] = useState(false);

  const [JobTitleId, setJobTitleId] = useState(0);
  // const [state, setState] = useState({
  //   SearchText: "",
  //   JobTitleId: "",
  //   SubJobTitleId: "",
  //   CityId: "",
  //   CompanyName: "",
  //   Experience: "0",
  // });
  useEffect(() => {
    // BindData({
    //   SearchText: "",
    //   JobTitleId: "",
    //   SubJobTitleId: "",
    //   CityId: "",
    //   CompanyName:"",
    // });
    BindFilterData();
    if (
      sessionStorage.getItem("CandidateID") !== null &&
      sessionStorage.getItem("FullName") !== null &&
      sessionStorage.getItem("EmailID") !== null
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);
  async function BindFilterData() {
    await getPostedJobFilterList({ JobTitleId: jobtid })
      .then((response) => {
        setJobTitle(response[0]);
        setSubJobTitle(response[1]);
        setCity(response[4]);
        setCompanyName(response[3]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  function Search() {

    window.location.href = "/jobs?k=" + document.getElementsByName('k')[0].value + "&l="
      + document.getElementsByName('l')[0].value
      + "&e=" + document.getElementsByName('e')[0].value;
  }

  return (
    <>
      <section
        className="app__mainSearch"
        style={{ backgroundImage: "url(/images/parallax1.jpg)" }}
      >
        <Container fluid className="app__container">
          <Row className={!show ? "justify-content-center" : ""}>
            <Col sm={12} lg={!show ? 10 : 8}>
              <div className="app__mainSearch_inner">
                <div className="app__mainSearch_content">
                  <h1>The Easiest Way to Get Your New Job</h1>
                  <span className="app__mainSearch_content-mutedText">
                    Find Jobs, Employment &amp; Career Opportunities
                  </span>
                  {/* <form style={{ clear: "both" }}> */}
                  <Row className="app__mainSearch_from">
                    <Col
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                      className="app__mainSearch_from-input ps-0"
                    >
                      <AutoSearchInput
                        options={jobtitle}
                        placeholder="Search by job title"
                        name="k"
                      />
                      <Icon path={mdiMagnify} />
                    </Col>
                    <Col
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                      className="app__mainSearch_from-input ps-0"
                    >
                      <AutoSearchInput
                        options={city}
                        placeholder="Search by city"
                        name="l"
                      />
                      <Icon path={mdiMapMarkerOutline} />
                    </Col>
                    <Col
                      lg={3}
                      md={3}
                      sm={12}
                      xs={12}
                      className="app__mainSearch_from-select ps-0"
                    >
                      <select name="e">
                        <option value="0">Select Experience</option>
                        <option value="0-1">0-1 year</option>
                        <option value="1-2">1-2 year</option>
                        <option value="2-3">2-3 year</option>
                        <option value="3-4">3-4 year</option>
                        <option value="4-50">More than 4 Year</option>
                      </select>
                      <Icon path={mdiChevronDown} />
                    </Col>
                    <Col
                      lg={1}
                      md={1}
                      sm={12}
                      xs={12}
                      className="app__mainSearch_from-button ps-0"
                    >
                      <button className="app__button" onClick={() => Search()}>
                        <Icon path={mdiMagnify} />
                        {window.innerWidth < 600 ? (
                          <span>search</span>
                        ) : (
                          <></>
                        )}
                      </button>
                    </Col>
                  </Row>
                  {/* </form> */}
                </div>
              </div>
            </Col>
            {show ? (
              <Col sm={12} lg={4}>
                <div className="hero-right-block">
                  <p className="hrb-text">New to LegaVac?</p>
                  <p className="hrb-text">
                    <a href="auth/register-for-free" className="hrb-link">
                      Register with us
                    </a>
                  </p>

                  <p className="hrb-hr">or</p>
                  <p className="hrb-text pb-0">
                    <a href="auth/register-for-free" className="hrb-button">
                      upload resume
                    </a>
                  </p>
                </div>
              </Col>) : ""}
            <Col sm={12} lg={12}>
              <div className="hero-ja">
                <p className="hero-ja-text">
                  Get an email on jobs matching your criteria
                </p>
                <span className="hero-ja-text-sub">
                  No registration required
                </span>
                <a href="/create-free-job-alerts" className="hero-ja-link">
                  create job alert
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
