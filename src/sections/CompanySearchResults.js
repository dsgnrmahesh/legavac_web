import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompanySearchFilters from "../components/CompanySearchFilters";
import CompanySearchResultBlock from "../components/CompanySearchResultBlock";
export default function CompanySearchResults() {
  const companies = [
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      desc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      desc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      desc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      desc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      desc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      desc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      desc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <CompanySearchFilters />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <div className="search-result-top">
              <p>
                Showing 1 - 44 of 44{" "}
                <b> Dthrill Software solutions pvt. ltd.</b> Recruiters in{" "}
                <b>Pune</b>
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
                {companies.map((company) => (
                  <CompanySearchResultBlock
                    data={company}
                    sm={12}
                    md={12}
                    lg={12}
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
