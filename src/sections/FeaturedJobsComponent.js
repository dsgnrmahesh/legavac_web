import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
import FeaturedJobs from "../components/FeaturedJobs";
import { getPostJobForHome } from "../config/api";

export default function FeaturedJobsComponent() {
  const [state, setState] = useState({
    SearchText: "",
    JobTitleId: "",
    SubJobTitleId: "",
    CityId: "",
    CompanyName: "",
    Experience: "0",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    BindData();
  }, []);
  async function BindData() {
    await getPostJobForHome(state)
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
    // }
  }
  return (
    <>
      <section className="app__section">
        <Container>
          <SectionTitle
            title="Featured Jobs"
            subTitle="Leading Employers already using job and talent."
          />
          <Row className="justify-content-center">
            {data ? data.map((job, idx) =>
              <Col xs={12} sm={6} md={4} lg={4} xl={4} key={idx}>
                <FeaturedJobs
                  data={job}
                  key={idx}
                />
              </Col>
            ) : <></>}
          </Row>
          <div className="app__featuredJobs-items">
            {/* {
              data ?
                data.map((item, index) => (
                  ))
                : ""
            } */}
          </div>
          <div className="app__loadMore">
            <a href="/jobs?k=&l=&e=0" className="app__button-outline">
              Load more listings
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
