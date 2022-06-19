import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecruterSearchResultBlock from "../components/RecruterSearchResultBlock";
import RecrutersSearchFilters from "../components/RecrutersSearchFilters";
export default function RecrutersSearchResults() {
  const recruters = [
    {
      name: "Geeta Kshirsagar",
      gender: "female",
      profession: "HR Professional",
      company: "Dthrill Software solutions pvt. ltd.",
      location: "pune",
      followers: "13,987",
    },
    {
      name: "Dhruval Modi",
      gender: "male",
      profession: "Recruitment Partner",
      company: "Dthrill Software solutions pvt. ltd.",
      location: "pune",
      followers: "3,987",
    },
    {
      name: "Ankita Pardeshi",
      gender: "female",
      profession: "Company Recruiter",
      company: "Dthrill Software solutions pvt. ltd.",
      location: "pune",
      followers: "2148",
    },
    {
      name: "Abhigyan Chaturvedi",
      gender: "male",
      profession: "Incident Manager",
      company: "Dthrill Software solutions pvt. ltd.",
      location: "pune",
      followers: "1617",
    },
    {
      name: "Pallavi Bhandarkar",
      gender: "female",
      profession: "Junior Recruiter",
      company: "Dthrill Software solutions pvt. ltd.",
      location: "pune",
      followers: "77",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <RecrutersSearchFilters />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <div className="search-result-top">
              <p>
                Showing 1 - 44 of <b>44 Atos</b> Recruiters in <b>Pune</b>
              </p>
              <p>
                Short by :
                <select>
                  <option>Relevance</option>
                </select>
              </p>
            </div>
            <div className="search-results">
              <Row>
                {recruters.map((recruter) => (
                  <RecruterSearchResultBlock
                    data={recruter}
                    sm={12}
                    md={12}
                    lg={6}
                  />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
