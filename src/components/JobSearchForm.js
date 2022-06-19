import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiMagnify, mdiMapMarkerOutline } from "@mdi/js";
import { Row, Col } from "react-bootstrap";
import AutoSearchInput from "../Commons/AutoSearchInput";
import { getPostedJobFilterList } from "../config/api";
export default function JobSearchForm() {
  const [jobtitle, setJobTitle] = useState([]);
  const [subjobtitle, setSubJobTitle] = useState([]);
  const [city, setCity] = useState([]);
  const [companyname, setCompanyName] = useState([]);
  const [jobtid, setJobtid] = useState(0);

  const [JobTitleId, setJobTitleId] = useState(0);
  const [state, setState] = useState({
    SearchText: "",
    JobTitleId: "",
    SubJobTitleId: "",
    CityId: "",
    CompanyName: "",
    Experience: "0",
  });
  useEffect(() => {
    // BindData({
    //   SearchText: "",
    //   JobTitleId: "",
    //   SubJobTitleId: "",
    //   CityId: "",
    //   CompanyName:"",
    // });
    BindFilterData();
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
      <form className="app__search-form">
        <Row className="app__search-feilds">
          <Col lg={4} md={4} sm={12} xs={12} className="app__search-input">
            <AutoSearchInput
              options={jobtitle}
              placeholder="Search by job title"
              name="k"
            />
            <Icon path={mdiMagnify} />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="app__search-input">
            <AutoSearchInput
              options={city}
              placeholder="Search by city"
              name="l"
              value={state.CityId}
            />
            <Icon path={mdiMapMarkerOutline} />
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="app__search-select">
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
          <Col lg={1} md={2} sm={12} xs={12} className="app__search-button">
            <button className="app__button" onClick={() => Search()}>
              <Icon path={mdiMagnify} />
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
}
