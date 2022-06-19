import React from "react";
import Icon from "@mdi/react";
import { mdiMagnify, mdiMapMarkerOutline } from "@mdi/js";
import { Row, Col } from "react-bootstrap";
import AutoSearchInput from "../Commons/AutoSearchInput";
export default function RecruterSearchForm() {
  return (
    <>
      <form className="app__search-form" action="/recruters">
        <Row className="app__search-feilds justify-content-center">
          <Col lg={4} md={4} sm={12} xs={12} className="app__search-input">
            <AutoSearchInput
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
            <Icon path={mdiMagnify} />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="app__search-input">
            <AutoSearchInput
              options={[
                "Pune, Maharashtra",
                "Thane, Maharashtra",
                "Kalyan, Maharashtra",
                "Andheri, Maharashtra",
                "Kharghar, Maharashtra",
                "Vikhroli, Maharashtra",
                "Nagpur, Maharashtra",
                "Nashik, Maharashtra",
              ]}
              placeholder="City, state, or pin code"
              name="l"
            />
            <Icon path={mdiMapMarkerOutline} />
          </Col>
          <Col className="app__search-button">
            <button className="app__button width-auto">
              <Icon path={mdiMagnify} />
              <span>Search</span>
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
}
