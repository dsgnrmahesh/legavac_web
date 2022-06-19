import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DeleteAccount from "./DeleteAccount";
import EducationslDetails from "./EducationslDetails";
import EmploymentDetails from "./EmploymentDetails";
import MyApplications from "./MyApplications";
import PersonalInfotation from "./PersonalInfotation";
import ProfileBoxLinks from "./ProfileBoxLinks";

export default function MyProfile() {
  const [component, setComponent] = useState("personal-information");
  const urlHash = window.location.hash.split("#")[1];
  useEffect(() => {
    if (urlHash) setComponent(urlHash);
    else window.location.hash = "personal-information";
  }, []);
  const handleClick = (e) => {
    const dataName = e.target.dataset.name;
    if (dataName !== "logout") {
      window.location.hash = dataName;
      setComponent(dataName);
    }
  };
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section form-section pb-5 pt-3">
        <Container fluid>
          <Row>
            <Col sm={12} md={3} lg={3} className="ps-sm-0">
              <ProfileBoxLinks
                handleClick={handleClick}
                component={component}
              />
            </Col>
            <Col
              sm={12}
              md={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
            >
              {component === "personal-information" ? (
                <PersonalInfotation />
              ) : (
                ""
              )}
              {component === "employment-details" ? <EmploymentDetails /> : ""}
              {component === "educational-details" ? (
                <EducationslDetails />
              ) : (
                ""
              )}
              {component === "my-applications" ? <MyApplications /> : ""}
              {component === "delete-my-account" ? <DeleteAccount /> : ""}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
